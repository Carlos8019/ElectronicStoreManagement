using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace dataAccess.Models
{
    [Table("DeliveryTime")]
    public class DeliveryTime
    {
       [Key] 
       public int idDeliveryTime { get; set; }
       public string nameDeliveryTime { get; set; }
       public int validityDays { get; set; }
       public string descriptionDeliveryTime { get; set; }
    }
}