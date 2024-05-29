using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Identity;

namespace api.Model
{
    public class AppUser : IdentityUser
    {
        public List<Property> Properties { get; set; } = new List<Property>();
        public List<Booking> Bookings { get; set; } = new List<Booking>();

    }
}