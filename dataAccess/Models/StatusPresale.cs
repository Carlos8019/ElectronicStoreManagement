using System.ComponentModel.DataAnnotations;
namespace dataAccess.Models
{
    public class StatusPresale
    {
        [Key]
        public int idStatusPresale { get; set; }
        public string nameStatusPresale { get; set; }
        public string descriptionStatusPresale { get; set; }
    }
}