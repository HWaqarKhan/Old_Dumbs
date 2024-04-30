
using BasicECommerce.DataAccessLayer;
using BasicECommerce.DataAccessLayer.Infrastructure.IRepository;
using BasicECommerce.Model;
using BasicECommerce.Models;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace BasicECommerce.Controllers {
    [Area("Admin")]
    public class ProductController : Controller {
        private readonly IUnitOfWork _UOF;
        private IWebHostEnvironment _envirenment;
        public ProductController(IUnitOfWork UOF, IWebHostEnvironment envirenment) {
            _UOF = UOF;
            _envirenment = envirenment;
        }
        #region APICALL 
        public IActionResult AllProducts() {
            var products = _UOF.Product.GetAll(IncludeProperties: "Category");
            return Json(new { data = products });

        }
        #endregion
        [HttpGet]
        public IActionResult Index() {
            ProductViewModel vm = new();
            vm.products = _UOF.Product.GetAll(IncludeProperties: "Category");
            return View(vm);
            return View();
        }
        [HttpGet]
        public IActionResult AddOrEdit(int? id) {
            ProductViewModel vm = new() {
                Product = new(),
                Category = _UOF.Category.GetAll().Select(x =>
                 new SelectListItem() {
                     Text = x.Name,
                     Value = x.Id.ToString()
                 })
            };
            if ((id == null || id == 0)) {
                return View(vm);
            } else {
                vm.Product = _UOF.Product.GetT(x => x.Id == id);
                if (vm.products == null) {
                    return NotFound();
                } else { return View(vm); }
            }
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult AddOrEdit(ProductViewModel vm, IFormFile file) {
            if (ModelState.IsValid) {  // Server Side Validation
                //Upload Image in root folder
                string fileName = String.Empty;
                if (file != null) {
                    string UploadDir = Path.Combine(_envirenment.WebRootPath, "ProductImages");
                    fileName = Guid.NewGuid().ToString() + "-" + file.FileName;
                    string path = Path.Combine(UploadDir, fileName);
                    if (vm.Product.ImageUrl != null) {
                        var OldImage = Path.Combine(_envirenment.WebRootPath, vm.Product.ImageUrl.TrimStart('\\'));
                        if (System.IO.File.Exists(OldImage)) {
                            System.IO.File.Delete(OldImage);
                        }
                    }
                    using (var fileStream = new FileStream(path, FileMode.Create)) {
                        file.CopyTo(fileStream);
                    }
                    vm.Product.ImageUrl = @"\ProductImages\" + fileName;
                }
                if (vm.Product.Id == 0) {
                    _UOF.Product.Add(vm.Product);
                    TempData["success"] = "Category Created Successfully";
                } else {
                    _UOF.Product.Update(vm.Product);
                    TempData["success"] = "Category Updated Successfully";
                }
                _UOF.Save();
                return RedirectToAction("Index");
            }
            return RedirectToAction("Index");
        }
        [HttpGet]
        public IActionResult Delete(int id) {
            var product = _UOF.Product.GetT(x => x.Id == id);
            if ((id == null || id == 0) && product == null) {
                return NotFound();
            }
            return View(product);
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Delete(int? id) {
            var product = _UOF.Product.GetT(x => x.Id == id);
            if (product == null) {
                //return Json(new { sucess = false, message = "Something went wrong" });
                return NotFound();
            } else {
                if (product.ImageUrl != null) {
                    var OldImage = Path.Combine(_envirenment.WebRootPath, product.ImageUrl.TrimStart('\\'));
                    if (System.IO.File.Exists(OldImage)) {
                        System.IO.File.Delete(OldImage);
                    }
                }
                _UOF.Product.Delete(product);
                _UOF.Save();
                TempData["success"] = "Category Deleted Successfully";
                return RedirectToAction("Index");
            }
        }
    }
}
