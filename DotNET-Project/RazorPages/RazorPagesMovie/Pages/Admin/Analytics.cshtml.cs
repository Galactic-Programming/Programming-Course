using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using RazorPagesMovie.Data;
using RazorPagesMovie.Models;
using System.Globalization;

namespace RazorPagesMovie.Pages.Admin
{
    [Authorize(Roles = "Admin")]
    public class AnalyticsModel : PageModel
    {
        private readonly RazorPagesMovieContext _context;

        public AnalyticsModel(RazorPagesMovieContext context)
        {
            _context = context;
        }

        // Overview Statistics
        public int TotalMovies { get; set; }
        public int TotalUsers { get; set; }
        public int TotalRatings { get; set; }
        public int TotalReviews { get; set; }
        public int TotalFavorites { get; set; }
        public int ActiveUsers { get; set; } // Users with activity in last 30 days

        // Top Movies
        public List<TopMovieDto> TopRatedMovies { get; set; } = new();
        public List<TopMovieDto> MostReviewedMovies { get; set; } = new();
        public List<TopMovieDto> MostFavoritedMovies { get; set; } = new();

        // Time-based Data for Charts
        public List<ChartDataPoint> RatingsOverTime { get; set; } = new();
        public List<ChartDataPoint> ReviewsOverTime { get; set; } = new();
        public List<ChartDataPoint> UsersOverTime { get; set; } = new();

        // Genre Statistics
        public List<GenreStatsDto> GenreStats { get; set; } = new();

        // Rating Distribution
        public Dictionary<int, int> RatingDistribution { get; set; } = new();

        public async Task<IActionResult> OnGetAsync()
        {
            await LoadOverviewStatistics();
            await LoadTopMovies();
            await LoadTimeBasedData();
            await LoadGenreStatistics();
            await LoadRatingDistribution();

            return Page();
        }

        private async Task LoadOverviewStatistics()
        {
            TotalMovies = await _context.Movie.CountAsync();
            TotalUsers = await _context.Users.CountAsync();
            TotalRatings = await _context.MovieRatings.CountAsync();
            TotalReviews = await _context.MovieReviews.CountAsync();
            TotalFavorites = await _context.MovieFavorites.CountAsync();

            // Active users in last 30 days
            var thirtyDaysAgo = DateTime.Now.AddDays(-30);
            ActiveUsers = await _context.MovieRatings
                .Where(r => r.RatedDate >= thirtyDaysAgo)
                .Select(r => r.UserId)
                .Union(_context.MovieReviews
                    .Where(r => r.ReviewDate >= thirtyDaysAgo)
                    .Select(r => r.UserId))
                .Union(_context.MovieFavorites
                    .Where(f => f.AddedDate >= thirtyDaysAgo)
                    .Select(f => f.UserId))
                .Distinct()
                .CountAsync();
        }

        private async Task LoadTopMovies()
        {
            // Top Rated Movies (minimum 3 ratings)
            TopRatedMovies = await _context.Movie
                .Include(m => m.MovieRatings)
                .Where(m => m.MovieRatings.Count >= 3)
                .Select(m => new TopMovieDto
                {
                    Id = m.Id,
                    Title = m.Title,
                    AverageRating = m.MovieRatings.Average(r => r.Rating),
                    Count = m.MovieRatings.Count,
                    ImageUrl = m.ImageUrl
                })
                .OrderByDescending(m => m.AverageRating)
                .Take(10)
                .ToListAsync();

            // Most Reviewed Movies
            MostReviewedMovies = await _context.Movie
                .Include(m => m.MovieReviews)
                .Where(m => m.MovieReviews.Count > 0)
                .Select(m => new TopMovieDto
                {
                    Id = m.Id,
                    Title = m.Title,
                    Count = m.MovieReviews.Count,
                    ImageUrl = m.ImageUrl,
                    AverageRating = m.MovieRatings.Any() ? m.MovieRatings.Average(r => r.Rating) : 0
                })
                .OrderByDescending(m => m.Count)
                .Take(10)
                .ToListAsync();

            // Most Favorited Movies
            MostFavoritedMovies = await _context.Movie
                .Include(m => m.MovieFavorites)
                .Where(m => m.MovieFavorites.Count > 0)
                .Select(m => new TopMovieDto
                {
                    Id = m.Id,
                    Title = m.Title,
                    Count = m.MovieFavorites.Count,
                    ImageUrl = m.ImageUrl,
                    AverageRating = m.MovieRatings.Any() ? m.MovieRatings.Average(r => r.Rating) : 0
                })
                .OrderByDescending(m => m.Count)
                .Take(10)
                .ToListAsync();
        }

