
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace ListingCRUD.Models {
    public class Contact {
        public int? Id { get; set; }
        public string? Name { get; set; }
        [DisplayName("Photo")]
        public string? ImageUrl { get; set; }

        [EmailAddress]
        [DataType(DataType.EmailAddress)]
        [RegularExpression(@"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}", ErrorMessage = "Invalid email")]
        public string? Email { get; set; }

        public string? Designation { get; set; }

        public string? Notes { get; set; }

        [DisplayName("Phone Number")]
        public List<PhoneNumber> phoneNumbers { get; set; } = new();
    }
}
