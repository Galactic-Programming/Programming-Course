# 🔐 PHASE 1 IMPLEMENTATION: SECURITY & USER MANAGEMENT

## 📦 **1. Package Installation**

```bash
# Core Identity packages
dotnet add package Microsoft.AspNetCore.Identity.EntityFrameworkCore --version 9.0.0
dotnet add package Microsoft.AspNetCore.Identity.UI --version 9.0.0

# OAuth providers
dotnet add package Microsoft.AspNetCore.Authentication.Google --version 9.0.0
dotnet add package Microsoft.AspNetCore.Authentication.Facebook --version 9.0.0

# Additional utilities
dotnet add package Microsoft.AspNetCore.Authorization --version 9.0.0
```

### 🗄️ **2. Database Schema Updates**

#### **2.1 New Models to Create:**

**Models/ApplicationUser.cs:**

```csharp
public class ApplicationUser : IdentityUser
{
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public DateTime DateJoined { get; set; } = DateTime.Now;
    public string? ProfileImageUrl { get; set; }
    public bool IsActive { get; set; } = true;

    // Navigation properties
    public ICollection<UserMovie> UserMovies { get; set; } = new List<UserMovie>();
    public ICollection<MovieReview> MovieReviews { get; set; } = new List<MovieReview>();
}
```

**Models/UserMovie.cs:**

```csharp
public class UserMovie
{
    public int Id { get; set; }
    public string UserId { get; set; } = string.Empty;
    public int MovieId { get; set; }
    public UserMovieType Type { get; set; } // Favorite, Watchlist, Watched
    public DateTime DateAdded { get; set; } = DateTime.Now;

    // Navigation properties
    public ApplicationUser User { get; set; } = null!;
    public Movie Movie { get; set; } = null!;
}

public enum UserMovieType
{
    Favorite = 1,
    Watchlist = 2,
    Watched = 3
}
```

**Models/MovieReview.cs:**

```csharp
public class MovieReview
{
    public int Id { get; set; }
    public string UserId { get; set; } = string.Empty;
    public int MovieId { get; set; }
    public int Rating { get; set; } // 1-10
    public string? ReviewText { get; set; }
    public DateTime DateCreated { get; set; } = DateTime.Now;
    public DateTime? DateUpdated { get; set; }
    public bool IsApproved { get; set; } = true;

    // Navigation properties
    public ApplicationUser User { get; set; } = null!;
    public Movie Movie { get; set; } = null!;
}
```

#### **2.2 Update Movie Model:**

```csharp
// Add to Movie.cs
public ICollection<UserMovie> UserMovies { get; set; } = new List<UserMovie>();
public ICollection<MovieReview> MovieReviews { get; set; } = new List<MovieReview>();

// Computed properties
[NotMapped]
public double AverageRating => MovieReviews.Any() ? MovieReviews.Average(r => r.Rating) : 0;

[NotMapped]
public int ReviewCount => MovieReviews.Count;
```

### 🔧 **3. Configuration Updates**

**Program.cs Updates:**

```csharp
// Add Identity services
builder.Services.AddDefaultIdentity<ApplicationUser>(options =>
{
    // Password settings
    options.Password.RequireDigit = true;
    options.Password.RequiredLength = 6;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = true;
    options.Password.RequireLowercase = false;

    // Lockout settings
    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
    options.Lockout.MaxFailedAccessAttempts = 5;

    // User settings
    options.User.RequireUniqueEmail = true;
})
.AddRoles<IdentityRole>()
.AddEntityFrameworkStores<RazorPagesMovieContext>();

// Add OAuth authentication
builder.Services.AddAuthentication()
    .AddGoogle(options =>
    {
        options.ClientId = builder.Configuration["Authentication:Google:ClientId"];
        options.ClientSecret = builder.Configuration["Authentication:Google:ClientSecret"];
    })
    .AddFacebook(options =>
    {
        options.AppId = builder.Configuration["Authentication:Facebook:AppId"];
        options.AppSecret = builder.Configuration["Authentication:Facebook:AppSecret"];
    });

// Add authorization policies
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("AdminOnly", policy => policy.RequireRole("Admin"));
    options.AddPolicy("ModeratorOrAdmin", policy =>
        policy.RequireRole("Admin", "Moderator"));
});
```

### 📄 **4. New Pages to Create**

#### **4.1 Account Management Pages:**

