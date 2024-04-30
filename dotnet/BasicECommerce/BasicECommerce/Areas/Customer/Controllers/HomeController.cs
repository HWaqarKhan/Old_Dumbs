using BasicECommerce.DataAccessLayer.Infrastructure.IRepository;
using BasicECommerce.Model;
using BasicECommerce.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace BasicECommerce.Controllers {
    [Area("Customer")]
    public class HomeController : Controller {
        private readonly ILogger<HomeController> _logger;
        private readonly IUnitOfWork _uow;


        public HomeController(ILogger<HomeController> logger, IUnitOfWork uow) {
            _logger = logger;
            _uow = uow;
        }
        [HttpGet]
        public IActionResult Index() {
            ProductViewModel vm = new();
            vm.products = _uow.Product.GetAll(IncludeProperties: "Category");
            return View(vm);
            //IEnumerable<Product> products= _uow.Product.GetAll(IncludeProperties: "Category");
            //return View(products);
        }

        public IActionResult Privacy() {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error() {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}