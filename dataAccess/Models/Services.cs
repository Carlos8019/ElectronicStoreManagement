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
        public Services()
        {
        }
        public Services(dynamic obj)
        {
            this.nameService=obj.nameService;
            this.descriptionService=obj.descriptionService;
        }        
    }
}