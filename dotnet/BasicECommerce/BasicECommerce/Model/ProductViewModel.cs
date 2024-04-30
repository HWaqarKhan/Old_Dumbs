using BasicECommerce.Models;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace BasicECommerce.Model {
    public class ProductViewModel {
        public Product Product { get; set; }
        //[ValidateNever]
        public IEnumerable<Product> products { get; set; } = new List<Product>();
        [ValidateNever]
        public IEnumerable<SelectListItem> Category{ get; set; }
    }
}
