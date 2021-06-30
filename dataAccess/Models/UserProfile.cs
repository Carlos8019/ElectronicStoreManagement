using System.ComponentModel.DataAnnotations;
namespace dataAccess.Models
{
    public class UserProfile
    {
        [Key]
        public int idProfile { get; set; }
        public string nameProfile { get; set; }
        public string descriptionProfile { get; set; }
    }
}