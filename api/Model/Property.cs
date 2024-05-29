using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using api.Enums;
using api.Models;

namespace api.Model
{
    public class Property
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        public string Title { get; set; } = "";
        
        [Required]
        public string Description { get; set; } = "";
        
        [Required]
        public string Address { get; set; } = "";
        
        [Required]
        public string Photo { get; set; } = "";
        
        [Required]
        public string State { get; set; } = "";
        
        [Required]
        public string ZipCode { get; set; } = "";
        
        [Required]
        public PropertyType PropertyType { get; set; }
        
        [Required]
        public RentalType RentalType { get; set; }
        
        [Required]
        public int Price { get; set; }
        
        [Required]
        public PropertyStatus PropertyStatus { get; set; }
        
        [Required]
        public int MaxGuests { get; set; }
        
        public DateTime DateListed { get; set; } = DateTime.UtcNow;
        
        [Required]
        public int AppUserId { get; set; }
        
        public AppUser? Owner { get; set; }
        
        public List<Review> Reviews { get; set; } = new List<Review>();        
    }
}
