using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using api.Dtos;
using api.Interfaces;
using api.Models;
using api.Repositories;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewRepository _reviewRepository;

        public ReviewController(IReviewRepository reviewRepository)
        {
            _reviewRepository = reviewRepository;
        }

        [HttpPost("create-review")]
        public async Task<IActionResult> CreateReview([FromBody] CreateReviewDto createReviewDto)
        {
            if (createReviewDto == null)
            {
                return BadRequest("Invalid review data.");
            }

            var review = await _reviewRepository.CreateReviewAsync(createReviewDto);
            return Ok(review);
        }

        [HttpGet("getAll")]
        public async Task<IActionResult> GetReviews()
        {
            var reviews = await _reviewRepository.GetReviewsAsync();
            if (reviews == null || reviews.Count == 0)
            {
                return NotFound("No reviews found.");
            }

            return Ok(reviews);
        }
    }
}
