using System.Threading.Tasks;
using api.Dtos;
using api.Models;
using api.Interfaces;
using api.Data;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories
{
    public class ReviewRepository : IReviewRepository
    {
        private readonly ApiDbContext _context;

        public ReviewRepository(ApiDbContext context)
        {
            _context = context;
        }

        public async Task<Review> CreateReviewAsync(CreateReviewDto createReviewDto)
        {
            var review = new Review
            {
                Rating = createReviewDto.Rating,
                Comment = createReviewDto.Comment,
                AppUserId = createReviewDto.AppUserId,
                PropertyId = createReviewDto.PropertyId,
                ReviewDate = DateTime.UtcNow
            };

            _context.Reviews.Add(review);
            await _context.SaveChangesAsync();

            return review;
        }
    }
}
