using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using api.Dtos;
using api.interfaces;
using api.Model;
using api.Data;

namespace api.Repositories
{
    public class BookingRepository : IBookingRepository
    {
        private readonly ApiDbContext _context;

        public BookingRepository(ApiDbContext context)
        {
            _context = context;
        }

        public async Task<Booking> CreateBookingAsync(CreateBookingDto createBookingDto)
        {
            var booking = new Booking
            {
                StartDate = createBookingDto.StartDate,
                EndDate = createBookingDto.EndDate,
                TotalPrice = createBookingDto.TotalPrice,
                BookingStatus = createBookingDto.BookingStatus,
                DateBooked = createBookingDto.DateBooked,
                AppUserId = createBookingDto.AppUserId,
                PropertyId = createBookingDto.PropertyId
            };

            _context.Bookings.Add(booking);
            await _context.SaveChangesAsync();
            return booking;
        }

        public async Task<List<Booking>> GetPropertiesAsync()
        {
            return await _context.Bookings.Include(b => b.Client).Include(b => b.Property).ToListAsync();
        }

        public async Task<Booking> GetBookingByIdAsync(int id)
        {
            return await _context.Bookings.Include(b => b.Client).Include(b => b.Property).FirstOrDefaultAsync(b => b.Id == id);
        }

        public async Task<Booking> UpdateBookingAsync(CreateBookingDto updateBookingDto, int id)
        {
            var booking = await _context.Bookings.FindAsync(id);
            if (booking == null)
            {
                return null;
            }

            booking.StartDate = updateBookingDto.StartDate;
            booking.EndDate = updateBookingDto.EndDate;
            booking.TotalPrice = updateBookingDto.TotalPrice;
            booking.BookingStatus = updateBookingDto.BookingStatus;
            booking.DateBooked = updateBookingDto.DateBooked;
            booking.AppUserId = updateBookingDto.AppUserId;
            booking.PropertyId = updateBookingDto.PropertyId;

            await _context.SaveChangesAsync();
            return booking;
        }

        public async Task<bool> DeleteBookingAsync(int id)
        {
            var booking = await _context.Bookings.FindAsync(id);
            if (booking == null)
            {
                return false;
            }

            _context.Bookings.Remove(booking);
            await _context.SaveChangesAsync();
            return true;
        }

        public Task<List<Booking>> GetBookingsAsync()
        {
            throw new NotImplementedException();
        }
    }
}
