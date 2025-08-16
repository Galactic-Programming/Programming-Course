using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using RazorPagesMovie.Data;
using RazorPagesMovie.Models;

namespace RazorPagesMovie.Pages.Movies
{
    [Authorize]
    public class DeleteModel : PageModel
    {
        private readonly RazorPagesMovie.Data.RazorPagesMovieContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public DeleteModel(RazorPagesMovie.Data.RazorPagesMovieContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        [BindProperty]
        public Movie Movie { get; set; } = default!;
        
        public ApplicationUser? CurrentUser { get; set; }
        public bool CanDelete { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            // Load current user
            CurrentUser = await _userManager.GetUserAsync(User);

            var movie = await _context.Movie.FirstOrDefaultAsync(m => m.Id == id);

            if (movie is not null)
            {
                // Check if user can delete this movie
                CanDelete = CurrentUser?.Role == UserRole.Admin || movie.AddedByUserId == CurrentUser?.Id;
                
                if (!CanDelete)
                {
                    TempData["ErrorMessage"] = "You don't have permission to delete this movie.";
                    return RedirectToPage("./Index");
                }

                Movie = movie;
                return Page();
            }

            return NotFound();
        }

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            // Load current user
            CurrentUser = await _userManager.GetUserAsync(User);

            var movie = await _context.Movie.FindAsync(id);
            if (movie != null)
            {
                // Check if user can delete this movie
                CanDelete = CurrentUser?.Role == UserRole.Admin || movie.AddedByUserId == CurrentUser?.Id;
                
                if (!CanDelete)
                {
                    TempData["ErrorMessage"] = "You don't have permission to delete this movie.";
                    return RedirectToPage("./Index");
                }

                string movieTitle = movie.Title; // Store title for success message
                Movie = movie;
                _context.Movie.Remove(Movie);
                
                try
                {
                    await _context.SaveChangesAsync();
                    TempData["SuccessMessage"] = $"Movie '{movieTitle}' has been successfully deleted.";
                }
                catch (Exception)
                {
                    TempData["ErrorMessage"] = "An error occurred while deleting the movie. Please try again.";
                }
            }

            return RedirectToPage("./Index");
        }
    }
}
