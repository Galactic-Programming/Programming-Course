using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.Rendering;
using RazorPagesMovie.Data;
using RazorPagesMovie.Models;

namespace RazorPagesMovie.Pages.Movies
{
    public class IndexModel : PageModel
    {
        private readonly RazorPagesMovie.Data.RazorPagesMovieContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public IndexModel(RazorPagesMovie.Data.RazorPagesMovieContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public IList<Movie> Movie { get; set; } = default!;

        [BindProperty(SupportsGet = true)]
        public string? SearchString { get; set; }

        [BindProperty(SupportsGet = true)]
        public string? MovieGenre { get; set; }

        [BindProperty(SupportsGet = true)]
        public string? MovieRating { get; set; }

        [BindProperty(SupportsGet = true)]
        public string? SortOrder { get; set; }

        // Advanced Search Parameters
        [BindProperty(SupportsGet = true)]
        public string? Director { get; set; }

        [BindProperty(SupportsGet = true)]
        public int? YearFrom { get; set; }

        [BindProperty(SupportsGet = true)]
        public int? YearTo { get; set; }

        [BindProperty(SupportsGet = true)]
        public decimal? PriceFrom { get; set; }

        [BindProperty(SupportsGet = true)]
        public decimal? PriceTo { get; set; }

        [BindProperty(SupportsGet = true)]
        public decimal? MinRating { get; set; }

        [BindProperty(SupportsGet = true)]
        public int? MinDuration { get; set; }

        [BindProperty(SupportsGet = true)]
        public int? MaxDuration { get; set; }

        [BindProperty(SupportsGet = true)]
        public bool? IsAvailable { get; set; }

        [BindProperty(SupportsGet = true)]
        public bool? HasReviews { get; set; }

        [BindProperty(SupportsGet = true)]
        public string? Language { get; set; }

        [BindProperty(SupportsGet = true)]
        public string? Country { get; set; }

        // Pagination
        [BindProperty(SupportsGet = true)]
        public int PageNumber { get; set; } = 1;

        public int PageSize { get; set; } = 12;
        public int TotalPages { get; set; }
        public bool HasPreviousPage => PageNumber > 1;
        public bool HasNextPage => PageNumber < TotalPages;

        public SelectList? Genres { get; set; }
        public SelectList? Ratings { get; set; }

        // User information
        public ApplicationUser? CurrentUser { get; set; }
        public bool IsAuthenticated { get; set; }
        public bool IsAdmin { get; set; }

        // Statistics Properties
        public int TotalMovies { get; set; }
        public decimal AveragePrice { get; set; }
        public string MostPopularGenre { get; set; } = string.Empty;
        public Movie? NewestMovie { get; set; }
        public int TotalGenres { get; set; }
        public Movie? HighestRatedMovie { get; set; }
        public decimal TotalValue { get; set; }
        public int NewReleasesCount { get; set; }

        public async Task OnGetAsync()
        {
            // Load user information
            if (User.Identity?.IsAuthenticated == true)
            {
                IsAuthenticated = true;
                CurrentUser = await _userManager.GetUserAsync(User);
                IsAdmin = CurrentUser?.Role == UserRole.Admin;
            }

            // Set up ViewData for sorting links
            ViewData["TitleSort"] = string.IsNullOrEmpty(SortOrder) ? "title_desc" : "";
            ViewData["DateSort"] = SortOrder == "date" ? "date_desc" : "date";
            ViewData["PriceSort"] = SortOrder == "price" ? "price_desc" : "price";
            ViewData["RatingSort"] = SortOrder == "rating" ? "rating_desc" : "rating";
            ViewData["ImdbSort"] = SortOrder == "imdb" ? "imdb_desc" : "imdb";
            ViewData["DirectorSort"] = SortOrder == "director" ? "director_desc" : "director";

            // Get distinct genres for filter dropdown
            IQueryable<string> genreQuery = from m in _context.Movie
                                            orderby m.Genre
                                            select m.Genre;

            // Get distinct ratings for filter dropdown
            IQueryable<string> ratingQuery = from m in _context.Movie
                                             orderby m.Rating
                                             select m.Rating;

            var movies = from m in _context.Movie
                        select m;

            // Apply search filter
            if (!string.IsNullOrEmpty(SearchString))
            {
                movies = movies.Where(s => s.Title.Contains(SearchString) || 
                                          s.Director.Contains(SearchString) ||
                                          (s.Description != null && s.Description.Contains(SearchString)));
            }

            // Search by director specifically
            if (!string.IsNullOrEmpty(Director))
            {
                movies = movies.Where(m => m.Director != null && m.Director.Contains(Director));
            }

            // Apply genre filter
            if (!string.IsNullOrEmpty(MovieGenre))
            {
                movies = movies.Where(x => x.Genre == MovieGenre);
            }

            // Apply rating filter
            if (!string.IsNullOrEmpty(MovieRating))
            {
                movies = movies.Where(x => x.Rating == MovieRating);
            }

            // Filter by year range
            if (YearFrom.HasValue)
            {
                movies = movies.Where(m => m.ReleaseDate.Year >= YearFrom.Value);
            }
            if (YearTo.HasValue)
            {
                movies = movies.Where(m => m.ReleaseDate.Year <= YearTo.Value);
            }

            // Filter by price range
            if (PriceFrom.HasValue)
            {
                movies = movies.Where(m => m.Price >= PriceFrom.Value);
            }
            if (PriceTo.HasValue)
            {
                movies = movies.Where(m => m.Price <= PriceTo.Value);
            }

            // Filter by minimum IMDB rating
            if (MinRating.HasValue)
            {
                movies = movies.Where(m => m.ImdbRating.HasValue && m.ImdbRating >= MinRating.Value);
            }

            // Filter by availability
            if (IsAvailable.HasValue)
            {
                movies = movies.Where(m => m.IsAvailable == IsAvailable.Value);
            }

            // Filter by language
            if (!string.IsNullOrEmpty(Language))
            {
                movies = movies.Where(m => m.Language != null && m.Language.Contains(Language));
            }

            // Filter by country
            if (!string.IsNullOrEmpty(Country))
            {
                movies = movies.Where(m => m.Country != null && m.Country.Contains(Country));
            }

            // Apply sorting
            movies = SortOrder switch
            {
                "title_desc" => movies.OrderByDescending(m => m.Title),
                "date" => movies.OrderBy(m => m.ReleaseDate),
                "date_desc" => movies.OrderByDescending(m => m.ReleaseDate),
                "price" => movies.OrderBy(m => m.Price),
                "price_desc" => movies.OrderByDescending(m => m.Price),
                "rating" => movies.OrderBy(m => m.Rating),
                "rating_desc" => movies.OrderByDescending(m => m.Rating),
                "imdb" => movies.OrderBy(m => m.ImdbRating ?? 0),
                "imdb_desc" => movies.OrderByDescending(m => m.ImdbRating ?? 0),
                "director" => movies.OrderBy(m => m.Director ?? ""),
                "director_desc" => movies.OrderByDescending(m => m.Director ?? ""),
                _ => movies.OrderBy(m => m.Title),
            };

            // Pagination
            var totalMovies = await movies.CountAsync();
            TotalPages = (int)Math.Ceiling(totalMovies / (double)PageSize);
            
            var skip = (PageNumber - 1) * PageSize;
            var pagedMovies = await movies.Skip(skip).Take(PageSize).ToListAsync();

            // Populate dropdowns
            Genres = new SelectList(await genreQuery.Distinct().ToListAsync());
            Ratings = new SelectList(await ratingQuery.Distinct().ToListAsync());
            
            Movie = pagedMovies;

            // Calculate Statistics (only if no filters applied for accurate stats)
            if (string.IsNullOrEmpty(SearchString) && string.IsNullOrEmpty(MovieGenre) && 
                string.IsNullOrEmpty(MovieRating) && string.IsNullOrEmpty(Director) &&
                !YearFrom.HasValue && !YearTo.HasValue && !PriceFrom.HasValue && !PriceTo.HasValue &&
                !MinRating.HasValue && !IsAvailable.HasValue && string.IsNullOrEmpty(Language) &&
                string.IsNullOrEmpty(Country))
            {
                await CalculateStatisticsAsync();
            }
        }

        private async Task CalculateStatisticsAsync()
        {
            // Total movies
            TotalMovies = await _context.Movie.CountAsync();

            // Average price
            AveragePrice = await _context.Movie.AnyAsync()
                ? await _context.Movie.AverageAsync(m => m.Price)
                : 0;

            // Total value
            TotalValue = await _context.Movie.SumAsync(m => m.Price);

            // Most popular genre
            MostPopularGenre = await _context.Movie
                .GroupBy(m => m.Genre)
                .OrderByDescending(g => g.Count())
                .Select(g => g.Key)
                .FirstOrDefaultAsync() ?? "N/A";

            // Total unique genres
            TotalGenres = await _context.Movie.Select(m => m.Genre).Distinct().CountAsync();

            // Newest movie
            NewestMovie = await _context.Movie.OrderByDescending(m => m.DateAdded).FirstOrDefaultAsync();

            // Highest rated movie (by IMDB rating)
            HighestRatedMovie = await _context.Movie
                .Where(m => m.ImdbRating.HasValue)
                .OrderByDescending(m => m.ImdbRating)
                .FirstOrDefaultAsync();

            // New releases count (movies released in last 2 years)
            var twoYearsAgo = DateTime.Now.AddYears(-2);
            NewReleasesCount = await _context.Movie.CountAsync(m => m.ReleaseDate >= twoYearsAgo);
        }

        public async Task<IActionResult> OnPostExportAsync(int[] movieIds, string format = "csv")
        {
            if (movieIds == null || movieIds.Length == 0)
            {
                TempData["ErrorMessage"] = "No movies selected for export.";
                return RedirectToPage();
            }

            var movies = await _context.Movie
                .Where(m => movieIds.Contains(m.Id))
                .OrderBy(m => m.Title)
                .ToListAsync();

            var csv = GenerateCsvContent(movies);
            var fileName = $"movies_export_{DateTime.Now:yyyyMMdd_HHmmss}.csv";

            TempData["SuccessMessage"] = $"Successfully exported {movies.Count} movies.";
            
            return File(System.Text.Encoding.UTF8.GetBytes(csv), "text/csv", fileName);
        }

        public async Task<IActionResult> OnGetExportAllAsync(string format = "csv")
        {
            var movies = await _context.Movie.OrderBy(m => m.Title).ToListAsync();
            var csv = GenerateCsvContent(movies);
            var fileName = $"all_movies_export_{DateTime.Now:yyyyMMdd_HHmmss}.csv";

            return File(System.Text.Encoding.UTF8.GetBytes(csv), "text/csv", fileName);
        }

        public async Task<IActionResult> OnPostBulkDeleteAsync(int[] movieIds)
        {
            if (movieIds == null || movieIds.Length == 0)
            {
                TempData["ErrorMessage"] = "No movies selected for deletion.";
                return RedirectToPage();
            }

            try
            {
                var moviesToDelete = await _context.Movie
                    .Where(m => movieIds.Contains(m.Id))
                    .ToListAsync();

                _context.Movie.RemoveRange(moviesToDelete);
                await _context.SaveChangesAsync();

                TempData["SuccessMessage"] = $"Successfully deleted {moviesToDelete.Count} movie(s).";
            }
            catch (Exception)
            {
                TempData["ErrorMessage"] = "An error occurred while deleting movies. Please try again.";
            }

            return RedirectToPage();
        }

        private string GenerateCsvContent(List<Movie> movies)
        {
            var csv = new System.Text.StringBuilder();
            
            // Header
            csv.AppendLine("Title,Director,Release Date,Genre,Rating,Price,Duration,Language,Country,IMDB Rating,Description,Cast,Is Available,Date Added");
            
            // Data rows
            foreach (var movie in movies)
            {
                csv.AppendLine($"\"{EscapeCsv(movie.Title)}\"," +
                             $"\"{EscapeCsv(movie.Director)}\"," +
                             $"\"{movie.ReleaseDate:yyyy-MM-dd}\"," +
                             $"\"{EscapeCsv(movie.Genre)}\"," +
                             $"\"{EscapeCsv(movie.Rating)}\"," +
                             $"\"{movie.Price:F2}\"," +
                             $"\"{movie.Duration}\"," +
                             $"\"{EscapeCsv(movie.Language)}\"," +
                             $"\"{EscapeCsv(movie.Country)}\"," +
                             $"\"{movie.ImdbRating?.ToString("F1") ?? ""}\"," +
                             $"\"{EscapeCsv(movie.Description ?? "")}\"," +
                             $"\"{EscapeCsv(movie.Cast ?? "")}\"," +
                             $"\"{movie.IsAvailable}\"," +
                             $"\"{movie.DateAdded:yyyy-MM-dd HH:mm:ss}\"");
            }
            
            return csv.ToString();
        }

        private string EscapeCsv(string value)
        {
            if (string.IsNullOrEmpty(value))
                return "";
                
            return value.Replace("\"", "\"\"");
        }
    }
}
