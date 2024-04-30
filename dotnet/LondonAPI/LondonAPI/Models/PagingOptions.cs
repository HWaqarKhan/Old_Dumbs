using System.ComponentModel.DataAnnotations;

namespace LondonAPI.Models {
    public class PagingOptions {
        [Range(1, 9999, ErrorMessage ="Offset must be greater than 0")]
        public int? OffSet { get; set; }
        [Range(1, 100, ErrorMessage ="Offset must be greater than 0 and less than 100")]
        public int? Limit { get; set; }
    }
}
