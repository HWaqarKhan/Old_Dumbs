using Microsoft.AspNetCore.Mvc;
using bitfonix.Models;
using System.Diagnostics;


namespace bitfonix.Controllers {
    public class ServicesController : Controller {
        private readonly ILogger<ServicesController> _logger;

        public ServicesController(ILogger<ServicesController> logger) {
            _logger = logger;
        }

        public IActionResult Services() => View();
        public IActionResult BitCoinTrading() => View();
    }
}
