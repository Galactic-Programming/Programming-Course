using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using RazorPagesMovie.Data;

namespace RazorPagesMovie.Models
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using var scope = serviceProvider.CreateScope();
            var services = scope.ServiceProvider;
            
            using var context = services.GetRequiredService<RazorPagesMovieContext>();
            var userManager = services.GetRequiredService<UserManager<ApplicationUser>>();
            var roleManager = services.GetRequiredService<RoleManager<IdentityRole>>();

            // Ensure database is created
            context.Database.EnsureCreated();

            // Create roles and users synchronously
            CreateRolesAndAdminUser(roleManager, userManager).Wait();
            
            // Seed movies if not exist
            SeedMovies(context).Wait();
        }

        private static async Task CreateRolesAndAdminUser(RoleManager<IdentityRole> roleManager, UserManager<ApplicationUser> userManager)
        {
            // Create roles
            string[] roleNames = { "Admin", "User" };
            
            foreach (var roleName in roleNames)
            {
                if (!await roleManager.RoleExistsAsync(roleName))
                {
                    await roleManager.CreateAsync(new IdentityRole(roleName));
                }
            }

            // Create admin user
            var adminEmail = "admin@movie.com";
            var adminUser = await userManager.FindByEmailAsync(adminEmail);

            if (adminUser == null)
            {
                adminUser = new ApplicationUser
                {
                    UserName = adminEmail,
                    Email = adminEmail,
                    FirstName = "Admin",
                    LastName = "User",
                    DateJoined = DateTime.Now,
                    EmailConfirmed = true
                };

                var result = await userManager.CreateAsync(adminUser, "Admin123!");
                
                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(adminUser, "Admin");
                }
            }
        }

        private static async Task SeedMovies(RazorPagesMovieContext context)
        {
            if (context.Movie == null)
            {
                throw new ArgumentNullException("Null RazorPagesMovieContext");
            }

            // Look for any movies.
            if (context.Movie.Any())
            {
                return;   // DB has been seeded
            }

            context.Movie.AddRange(
                new Movie
                {
                    Title = "When Harry Met Sally",
                    ReleaseDate = DateTime.Parse("1989-2-12"),
                    Genre = "Romantic Comedy",
                    Price = 7.99M,
                    Rating = "R",
                    Director = "Rob Reiner",
                    Duration = 96,
                    Description = "A romantic comedy about two friends who struggle with the question of whether men and women can be just friends.",
                    Cast = "Billy Crystal, Meg Ryan, Carrie Fisher",
                    Language = "English",
                    Country = "United States",
                    ImdbRating = 7.7M,
                    ImageUrl = null,
                    DateAdded = DateTime.Now.AddDays(-30),
                    IsAvailable = true
                },

                new Movie
                {
                    Title = "Ghostbusters",
                    ReleaseDate = DateTime.Parse("1984-3-13"),
                    Genre = "Comedy",
                    Price = 8.99M,
                    Rating = "PG",
                    Director = "Ivan Reitman",
                    Duration = 105,
                    Description = "Three unemployed parapsychology professors set up shop as a unique ghost removal service in New York City.",
                    Cast = "Bill Murray, Dan Aykroyd, Sigourney Weaver, Harold Ramis",
                    Language = "English",
                    Country = "United States",
                    ImdbRating = 7.8M,
                    ImageUrl = null,
                    DateAdded = DateTime.Now.AddDays(-25),
                    IsAvailable = true
                },

                new Movie
                {
                    Title = "The Godfather",
                    ReleaseDate = DateTime.Parse("1972-3-24"),
                    Genre = "Crime",
                    Price = 11.99M,
                    Rating = "R",
                    Director = "Francis Ford Coppola",
                    Duration = 175,
                    Description = "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael.",
                    Cast = "Marlon Brando, Al Pacino, James Caan, Diane Keaton",
                    Language = "English",
                    Country = "United States",
                    ImdbRating = 9.2M,
                    ImageUrl = null,
                    DateAdded = DateTime.Now.AddDays(-5),
                    IsAvailable = true
                }
            );
            
            await context.SaveChangesAsync();
        }
    }
}
