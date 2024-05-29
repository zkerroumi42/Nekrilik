using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using api.Dtos;
using api.interfaces;
using api.Model;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly IBookingRepository _bookingRepository;

        public BookingController(IBookingRepository bookingRepository)
        {
            _bookingRepository = bookingRepository;
        }

        [HttpPost]
        public async Task<ActionResult<Booking>> CreateBooking(CreateBookingDto createBookingDto)
        {
            var booking = await _bookingRepository.CreateBookingAsync(createBookingDto);
            return CreatedAtAction(nameof(GetBookingById), new { id = booking.Id }, booking);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Booking>>> GetBookings()
        {
            var bookings = await _bookingRepository.GetBookingsAsync();
            return Ok(bookings);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Booking>> GetBookingById(int id)
        {
            var booking = await _bookingRepository.GetBookingByIdAsync(id);
            if (booking == null)
            {
                return NotFound();
            }
            return Ok(booking);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Booking>> UpdateBooking(int id, CreateBookingDto updateBookingDto)
        {
            var booking = await _bookingRepository.UpdateBookingAsync(updateBookingDto, id);
            if (booking == null)
            {
                return NotFound();
            }
            return Ok(booking);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteBooking(int id)
        {
            var result = await _bookingRepository.DeleteBookingAsync(id);
            if (!result)
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}