        private async Task LoadTimeBasedData()
        {
            var sixMonthsAgo = DateTime.Now.AddMonths(-6);

            // Ratings over time (monthly)
            RatingsOverTime = await _context.MovieRatings
                .Where(r => r.RatedDate >= sixMonthsAgo)
                .GroupBy(r => new { r.RatedDate.Year, r.RatedDate.Month })
                .Select(g => new ChartDataPoint
                {
                    Label = $"{CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(g.Key.Month)} {g.Key.Year}",
                    Value = g.Count(),
                    Date = new DateTime(g.Key.Year, g.Key.Month, 1)
                })
                .OrderBy(c => c.Date)
                .ToListAsync();

            // Reviews over time (monthly)
            ReviewsOverTime = await _context.MovieReviews
                .Where(r => r.ReviewDate >= sixMonthsAgo)
                .GroupBy(r => new { r.ReviewDate.Year, r.ReviewDate.Month })
                .Select(g => new ChartDataPoint
                {
                    Label = $"{CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(g.Key.Month)} {g.Key.Year}",
                    Value = g.Count(),
                    Date = new DateTime(g.Key.Year, g.Key.Month, 1)
                })
                .OrderBy(c => c.Date)
                .ToListAsync();

            // New users over time (monthly)
            UsersOverTime = await _context.Users
                .Where(u => u.DateJoined >= sixMonthsAgo)
                .GroupBy(u => new { u.DateJoined.Year, u.DateJoined.Month })
                .Select(g => new ChartDataPoint
                {
                    Label = $"{CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(g.Key.Month)} {g.Key.Year}",
                    Value = g.Count(),
                    Date = new DateTime(g.Key.Year, g.Key.Month, 1)
                })
                .OrderBy(c => c.Date)
                .ToListAsync();
        }

        private async Task LoadGenreStatistics()
        {
            GenreStats = await _context.Movie
                .Include(m => m.MovieRatings)
                .Include(m => m.MovieReviews)
                .Include(m => m.MovieFavorites)
                .GroupBy(m => m.Genre)
                .Select(g => new GenreStatsDto
                {
                    Genre = g.Key,
                    MovieCount = g.Count(),
                    TotalRatings = g.Sum(m => m.MovieRatings.Count),
                    AverageRating = g.SelectMany(m => m.MovieRatings).Any() 
                        ? g.SelectMany(m => m.MovieRatings).Average(r => r.Rating) 
                        : 0,
                    TotalReviews = g.Sum(m => m.MovieReviews.Count),
                    TotalFavorites = g.Sum(m => m.MovieFavorites.Count)
                })
                .OrderByDescending(g => g.MovieCount)
                .ToListAsync();
        }

        private async Task LoadRatingDistribution()
        {
            RatingDistribution = await _context.MovieRatings
                .GroupBy(r => r.Rating)
                .ToDictionaryAsync(g => g.Key, g => g.Count());
        }
    }

    // DTOs for data transfer
    public class TopMovieDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public double AverageRating { get; set; }
        public int Count { get; set; }
        public string? ImageUrl { get; set; }
    }

    public class ChartDataPoint
    {
        public string Label { get; set; } = string.Empty;
        public int Value { get; set; }
        public DateTime Date { get; set; }
    }

    public class GenreStatsDto
    {
        public string Genre { get; set; } = string.Empty;
        public int MovieCount { get; set; }
        public int TotalRatings { get; set; }
        public double AverageRating { get; set; }
        public int TotalReviews { get; set; }
        public int TotalFavorites { get; set; }
    }
}
