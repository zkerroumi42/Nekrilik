using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos;
using api.Enums;
using api.interfaces;
using api.Interfaces;
using api.Model;
using api.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly IReviewRepository _reviewRepository;
    private readonly IPropertyRepository _propertyRepository;
    private readonly IBookingRepository _bookingRepository;

    public HomeController(
        IReviewRepository reviewRepository,
        IPropertyRepository propertyRepository,
        IBookingRepository bookingRepository
        )
    {
        _reviewRepository = reviewRepository;
        _propertyRepository = propertyRepository;
        _bookingRepository = bookingRepository;
    }

    [HttpPost("Reservation")]
public async Task<IActionResult> CreateBooking([FromBody] CreateBookingDto bookingDto)
{
    if (!ModelState.IsValid)
    {
        return BadRequest(ModelState);
    }

    try
    {
        var createdBookingId = await _bookingRepository.CreateBookingAsync(bookingDto);

        return Ok(new { BookingId = createdBookingId });
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"Internal server error: {ex.Message}");
    }
}
 [HttpGet("searchByType")]
    public async Task<IActionResult> SearchByType(PropertyType propertyType)
    {
        try
        {
            var properties = await _propertyRepository.SearchByTypeAsync(propertyType);

            if (properties == null || properties.Count == 0)
            {
                return NotFound("No properties found.");
            }

            return Ok(properties);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    } 

        [HttpGet("searchByRentalType")]
        public async Task<IActionResult> SearchByRentalType(RentalType rentalType)
        {
            try
            {
                var properties = await _propertyRepository.SearchByRentalTypeAsync(rentalType);

                if (properties == null || properties.Count == 0)
                {
                    return NotFound("No properties found.");
                }

                return Ok(properties);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("searchByPropertyStatus")]
        public async Task<IActionResult> SearchByPropertyStatus(PropertyStatus status)
        {
            try
            {
                var properties = await _propertyRepository.SearchByPropertyStatuseAsync(status);

                if (properties == null || properties.Count == 0)
                {
                    return NotFound("No properties found.");
                }

                return Ok(properties);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("GetAllproperties")]
        public async Task<IActionResult> GetProperties()
        {
            List<Property> properties = await _propertyRepository.GetPropertiesAsync();
            if (properties == null)
                return NotFound("No Properties found.");
            return Ok(properties);
        }

    }









    }
