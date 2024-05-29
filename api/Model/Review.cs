using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using api.Model;

namespace api.Models
{
    public class Review
    {
        [Key]
        public int Id { get; set; }
        public int Rating { get; set; }
        public string Comment { get; set; }="";
        public DateTime ReviewDate { get; set; }
        public int AppUserId { get; set; }
        public  AppUser? Client { get; set; }
        public int PropertyId { get; set; }
        public  Property? Property { get; set; }
        
    }
}