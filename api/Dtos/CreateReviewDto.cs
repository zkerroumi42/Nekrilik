using System.ComponentModel.DataAnnotations;

namespace api.Dtos
{
    public class CreateReviewDto
    {
        [Range(0, 5)]
        public int Rating { get; set; }
        public  string? Comment { get; set; }
        public int AppUserId { get; set; }
        public int PropertyId { get; set; }
    }
}
