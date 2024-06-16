using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos;
using api.interfaces;
using api.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StatistiquesController : ControllerBase
    {
    private readonly IReviewRepository _reviewRepository;
    private readonly IPropertyRepository _propertyRepository;
    private readonly IBookingRepository _bookingRepository;

    public StatistiquesController(
        IReviewRepository reviewRepository,
        IPropertyRepository propertyRepository,
        IBookingRepository bookingRepository
        )
    {
        _reviewRepository = reviewRepository;
        _propertyRepository = propertyRepository;
        _bookingRepository = bookingRepository;
    }

    [HttpGet("getAllStatistiques")]
    public async Task<IActionResult> GetSummaryCounts()
    {
        var reviewsCount = await _reviewRepository.GetReviewsCountAsync();
        var propertiesCount = await _propertyRepository.GetPropertiesCountAsync();
        var bookingsCount = await _bookingRepository.GetBookingsCountAsync();

        var summaryCounts = new CountStatistiquesDto
        {
            ReviewsCount = reviewsCount,
            PropertiesCount = propertiesCount,
            BookingsCount = bookingsCount,
        };

        return Ok(summaryCounts);
    }
    }
}