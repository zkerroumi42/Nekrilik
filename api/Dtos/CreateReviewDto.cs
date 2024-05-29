namespace api.Dtos
{
    public class CreateReviewDto
    {
        public int Rating { get; set; }
        public  string Comment { get; set; }
        public int AppUserId { get; set; }
        public int PropertyId { get; set; }
    }
}
