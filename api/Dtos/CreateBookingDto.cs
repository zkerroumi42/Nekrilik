using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using api.Enums;

namespace api.Dtos
{
    public class CreateBookingDto
    {

        public DateTime StartDate { get; set; }

 
        public DateTime EndDate { get; set; }


        public int TotalPrice { get; set; }


        public BookingStatus BookingStatus { get; set; }

        public int AppUserId { get; set; }

        public int PropertyId { get; set; }

        public DateTime DateBooked { get; set; }

        
    }
}