using System.ComponentModel.DataAnnotations;
using api.Enums;

namespace api.Dtos
{
    public class CreatePropertyDto
    {
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
        
        [Required]
        public int AppUserId { get; set; }
    }
}