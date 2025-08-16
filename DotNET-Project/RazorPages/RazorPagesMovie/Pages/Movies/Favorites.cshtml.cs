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
    public class FavoritesModel : PageModel
    {
        private readonly RazorPagesMovieContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public FavoritesModel(RazorPagesMovieContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public List<MovieFavorite> Favorites { get; set; } = new();

        public async Task<IActionResult> OnGetAsync()
        {
            var currentUser = await _userManager.GetUserAsync(User);
            if (currentUser == null)
            {
                return Challenge();
            }

            Favorites = await _context.MovieFavorites
                .Include(f => f.Movie)
                .Where(f => f.UserId == currentUser.Id)
                .OrderByDescending(f => f.AddedDate)
                .ToListAsync();

            return Page();
        }

        public async Task<IActionResult> OnPostRemoveAsync(int id)
        {
            var currentUser = await _userManager.GetUserAsync(User);
            if (currentUser == null)
            {
                return Challenge();
            }

            var favorite = await _context.MovieFavorites
                .FirstOrDefaultAsync(f => f.Id == id && f.UserId == currentUser.Id);

            if (favorite != null)
            {
                _context.MovieFavorites.Remove(favorite);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage();
        }
    }
}
