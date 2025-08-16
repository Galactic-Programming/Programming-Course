using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MaleFashion.Pages;

public class BlogDetailsModel : PageModel
{
    private readonly ILogger<BlogDetailsModel> _logger;

    public BlogDetailsModel(ILogger<BlogDetailsModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {

    }
}