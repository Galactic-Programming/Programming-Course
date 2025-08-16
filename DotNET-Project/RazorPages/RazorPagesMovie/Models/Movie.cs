using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RazorPagesMovie.Models;

public class Movie
{
    public int Id { get; set; }

    [Required(ErrorMessage = "Title is required")]
    [StringLength(100, MinimumLength = 1, ErrorMessage = "Title must be between 1 and 100 characters")]
    [Display(Name = "Movie Title")]
    public string Title { get; set; } = string.Empty;

    [Display(Name = "Release Date")]
    [DataType(DataType.Date)]
    [Required(ErrorMessage = "Release date is required")]
    public DateTime ReleaseDate { get; set; }

    [Required(ErrorMessage = "Genre is required")]
    [RegularExpression(@"^[A-Z]+[a-zA-Z\s]*$", ErrorMessage = "Genre must start with uppercase and contain only letters and spaces")]
    [StringLength(50, MinimumLength = 3, ErrorMessage = "Genre must be between 3 and 50 characters")]
    public string Genre { get; set; } = string.Empty;

    [Required(ErrorMessage = "Price is required")]
    [Range(0.01, 999.99, ErrorMessage = "Price must be between $0.01 and $999.99")]
    [DataType(DataType.Currency)]
    [Column(TypeName = "decimal(18, 2)")]
    [Display(Name = "Ticket Price")]
    public decimal Price { get; set; }

    [Required(ErrorMessage = "Rating is required")]
    [RegularExpression(@"^(G|PG|PG-13|R|NC-17)$", ErrorMessage = "Rating must be G, PG, PG-13, R, or NC-17")]
    [StringLength(10)]
    [Display(Name = "MPAA Rating")]
    public string Rating { get; set; } = string.Empty;

    [StringLength(1000, ErrorMessage = "Description cannot exceed 1000 characters")]
    [Display(Name = "Movie Description")]
    [DataType(DataType.MultilineText)]
    public string? Description { get; set; }

    [Required(ErrorMessage = "Director is required")]
    [StringLength(100, MinimumLength = 2, ErrorMessage = "Director name must be between 2 and 100 characters")]
    [Display(Name = "Director")]
    public string Director { get; set; } = string.Empty;

    [Range(1, 600, ErrorMessage = "Duration must be between 1 and 600 minutes")]
    [Display(Name = "Duration (minutes)")]
    public int Duration { get; set; }

    [StringLength(200, ErrorMessage = "Cast cannot exceed 200 characters")]
    [Display(Name = "Main Cast")]
    public string? Cast { get; set; }

    [StringLength(100, ErrorMessage = "Language cannot exceed 100 characters")]
    [Display(Name = "Language")]
    public string Language { get; set; } = "English";

    [StringLength(100, ErrorMessage = "Country cannot exceed 100 characters")]
    [Display(Name = "Country of Origin")]
    public string Country { get; set; } = string.Empty;

    [Range(0.0, 10.0, ErrorMessage = "IMDB Rating must be between 0.0 and 10.0")]
    [Display(Name = "IMDB Rating")]
    [Column(TypeName = "decimal(3, 1)")]
    public decimal? ImdbRating { get; set; }

    [StringLength(500, ErrorMessage = "Image URL cannot exceed 500 characters")]
    [Display(Name = "Poster Image URL")]
    [Url(ErrorMessage = "Please enter a valid URL")]
    public string? ImageUrl { get; set; }

    [Display(Name = "Date Added")]
    [DataType(DataType.DateTime)]
    public DateTime DateAdded { get; set; } = DateTime.Now;

    [Display(Name = "Last Updated")]
    [DataType(DataType.DateTime)]
    public DateTime? LastUpdated { get; set; }

    [Display(Name = "Is Available")]
    public bool IsAvailable { get; set; } = true;

    // Computed property for movie age
    [NotMapped]
    [Display(Name = "Movie Age (Years)")]
    public int MovieAge => DateTime.Now.Year - ReleaseDate.Year;

