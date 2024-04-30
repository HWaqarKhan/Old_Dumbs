﻿using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BasicECommerce.Models {
    public class Product {
        public int Id { get; set; }
        [Required]
        public string? Name { get; set; }
        [Required]
        public string? Description { get; set; }
        [Required]
        public double Price { get; set; }
        //[ValidateNever]
        public string? ImageUrl { get; set; }
        [ValidateNever]
        public int? CategoryId { get; set; }
        [ValidateNever]
        [ForeignKey("CategoryId")]
        public Category? Category { get; set; }

    }
}