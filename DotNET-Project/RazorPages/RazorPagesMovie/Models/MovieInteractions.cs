using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RazorPagesMovie.Models
{
    // Movie Rating Model
    public class MovieRating
    {
        public int Id { get; set; }

        [Required]
        public string UserId { get; set; } = string.Empty;
        public virtual ApplicationUser User { get; set; } = null!;

        [Required]
        public int MovieId { get; set; }
        public virtual Movie Movie { get; set; } = null!;

        [Required]
        [Display(Name = "Rating")]
        [Range(1, 10, ErrorMessage = "Rating must be between 1 and 10")]
        public int Rating { get; set; }

        [Display(Name = "Rated Date")]
        public DateTime RatedDate { get; set; } = DateTime.Now;
    }

    // Movie Review Model
    public class MovieReview
    {
        public int Id { get; set; }

        [Required]
        public string UserId { get; set; } = string.Empty;
        public virtual ApplicationUser User { get; set; } = null!;

        [Required]
        public int MovieId { get; set; }
        public virtual Movie Movie { get; set; } = null!;

        [Required(ErrorMessage = "Review content is required")]
        [StringLength(2000, MinimumLength = 10, ErrorMessage = "Review must be between 10 and 2000 characters")]
        [Display(Name = "Review")]
        public string Content { get; set; } = string.Empty;

        [Display(Name = "Review Date")]
        public DateTime ReviewDate { get; set; } = DateTime.Now;

        [Display(Name = "Last Updated")]
        public DateTime? LastUpdated { get; set; }

        [Display(Name = "Is Approved")]
        public bool IsApproved { get; set; } = true;

        [Display(Name = "Helpful Votes")]
        public int HelpfulVotes { get; set; } = 0;

        // Associated rating (optional)
        public int? RatingId { get; set; }
        public virtual MovieRating? Rating { get; set; }
    }

    // Movie Favorite Model
    public class MovieFavorite
    {
        public int Id { get; set; }

        [Required]
        public string UserId { get; set; } = string.Empty;
        public virtual ApplicationUser User { get; set; } = null!;

        [Required]
        public int MovieId { get; set; }
        public virtual Movie Movie { get; set; } = null!;

        [Display(Name = "Added to Favorites")]
        public DateTime AddedDate { get; set; } = DateTime.Now;

        [Display(Name = "Notes")]
        [StringLength(500)]
        public string? Notes { get; set; }
    }

    // Movie Watchlist Model
    public class MovieWatchlist
    {
        public int Id { get; set; }

        [Required]
        public string UserId { get; set; } = string.Empty;
        public virtual ApplicationUser User { get; set; } = null!;

        [Required]
        public int MovieId { get; set; }
        public virtual Movie Movie { get; set; } = null!;

        [Display(Name = "Added to Watchlist")]
        public DateTime AddedDate { get; set; } = DateTime.Now;

        [Display(Name = "Priority")]
        public WatchlistPriority Priority { get; set; } = WatchlistPriority.Medium;

        [Display(Name = "Notes")]
        [StringLength(500)]
        public string? Notes { get; set; }

        [Display(Name = "Watched")]
        public bool IsWatched { get; set; } = false;

        [Display(Name = "Watched Date")]
        public DateTime? WatchedDate { get; set; }
    }

    public enum WatchlistPriority
    {
        Low = 0,
        Medium = 1,
        High = 2,
        Urgent = 3
    }

    // Review Helpfulness Tracking
    public class ReviewHelpfulness
    {
        public int Id { get; set; }

        [Required]
        public string UserId { get; set; } = string.Empty;
        public virtual ApplicationUser User { get; set; } = null!;

        [Required]
        public int ReviewId { get; set; }
        public virtual MovieReview Review { get; set; } = null!;

        [Display(Name = "Is Helpful")]
        public bool IsHelpful { get; set; }

        [Display(Name = "Voted Date")]
        public DateTime VotedDate { get; set; } = DateTime.Now;
    }
}
