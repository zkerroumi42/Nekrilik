using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using api.Enums;

namespace api.Model
{
    public class Booking
    {
        [Key]
        public int Id { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int TotalPrice { get; set; }
        public BookingStatus BookingStatus { get; set; }
        public DateTime DateBooked { get; set; }
        public int AppUserId { get; set; }
        public  AppUser? Client { get; set; }
        public int PropertyId { get; set; }
        public  Property? Property { get; set; }


    }
}