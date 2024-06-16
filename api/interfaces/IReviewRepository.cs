using System.Threading.Tasks;
using api.Dtos;
using api.Models;

namespace api.Interfaces
{
    public interface IReviewRepository
    {
        Task<Review> CreateReviewAsync(CreateReviewDto createReviewDto);
        Task<List<Review>> GetReviewsAsync();

        Task<int> GetReviewsCountAsync();
    }
}
