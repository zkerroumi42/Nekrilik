using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos;
using api.Model;

namespace api.interfaces
{
    public interface IBookingRepository
    {
        Task<Booking> CreateBookingAsync(CreateBookingDto createBookingDto);
        Task<List<Booking>> GetBookingsAsync();
        Task<Booking> GetBookingByIdAsync(int id);
        Task<Booking> UpdateBookingAsync(CreateBookingDto updateBookingDto, int id);
        Task<bool> DeleteBookingAsync(int id);

        Task<int> GetBookingsCountAsync();
        
    }
}