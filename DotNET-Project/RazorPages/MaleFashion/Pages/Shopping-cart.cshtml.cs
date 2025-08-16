using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MaleFashion.Pages;

public class ShoppingCartModel : PageModel
{
    private readonly ILogger<ShoppingCartModel> _logger;

    public ShoppingCartModel(ILogger<ShoppingCartModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {

    }
}