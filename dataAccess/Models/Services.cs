using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace dataAccess.Models
{
    public class Services
    {
        [Key]
        public int idService { get; set; }
        public string nameService { get; set; }
        public string descriptionService { get; set; }
    }
}