    // Computed property for display format
    [NotMapped]
    public string DisplayTitle => $"{Title} ({ReleaseDate.Year})";

    // Utility methods
    public string GetFormattedDuration()
    {
        var hours = Duration / 60;
        var minutes = Duration % 60;
        return hours > 0 ? $"{hours}h {minutes}m" : $"{minutes}m";
    }

    public string GetRatingColor()
    {
        return Rating switch
        {
            "G" => "success",
            "PG" => "info", 
            "PG-13" => "warning",
            "R" => "danger",
            "NC-17" => "dark",
            _ => "secondary"
        };
    }

    public bool IsNewRelease()
    {
        return ReleaseDate >= DateTime.Now.AddYears(-2);
    }

    // User tracking properties
    [Display(Name = "Added By")]
    public string? AddedByUserId { get; set; }
    public virtual ApplicationUser? AddedByUser { get; set; }

    [Display(Name = "Last Modified By")]
    public string? LastModifiedByUserId { get; set; }
    public virtual ApplicationUser? LastModifiedByUser { get; set; }

    // Navigation properties
    public virtual ICollection<UserMovieInteraction> UserInteractions { get; set; } = new List<UserMovieInteraction>();
    
    // Phase 3: Advanced interaction properties
    public virtual ICollection<MovieRating> MovieRatings { get; set; } = new List<MovieRating>();
    public virtual ICollection<MovieReview> MovieReviews { get; set; } = new List<MovieReview>();
    public virtual ICollection<MovieFavorite> MovieFavorites { get; set; } = new List<MovieFavorite>();
    public virtual ICollection<MovieWatchlist> MovieWatchlist { get; set; } = new List<MovieWatchlist>();

    public bool IsClassic()
    {
        return ReleaseDate <= DateTime.Now.AddYears(-25);
    }

    public string GetPriceRange()
    {
        return Price switch
        {
            <= 5.00M => "Budget",
            <= 10.00M => "Standard", 
            <= 15.00M => "Premium",
            _ => "Deluxe"
        };
    }

    // User-related helper methods
    public decimal GetAverageUserRating()
    {
        var ratings = MovieRatings.Select(r => r.Rating);
        return ratings.Any() ? (decimal)ratings.Average() : 0;
    }

    public int GetUserRatingCount()
    {
        return MovieRatings.Count;
    }

    public int GetFavoriteCount()
    {
        return MovieFavorites.Count;
    }

    public int GetReviewCount()
    {
        return MovieReviews.Count(r => r.IsApproved);
    }

    public int GetWatchlistCount()
    {
        return MovieWatchlist.Count;
    }

    // Check if user has rated this movie
    public bool HasUserRated(string userId)
    {
        return MovieRatings.Any(r => r.UserId == userId);
    }

    // Get user's rating for this movie
    public int? GetUserRating(string userId)
    {
        return MovieRatings.FirstOrDefault(r => r.UserId == userId)?.Rating;
    }

    // Check if user has reviewed this movie
    public bool HasUserReviewed(string userId)
    {
        return MovieReviews.Any(r => r.UserId == userId);
    }

    // Check if user has favorited this movie
    public bool IsUserFavorite(string userId)
    {
        return MovieFavorites.Any(f => f.UserId == userId);
    }

    // Check if movie is in user's watchlist
    public bool IsInUserWatchlist(string userId)
    {
        return MovieWatchlist.Any(w => w.UserId == userId && !w.IsWatched);
    }

    // Get aggregated rating statistics
    public (int count, decimal average, Dictionary<int, int> distribution) GetRatingStatistics()
    {
        var ratings = MovieRatings.Select(r => r.Rating).ToList();
        var count = ratings.Count;
        var average = count > 0 ? (decimal)ratings.Average() : 0;
        
        var distribution = new Dictionary<int, int>();
        for (int i = 1; i <= 10; i++)
        {
            distribution[i] = ratings.Count(r => r == i);
        }
        
        return (count, average, distribution);
    }
}