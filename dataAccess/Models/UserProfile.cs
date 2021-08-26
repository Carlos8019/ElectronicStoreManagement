using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace dataAccess.Models
{
    [Table("UserProfile")]
    public class UserProfile
    {
        [Key]
        [Column("idProfile")]
        public int idProfile { get; set; }
        [Column("nameProfile")]
        public string nameProfile { get; set; }
        [Column("descriptionProfile")]
        public string descriptionProfile { get; set; }
    }
}