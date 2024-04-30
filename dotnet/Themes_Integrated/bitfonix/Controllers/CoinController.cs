using Microsoft.AspNetCore.Mvc;

namespace bitfonix.Controllers {
    public class CoinController : Controller {
        private readonly ILogger<CoinController> _logger;

        public CoinController(ILogger<CoinController> logger) {
            _logger = logger;
        }

        public IActionResult Buy_Sell() => View();
        public IActionResult Analyze() => View();
        public IActionResult wallet() => View();
        public IActionResult Exchange() => View();
    }
}
