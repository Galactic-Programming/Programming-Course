using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MaleFashion.Pages;

public class ShopDetailsModel : PageModel
{
    private readonly ILogger<ShopDetailsModel> _logger;

    public ShopDetailsModel(ILogger<ShopDetailsModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {

    }
}