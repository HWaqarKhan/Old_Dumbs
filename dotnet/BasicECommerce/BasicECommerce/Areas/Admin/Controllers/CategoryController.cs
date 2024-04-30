
using BasicECommerce.DataAccessLayer;
using BasicECommerce.DataAccessLayer.Infrastructure.IRepository;
using BasicECommerce.Model;
using BasicECommerce.Models;
using Microsoft.AspNetCore.Mvc;

namespace BasicECommerce.Controllers {
    [Area("Admin")]
    public class CategoryController : Controller {
        private readonly IUnitOfWork _UOF;
        public CategoryController(IUnitOfWork UOF) {
            _UOF = UOF;
        }
        public IActionResult Index() {
            CategoryViewModel vm = new();
            vm.categories = _UOF.Category.GetAll();
            return View(vm);
        }
        //[HttpGet]
        //public IActionResult Create() {
        //    return View();
        //}
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public IActionResult Create(Category category) {
        //    if (ModelState.IsValid) {  // Server Side Validation
        //        _UOF.Category.Add(category);
        //        _UOF.Save();
        //        TempData["success"] = "Category Created Successfully";
        //        return RedirectToAction("Index");
        //    }
        //    return View(category);
        //}
        [HttpGet]
        public IActionResult AddOrEdit(int? id) {
            CategoryViewModel vm = new();
            if ((id == null || id == 0)) {
                return View(vm);
            } else {
                vm.Category = _UOF.Category.GetT(x => x.Id == id);
                if (vm.Category == null) {
                    return NotFound();
                } else { return View(vm); }
            }
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult AddOrEdit(CategoryViewModel vm) {
            if (ModelState.IsValid) {  // Server Side Validation
                if (vm.Category.Id == 0) {
                    _UOF.Category.Add(vm.Category);
                    TempData["success"] = "Category Created Successfully";
                } else {
                    _UOF.Category.Update(vm.Category);
                    TempData["success"] = "Category Updated Successfully";
                }
                _UOF.Save();
                return RedirectToAction("Index");
            }
            return RedirectToAction("Index");
        }
        [HttpGet]
        public IActionResult Delete(int? id) {
            var category = _UOF.Category.GetT(x => x.Id == id);
            if ((id == null || id == 0) && category == null) {
                return NotFound();
            }
            return View(category);
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Delete(int id) {
            var category = _UOF.Category.GetT(x => x.Id == id);
            if (category == null) {
                return NotFound();
            }
            _UOF.Category.Delete(category);
            _UOF.Save();
            TempData["success"] = "Category Deleted Successfully";
            return RedirectToAction("Index");
        }
    }
}
