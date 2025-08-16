using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using RazorPagesMovie.Data;
using RazorPagesMovie.Models;

namespace RazorPagesMovie.Pages.Movies
{
    [Authorize]
    public class CreateModel : PageModel
    {
        private readonly RazorPagesMovie.Data.RazorPagesMovieContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public CreateModel(RazorPagesMovie.Data.RazorPagesMovieContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public IActionResult OnGet()
        {
            // Initialize with default values
            Movie = new Movie
            {
                ReleaseDate = DateTime.Today,
                Language = "English",
                IsAvailable = true,
                DateAdded = DateTime.Now
            };
            return Page();
        }

        [BindProperty]
        public Movie Movie { get; set; } = default!;

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            // Set system fields
            Movie.DateAdded = DateTime.Now;
            Movie.LastUpdated = DateTime.Now;
            
            // Track who added the movie
            var currentUser = await _userManager.GetUserAsync(User);
            if (currentUser != null)
            {
                Movie.AddedByUserId = currentUser.Id;
                Movie.LastModifiedByUserId = currentUser.Id;
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

            try
            {
                _context.Movie.Add(Movie);
                await _context.SaveChangesAsync();

                TempData["SuccessMessage"] = $"Movie '{Movie.Title}' has been successfully added!";
                return RedirectToPage("./Index");
            }
            catch (Exception)
            {
                ModelState.AddModelError("", "An error occurred while saving the movie. Please try again.");
                // Log the exception here if you have logging configured
                return Page();
            }
        }
    }
}
