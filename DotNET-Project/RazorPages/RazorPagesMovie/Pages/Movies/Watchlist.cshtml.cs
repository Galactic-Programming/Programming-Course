using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using RazorPagesMovie.Data;
using RazorPagesMovie.Models;

namespace RazorPagesMovie.Pages.Movies
{
    [Authorize]
    public class WatchlistModel : PageModel
    {
        private readonly RazorPagesMovieContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public WatchlistModel(RazorPagesMovieContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public List<MovieWatchlist> WatchlistItems { get; set; } = new();
        public int UnwatchedCount { get; set; }
        public int WatchedCount { get; set; }

        [BindProperty]
        public string FilterBy { get; set; } = "all";

        public async Task<IActionResult> OnGetAsync(string filterBy = "all")
        {
            FilterBy = filterBy;
            
            var currentUser = await _userManager.GetUserAsync(User);
            if (currentUser == null)
            {
                return Challenge();
            }

            var query = _context.MovieWatchlist
                .Include(w => w.Movie)
                .Where(w => w.UserId == currentUser.Id);

            switch (filterBy?.ToLower())
            {
                case "watched":
                    query = query.Where(w => w.IsWatched);
                    break;
                case "unwatched":
                    query = query.Where(w => !w.IsWatched);
                    break;
                case "high":
                    query = query.Where(w => w.Priority == WatchlistPriority.High || w.Priority == WatchlistPriority.Urgent);
                    break;
                // "all" or default - no additional filter
            }

            WatchlistItems = await query
                .OrderBy(w => w.IsWatched)
                .ThenByDescending(w => w.Priority)
                .ThenByDescending(w => w.AddedDate)
                .ToListAsync();

            // Get counts
            var allItems = await _context.MovieWatchlist
                .Where(w => w.UserId == currentUser.Id)
                .ToListAsync();
            
            UnwatchedCount = allItems.Count(w => !w.IsWatched);
            WatchedCount = allItems.Count(w => w.IsWatched);

            return Page();
        }

        public async Task<IActionResult> OnPostRemoveAsync(int id)
        {
            var currentUser = await _userManager.GetUserAsync(User);
            if (currentUser == null)
            {
                return Challenge();
            }

            var watchlistItem = await _context.MovieWatchlist
                .FirstOrDefaultAsync(w => w.Id == id && w.UserId == currentUser.Id);

            if (watchlistItem != null)
            {
                _context.MovieWatchlist.Remove(watchlistItem);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage(new { filterBy = FilterBy });
        }

        public async Task<IActionResult> OnPostMarkWatchedAsync(int id)
        {
            var currentUser = await _userManager.GetUserAsync(User);
            if (currentUser == null)
            {
                return Challenge();
            }

            var watchlistItem = await _context.MovieWatchlist
                .FirstOrDefaultAsync(w => w.Id == id && w.UserId == currentUser.Id);

            if (watchlistItem != null)
            {
                watchlistItem.IsWatched = !watchlistItem.IsWatched;
                watchlistItem.WatchedDate = watchlistItem.IsWatched ? DateTime.Now : null;
                await _context.SaveChangesAsync();
            }

            return RedirectToPage(new { filterBy = FilterBy });
        }
    }
}
