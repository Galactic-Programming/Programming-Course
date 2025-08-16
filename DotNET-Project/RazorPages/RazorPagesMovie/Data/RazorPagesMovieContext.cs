using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using RazorPagesMovie.Models;

namespace RazorPagesMovie.Data
{
    public class RazorPagesMovieContext : IdentityDbContext<ApplicationUser>
    {
        public RazorPagesMovieContext (DbContextOptions<RazorPagesMovieContext> options)
            : base(options)
        {
        }

        public DbSet<Movie> Movie { get; set; } = default!;
        public DbSet<UserMovieInteraction> UserMovieInteractions { get; set; } = default!;
        
        // Phase 3: Advanced interaction tables
        public DbSet<MovieRating> MovieRatings { get; set; } = default!;
        public DbSet<MovieReview> MovieReviews { get; set; } = default!;
        public DbSet<MovieFavorite> MovieFavorites { get; set; } = default!;
        public DbSet<MovieWatchlist> MovieWatchlist { get; set; } = default!;
        public DbSet<ReviewHelpfulness> ReviewHelpfulness { get; set; } = default!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure relationships
            modelBuilder.Entity<Movie>()
                .HasOne(m => m.AddedByUser)
                .WithMany(u => u.MoviesAdded)
                .HasForeignKey(m => m.AddedByUserId)
                .OnDelete(DeleteBehavior.SetNull);

            modelBuilder.Entity<Movie>()
                .HasOne(m => m.LastModifiedByUser)
                .WithMany()
                .HasForeignKey(m => m.LastModifiedByUserId)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<UserMovieInteraction>()
                .HasOne(umi => umi.User)
                .WithMany(u => u.MovieInteractions)
                .HasForeignKey(umi => umi.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<UserMovieInteraction>()
                .HasOne(umi => umi.Movie)
                .WithMany(m => m.UserInteractions)
                .HasForeignKey(umi => umi.MovieId)
                .OnDelete(DeleteBehavior.Cascade);

            // Ensure unique user-movie combinations for favorites
            modelBuilder.Entity<UserMovieInteraction>()
                .HasIndex(umi => new { umi.UserId, umi.MovieId, umi.Type })
                .IsUnique();

            // Phase 3: Configure advanced interaction relationships
            
            // MovieRating relationships
            modelBuilder.Entity<MovieRating>()
                .HasOne(mr => mr.User)
                .WithMany(u => u.MovieRatings)
                .HasForeignKey(mr => mr.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<MovieRating>()
                .HasOne(mr => mr.Movie)
                .WithMany(m => m.MovieRatings)
                .HasForeignKey(mr => mr.MovieId)
                .OnDelete(DeleteBehavior.Cascade);

            // Ensure unique user-movie rating combinations
            modelBuilder.Entity<MovieRating>()
                .HasIndex(mr => new { mr.UserId, mr.MovieId })
                .IsUnique();

            // MovieReview relationships
            modelBuilder.Entity<MovieReview>()
                .HasOne(mr => mr.User)
                .WithMany(u => u.MovieReviews)
                .HasForeignKey(mr => mr.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<MovieReview>()
                .HasOne(mr => mr.Movie)
                .WithMany(m => m.MovieReviews)
                .HasForeignKey(mr => mr.MovieId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<MovieReview>()
                .HasOne(mr => mr.Rating)
                .WithMany()
                .HasForeignKey(mr => mr.RatingId)
                .OnDelete(DeleteBehavior.NoAction);

            // Ensure unique user-movie review combinations
            modelBuilder.Entity<MovieReview>()
                .HasIndex(mr => new { mr.UserId, mr.MovieId })
                .IsUnique();

            // MovieFavorite relationships
            modelBuilder.Entity<MovieFavorite>()
                .HasOne(mf => mf.User)
                .WithMany(u => u.MovieFavorites)
                .HasForeignKey(mf => mf.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<MovieFavorite>()
                .HasOne(mf => mf.Movie)
                .WithMany(m => m.MovieFavorites)
                .HasForeignKey(mf => mf.MovieId)
                .OnDelete(DeleteBehavior.Cascade);

            // Ensure unique user-movie favorite combinations
            modelBuilder.Entity<MovieFavorite>()
                .HasIndex(mf => new { mf.UserId, mf.MovieId })
                .IsUnique();

            // MovieWatchlist relationships
            modelBuilder.Entity<MovieWatchlist>()
                .HasOne(mw => mw.User)
                .WithMany(u => u.MovieWatchlist)
                .HasForeignKey(mw => mw.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<MovieWatchlist>()
                .HasOne(mw => mw.Movie)
                .WithMany(m => m.MovieWatchlist)
                .HasForeignKey(mw => mw.MovieId)
                .OnDelete(DeleteBehavior.Cascade);

            // Ensure unique user-movie watchlist combinations
            modelBuilder.Entity<MovieWatchlist>()
                .HasIndex(mw => new { mw.UserId, mw.MovieId })
                .IsUnique();

            // ReviewHelpfulness relationships
            modelBuilder.Entity<ReviewHelpfulness>()
                .HasOne(rh => rh.User)
                .WithMany(u => u.ReviewHelpfulness)
                .HasForeignKey(rh => rh.UserId)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<ReviewHelpfulness>()
                .HasOne(rh => rh.Review)
                .WithMany()
                .HasForeignKey(rh => rh.ReviewId)
                .OnDelete(DeleteBehavior.Cascade);

            // Ensure unique user-review helpfulness combinations
            modelBuilder.Entity<ReviewHelpfulness>()
                .HasIndex(rh => new { rh.UserId, rh.ReviewId })
                .IsUnique();

            // Configure decimal precision
            modelBuilder.Entity<Movie>()
                .Property(m => m.Price)
                .HasColumnType("decimal(18,2)");
        }
    }
}
