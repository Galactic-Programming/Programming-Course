using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using RazorPagesMovie.Data;
using RazorPagesMovie.Models;

namespace RazorPagesMovie.Areas.Admin.Pages
{
    [Authorize]
    public class UsersModel : PageModel
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RazorPagesMovieContext _context;

        public UsersModel(UserManager<ApplicationUser> userManager, RazorPagesMovieContext context)
        {
            _userManager = userManager;
            _context = context;
        }

        public IList<ApplicationUser> Users { get; set; } = default!;
        public ApplicationUser? CurrentUser { get; set; }
        public bool IsAdmin { get; set; }
        
        [TempData]
        public string StatusMessage { get; set; } = string.Empty;

        public async Task<IActionResult> OnGetAsync()
        {
            CurrentUser = await _userManager.GetUserAsync(User);
            IsAdmin = CurrentUser?.Role == UserRole.Admin;

            if (!IsAdmin)
            {
                TempData["ErrorMessage"] = "Access denied. Admin privileges required.";
                return RedirectToPage("/Movies/Index");
            }

            Users = await _userManager.Users
                .OrderByDescending(u => u.DateJoined)
                .ToListAsync();

            return Page();
        }

        public async Task<IActionResult> OnPostToggleStatusAsync(string userId)
        {
            CurrentUser = await _userManager.GetUserAsync(User);
            IsAdmin = CurrentUser?.Role == UserRole.Admin;

            if (!IsAdmin)
            {
                TempData["ErrorMessage"] = "Access denied. Admin privileges required.";
                return RedirectToPage("/Movies/Index");
            }

            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                TempData["ErrorMessage"] = "User not found.";
                return RedirectToPage();
            }

            if (user.Id == CurrentUser?.Id)
            {
                TempData["ErrorMessage"] = "You cannot change your own status.";
                return RedirectToPage();
            }

            user.IsActive = !user.IsActive;
            user.LastLoginDate = DateTime.Now;

            var result = await _userManager.UpdateAsync(user);
            if (result.Succeeded)
            {
                var status = user.IsActive ? "activated" : "deactivated";
                TempData["SuccessMessage"] = $"User {user.FullName} has been {status}.";
            }
            else
            {
                TempData["ErrorMessage"] = "Failed to update user status.";
            }

            return RedirectToPage();
        }

        public async Task<IActionResult> OnPostChangeRoleAsync(string userId, UserRole newRole)
        {
            CurrentUser = await _userManager.GetUserAsync(User);
            IsAdmin = CurrentUser?.Role == UserRole.Admin;

            if (!IsAdmin)
            {
                TempData["ErrorMessage"] = "Access denied. Admin privileges required.";
                return RedirectToPage("/Movies/Index");
            }

            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                TempData["ErrorMessage"] = "User not found.";
                return RedirectToPage();
            }

            if (user.Id == CurrentUser?.Id && newRole != UserRole.Admin)
            {
                TempData["ErrorMessage"] = "You cannot remove your own admin privileges.";
                return RedirectToPage();
            }

            user.Role = newRole;

            var result = await _userManager.UpdateAsync(user);
            if (result.Succeeded)
            {
                TempData["SuccessMessage"] = $"User {user.FullName} role changed to {newRole}.";
            }
            else
            {
                TempData["ErrorMessage"] = "Failed to update user role.";
            }

            return RedirectToPage();
        }
    }
}
