using bitfonix.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace bitfonix.Controllers {
    public class HomeController : Controller {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger) {
            _logger = logger;
        }

        public IActionResult Index() => View();

        public IActionResult AboutUs() => View();
        public IActionResult OurTeam() => View();
        public IActionResult Gallery() => View();
        public IActionResult Pricing() => View();
        public IActionResult FAQ() => View();
        public IActionResult News() => View();
        public IActionResult ConatctUs() => View();

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult NotFound() {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}