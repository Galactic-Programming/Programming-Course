using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace RazorPagesMovie.Models
{
    public class ApplicationUser : IdentityUser
    {
        [Required]
        [StringLength(100)]
        [Display(Name = "First Name")]
        public string FirstName { get; set; } = string.Empty;

        [Required]
        [StringLength(100)]
        [Display(Name = "Last Name")]
        public string LastName { get; set; } = string.Empty;

        [Display(Name = "Full Name")]
        public string FullName => $"{FirstName} {LastName}";

        [Display(Name = "Date Joined")]
        public DateTime DateJoined { get; set; } = DateTime.Now;

        [Display(Name = "Profile Picture")]
        public string? ProfilePictureUrl { get; set; }

        [Display(Name = "Bio")]
        [StringLength(500)]
        public string? Bio { get; set; }

        [Display(Name = "Last Login")]
        public DateTime? LastLoginDate { get; set; }

        [Display(Name = "Is Active")]
        public bool IsActive { get; set; } = true;

        // User role for simple authorization
        [Display(Name = "User Role")]
        public UserRole Role { get; set; } = UserRole.User;

        // Navigation properties
        public virtual ICollection<Movie> MoviesAdded { get; set; } = new List<Movie>();
        public virtual ICollection<UserMovieInteraction> MovieInteractions { get; set; } = new List<UserMovieInteraction>();
        
        // Phase 3: Advanced interaction properties
        public virtual ICollection<MovieRating> MovieRatings { get; set; } = new List<MovieRating>();
        public virtual ICollection<MovieReview> MovieReviews { get; set; } = new List<MovieReview>();
        public virtual ICollection<MovieFavorite> MovieFavorites { get; set; } = new List<MovieFavorite>();
        public virtual ICollection<MovieWatchlist> MovieWatchlist { get; set; } = new List<MovieWatchlist>();
        public virtual ICollection<ReviewHelpfulness> ReviewHelpfulness { get; set; } = new List<ReviewHelpfulness>();
    }

    public enum UserRole
    {
        User = 0,
        Moderator = 1,
        Admin = 2
    }

    // Track user interactions with movies
    public class UserMovieInteraction
    {
        public int Id { get; set; }
        
        [Required]
        public string UserId { get; set; } = string.Empty;
        public virtual ApplicationUser User { get; set; } = null!;

        [Required]
        public int MovieId { get; set; }
        public virtual Movie Movie { get; set; } = null!;

        [Display(Name = "Interaction Type")]
        public InteractionType Type { get; set; }

        [Display(Name = "Interaction Date")]
        public DateTime InteractionDate { get; set; } = DateTime.Now;

        [Display(Name = "Rating")]
        [Range(1, 10)]
        public int? UserRating { get; set; }

        [Display(Name = "Review")]
        [StringLength(1000)]
        public string? Review { get; set; }

        [Display(Name = "Is Favorite")]
        public bool IsFavorite { get; set; }
    }

    public enum InteractionType
    {
        Viewed = 0,
        Rated = 1,
        Reviewed = 2,
        AddedToFavorites = 3,
        RemovedFromFavorites = 4
    }
}
