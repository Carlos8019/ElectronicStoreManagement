using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace dataAccess.Models
{
    public class Clients
    {
        [Key]
        public int idClient { get; set; }
        public string nameClient { get; set; }
        public string phoneClient { get; set; }
        public string addressClient { get; set; }
        public string emailClient { get; set; }
    }
}