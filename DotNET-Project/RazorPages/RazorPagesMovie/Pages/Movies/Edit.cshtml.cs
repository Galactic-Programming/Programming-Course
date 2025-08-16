using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using RazorPagesMovie.Data;
using RazorPagesMovie.Models;

namespace RazorPagesMovie.Pages.Movies
{
    [Authorize]
    public class EditModel : PageModel
    {
        private readonly RazorPagesMovie.Data.RazorPagesMovieContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public EditModel(RazorPagesMovie.Data.RazorPagesMovieContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        [BindProperty]
        public Movie Movie { get; set; } = default!;
        
        public ApplicationUser? CurrentUser { get; set; }
        public bool CanEdit { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            // Load current user
            CurrentUser = await _userManager.GetUserAsync(User);
            
            var movie = await _context.Movie.FirstOrDefaultAsync(m => m.Id == id);
            if (movie == null)
            {
                return NotFound();
            }

            // Check if user can edit this movie
            CanEdit = CurrentUser?.Role == UserRole.Admin || movie.AddedByUserId == CurrentUser?.Id;
            
            if (!CanEdit)
            {
                TempData["ErrorMessage"] = "You don't have permission to edit this movie.";
                return RedirectToPage("./Index");
            }

            Movie = movie;
            return Page();
        }

        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more information, see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            // Load current user and check permissions
            CurrentUser = await _userManager.GetUserAsync(User);
            var originalMovie = await _context.Movie.AsNoTracking().FirstOrDefaultAsync(m => m.Id == Movie.Id);
            
            if (originalMovie == null)
            {
                return NotFound();
            }

            CanEdit = CurrentUser?.Role == UserRole.Admin || originalMovie.AddedByUserId == CurrentUser?.Id;
            
            if (!CanEdit)
            {
                TempData["ErrorMessage"] = "You don't have permission to edit this movie.";
                return RedirectToPage("./Index");
            }

            // Validate business rules
            if (Movie.ReleaseDate > DateTime.Today)
            {
                ModelState.AddModelError("Movie.ReleaseDate", "Release date cannot be in the future.");
                return Page();
            }

            if (Movie.Duration <= 0)
            {
                ModelState.AddModelError("Movie.Duration", "Duration must be greater than 0.");
                return Page();
            }

            // Preserve original user tracking info and update modification info
            Movie.AddedByUserId = originalMovie.AddedByUserId;
            Movie.DateAdded = originalMovie.DateAdded;
            Movie.LastUpdated = DateTime.Now;
            Movie.LastModifiedByUserId = CurrentUser?.Id;

            _context.Attach(Movie).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
                TempData["SuccessMessage"] = $"Movie '{Movie.Title}' has been successfully updated!";
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MovieExists(Movie.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            catch (Exception)
            {
                ModelState.AddModelError("", "An error occurred while updating the movie. Please try again.");
                return Page();
            }

            return RedirectToPage("./Index");
        }

        private bool MovieExists(int id)
        {
            return _context.Movie.Any(e => e.Id == id);
        }
    }
}
