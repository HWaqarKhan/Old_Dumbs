﻿using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace BasicECommerce.Models {
    public class Category {
        [Key]
        public int? Id { get; set; }
        [Required]
        public string? Name { get; set; }
        [DisplayName("Display Name")]
        public int? DisplayOrder { get; set; }
        public DateTime CreatedBy { get; set; } = DateTime.Now;

    }
}
