using BasicECommerce.Models;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace BasicECommerce.Model {
    public class CategoryViewModel {
        //[Key]
        //public int Id { get; set; }
        //[Required]
        //public string Name { get; set; }
        //[DisplayName("Display Name")]
        //public int DisplayOrder { get; set; }
        //public DateTime CreatedBy { get; set; } = DateTime.Now;
        public Category? Category { get; set; } = new();
        public IEnumerable<Category> categories { get; set; } = new List<Category>();

    }
}
