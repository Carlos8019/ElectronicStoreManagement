using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace dataAccess.Models
{
    public class Products
    {
        [Key]
        public int idProduct { get; set; }
        public string  nameProduct { get; set; }
        public string descripctionProduct { get; set; }
        public int idService { get; set; }
        public List<Services> Services { get; set; }
 
    }
}