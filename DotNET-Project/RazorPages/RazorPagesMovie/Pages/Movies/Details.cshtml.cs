using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using RazorPagesMovie.Data;
using RazorPagesMovie.Models;

namespace RazorPagesMovie.Pages.Movies
{
    public class DetailsModel : PageModel
    {
        private readonly RazorPagesMovie.Data.RazorPagesMovieContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public DetailsModel(RazorPagesMovie.Data.RazorPagesMovieContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public Movie Movie { get; set; } = default!;
        public MovieRating? UserRating { get; set; }
        public MovieReview? UserReview { get; set; }
        public bool IsUserFavorite { get; set; }
        public bool IsInWatchlist { get; set; }
        public List<MovieReview> Reviews { get; set; } = new();
        public double AverageRating { get; set; }
        public int TotalRatings { get; set; }
        public Dictionary<int, int> RatingCounts { get; set; } = new();

        [BindProperty]
        public int NewRating { get; set; }

        [BindProperty]
        public string ReviewContent { get; set; } = string.Empty;

        [BindProperty]
        public string FavoriteNotes { get; set; } = string.Empty;

        [BindProperty]
        public WatchlistPriority WatchlistPriority { get; set; } = WatchlistPriority.Medium;

        [BindProperty]
        public string WatchlistNotes { get; set; } = string.Empty;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var movie = await _context.Movie
                .Include(m => m.MovieRatings)
                .Include(m => m.MovieReviews)
                    .ThenInclude(r => r.User)
                .Include(m => m.MovieReviews)
                    .ThenInclude(r => r.Rating)
                .FirstOrDefaultAsync(m => m.Id == id);

            if (movie == null)
            {
                return NotFound();
            }

            Movie = movie;

            // Load user-specific data if authenticated
            if (User.Identity?.IsAuthenticated == true)
            {
                var currentUser = await _userManager.GetUserAsync(User);
                if (currentUser != null)
                {
                    UserRating = await _context.MovieRatings
                        .FirstOrDefaultAsync(r => r.UserId == currentUser.Id && r.MovieId == id);

                    UserReview = await _context.MovieReviews
                        .Include(r => r.Rating)
                        .FirstOrDefaultAsync(r => r.UserId == currentUser.Id && r.MovieId == id);

                    IsUserFavorite = await _context.MovieFavorites
                        .AnyAsync(f => f.UserId == currentUser.Id && f.MovieId == id);

                    IsInWatchlist = await _context.MovieWatchlist
                        .AnyAsync(w => w.UserId == currentUser.Id && w.MovieId == id);
                }
            }

            // Load reviews (approved only)
            Reviews = await _context.MovieReviews
                .Include(r => r.User)
                .Include(r => r.Rating)
                .Where(r => r.MovieId == id && r.IsApproved)
                .OrderByDescending(r => r.ReviewDate)
                .ToListAsync();

            // Calculate rating statistics
            if (Movie.MovieRatings.Any())
            {
                AverageRating = Movie.MovieRatings.Average(r => r.Rating);
                TotalRatings = Movie.MovieRatings.Count;
                
                RatingCounts = Movie.MovieRatings
                    .GroupBy(r => r.Rating)
                    .ToDictionary(g => g.Key, g => g.Count());
            }

            return Page();
        }

        public async Task<IActionResult> OnPostRateAsync(int? id)
        {
            if (id == null || !User.Identity?.IsAuthenticated == true)
            {
                return NotFound();
            }

            var currentUser = await _userManager.GetUserAsync(User);
            if (currentUser == null)
            {
                return Challenge();
            }

            if (NewRating < 1 || NewRating > 5)
            {
                ModelState.AddModelError("NewRating", "Rating must be between 1 and 5 stars.");
                return await OnGetAsync(id);
            }

            var existingRating = await _context.MovieRatings
                .FirstOrDefaultAsync(r => r.UserId == currentUser.Id && r.MovieId == id);

            if (existingRating != null)
            {
                // Update existing rating
                existingRating.Rating = NewRating;
                existingRating.RatedDate = DateTime.Now;
            }
            else
            {
                // Create new rating
                var newRating = new MovieRating
                {
                    UserId = currentUser.Id,
                    MovieId = id.Value,
                    Rating = NewRating,
                    RatedDate = DateTime.Now
                };
                _context.MovieRatings.Add(newRating);
            }

            await _context.SaveChangesAsync();
            return RedirectToPage(new { id });
        }