- `Pages/Account/Register.cshtml` - User registration
- `Pages/Account/Login.cshtml` - User login
- `Pages/Account/Profile.cshtml` - User profile management
- `Pages/Account/MyMovies.cshtml` - User's favorite/watchlist movies

#### **4.2 Admin Pages:**

- `Pages/Admin/Dashboard.cshtml` - Admin dashboard
- `Pages/Admin/Users.cshtml` - User management
- `Pages/Admin/Reviews.cshtml` - Review moderation

### 🔐 **5. Authorization Implementation**

**Update Movie Pages with Authorization:**

**Movies/Create.cshtml.cs:**

```csharp
[Authorize(Roles = "Admin,Moderator")]
public class CreateModel : PageModel
{
    // existing code...
}
```

**Movies/Edit.cshtml.cs:**

```csharp
[Authorize(Roles = "Admin,Moderator")]
public class EditModel : PageModel
{
    // existing code...
}
```

**Movies/Delete.cshtml.cs:**

```csharp
[Authorize(Roles = "Admin")]
public class DeleteModel : PageModel
{
    // existing code...
}
```

### 🎨 **6. UI Updates**

#### **6.1 Navigation Bar Updates:**

Add login/logout buttons, user profile dropdown, admin menu for authorized users.

#### **6.2 Movie Pages Enhancements:**

- Add "Add to Favorites" button
- Add "Add to Watchlist" button
- Display user ratings and reviews
- Show if user has watched/rated the movie

### 📊 **7. Services to Create**

**Services/IUserMovieService.cs:**

```csharp
public interface IUserMovieService
{
    Task AddToFavoritesAsync(string userId, int movieId);
    Task AddToWatchlistAsync(string userId, int movieId);
    Task MarkAsWatchedAsync(string userId, int movieId);
    Task<List<Movie>> GetUserFavoritesAsync(string userId);
    Task<List<Movie>> GetUserWatchlistAsync(string userId);
    Task<bool> IsInUserFavoritesAsync(string userId, int movieId);
}
```

**Services/IReviewService.cs:**

```csharp
public interface IReviewService
{
    Task<MovieReview> AddReviewAsync(string userId, int movieId, int rating, string? reviewText);
    Task<List<MovieReview>> GetMovieReviewsAsync(int movieId);
    Task<MovieReview?> GetUserReviewAsync(string userId, int movieId);
    Task UpdateReviewAsync(int reviewId, int rating, string? reviewText);
    Task DeleteReviewAsync(int reviewId);
}
```

### 🔄 **8. Migration Commands**

```bash
# Create Identity migration
dotnet ef migrations add "AddIdentityTables" -o Migrations

# Create UserMovie and Review tables
dotnet ef migrations add "AddUserMovieAndReviewTables" -o Migrations

# Update database
dotnet ef database update
```

### 🧪 **9. Seed Data for Roles**

**Data/SeedData.cs Updates:**

```csharp
public static async Task SeedRolesAndAdminAsync(IServiceProvider serviceProvider)
{
    var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
    var userManager = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();

    // Create roles
    string[] roles = { "Admin", "Moderator", "User" };
    foreach (var role in roles)
    {
        if (!await roleManager.RoleExistsAsync(role))
        {
            await roleManager.CreateAsync(new IdentityRole(role));
        }
    }

    // Create admin user
    var adminEmail = "admin@movieapp.com";
    var adminUser = await userManager.FindByEmailAsync(adminEmail);
    if (adminUser == null)
    {
        adminUser = new ApplicationUser
        {
            UserName = adminEmail,
            Email = adminEmail,
            FirstName = "Admin",
            LastName = "User",
            EmailConfirmed = true
        };
        await userManager.CreateAsync(adminUser, "Admin@123");
        await userManager.AddToRoleAsync(adminUser, "Admin");
    }
}
```

### ✅ **10. Testing Checklist**

- [ ] User registration works correctly
- [ ] User login/logout functionality
- [ ] Role-based access control
- [ ] OAuth login (Google/Facebook)
- [ ] User profile management
- [ ] Movie favorites/watchlist functionality
- [ ] Review system works
- [ ] Admin dashboard access control
- [ ] Security policies enforcement

---

**Estimated Time: 10-12 hours**
**Dependencies: Entity Framework, Identity packages**
**Next Phase: Performance optimization and advanced features**
