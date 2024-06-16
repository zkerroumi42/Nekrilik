using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos
{
    public class CountStatistiquesDto
    {
        public int ReviewsCount { get; set; }
        public int PropertiesCount { get; set; }
        public int BookingsCount { get; set; }
        public int ClientsCount { get; set; }
        public int OwnersCount { get; set; }
        
    }
}