        public async Task<IActionResult> OnPostReviewAsync(int? id)
        {
            if (id == null || !User.Identity?.IsAuthenticated == true)
            {
                return NotFound();
            }

            var currentUser = await _userManager.GetUserAsync(User);
            if (currentUser == null)
            {
                return Challenge();
            }

            if (string.IsNullOrWhiteSpace(ReviewContent))
            {
                ModelState.AddModelError("ReviewContent", "Review content is required.");
                return await OnGetAsync(id);
            }

            var existingReview = await _context.MovieReviews
                .FirstOrDefaultAsync(r => r.UserId == currentUser.Id && r.MovieId == id);

            if (existingReview != null)
            {
                // Update existing review
                existingReview.Content = ReviewContent;
                existingReview.LastUpdated = DateTime.Now;
                existingReview.IsApproved = false; // Re-approval needed
            }
            else
            {
                // Create new review
                var newReview = new MovieReview
                {
                    UserId = currentUser.Id,
                    MovieId = id.Value,
                    Content = ReviewContent,
                    ReviewDate = DateTime.Now,
                    IsApproved = false, // Pending approval
                    HelpfulVotes = 0
                };

                // Link to user's rating if exists
                var userRating = await _context.MovieRatings
                    .FirstOrDefaultAsync(r => r.UserId == currentUser.Id && r.MovieId == id);
                if (userRating != null)
                {
                    newReview.RatingId = userRating.Id;
                }

                _context.MovieReviews.Add(newReview);
            }

            await _context.SaveChangesAsync();
            return RedirectToPage(new { id });
        }

        public async Task<IActionResult> OnPostToggleFavoriteAsync(int? id)
        {
            if (id == null || !User.Identity?.IsAuthenticated == true)
            {
                return NotFound();
            }

            var currentUser = await _userManager.GetUserAsync(User);
            if (currentUser == null)
            {
                return Challenge();
            }

            var existingFavorite = await _context.MovieFavorites
                .FirstOrDefaultAsync(f => f.UserId == currentUser.Id && f.MovieId == id);

            if (existingFavorite != null)
            {
                // Remove from favorites
                _context.MovieFavorites.Remove(existingFavorite);
            }
            else
            {
                // Add to favorites
                var newFavorite = new MovieFavorite
                {
                    UserId = currentUser.Id,
                    MovieId = id.Value,
                    AddedDate = DateTime.Now,
                    Notes = FavoriteNotes
                };
                _context.MovieFavorites.Add(newFavorite);
            }

            await _context.SaveChangesAsync();
            return RedirectToPage(new { id });
        }

        public async Task<IActionResult> OnPostToggleWatchlistAsync(int? id)
        {
            if (id == null || !User.Identity?.IsAuthenticated == true)
            {
                return NotFound();
            }

            var currentUser = await _userManager.GetUserAsync(User);
            if (currentUser == null)
            {
                return Challenge();
            }

            var existingWatchlistItem = await _context.MovieWatchlist
                .FirstOrDefaultAsync(w => w.UserId == currentUser.Id && w.MovieId == id);

            if (existingWatchlistItem != null)
            {
                // Remove from watchlist
                _context.MovieWatchlist.Remove(existingWatchlistItem);
            }
            else
            {
                // Add to watchlist
                var newWatchlistItem = new MovieWatchlist
                {
                    UserId = currentUser.Id,
                    MovieId = id.Value,
                    AddedDate = DateTime.Now,
                    Priority = WatchlistPriority,
                    Notes = WatchlistNotes,
                    IsWatched = false
                };
                _context.MovieWatchlist.Add(newWatchlistItem);
            }

            await _context.SaveChangesAsync();
            return RedirectToPage(new { id });
        }

        public async Task<IActionResult> OnPostHelpfulAsync(int reviewId, bool isHelpful)
        {
            if (!User.Identity?.IsAuthenticated == true)
            {
                return Challenge();
            }

            var currentUser = await _userManager.GetUserAsync(User);
            if (currentUser == null)
            {
                return Challenge();
            }

            var review = await _context.MovieReviews.FindAsync(reviewId);
            if (review == null)
            {
                return NotFound();
            }

            var existingVote = await _context.ReviewHelpfulness
                .FirstOrDefaultAsync(h => h.UserId == currentUser.Id && h.ReviewId == reviewId);

            if (existingVote != null)
            {
                // Update existing vote
                if (existingVote.IsHelpful != isHelpful)
                {
                    // Change vote direction
                    if (existingVote.IsHelpful)
                        review.HelpfulVotes--;
                    else
                        review.HelpfulVotes++;
                    
                    existingVote.IsHelpful = isHelpful;
                    existingVote.VotedDate = DateTime.Now;
                }
                else
                {
                    // Remove vote (toggle off)
                    if (isHelpful)
                        review.HelpfulVotes--;
                    
                    _context.ReviewHelpfulness.Remove(existingVote);
                }
            }
            else
            {
                // Create new vote
                var newVote = new ReviewHelpfulness
                {
                    UserId = currentUser.Id,
                    ReviewId = reviewId,
                    IsHelpful = isHelpful,
                    VotedDate = DateTime.Now
                };
                _context.ReviewHelpfulness.Add(newVote);

                if (isHelpful)
                    review.HelpfulVotes++;
            }

            await _context.SaveChangesAsync();
            return RedirectToPage(new { id = review.MovieId });
        }
    }
}
