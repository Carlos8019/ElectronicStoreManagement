using System.ComponentModel.DataAnnotations;
namespace dataAccess.Models
{
    public class DeliveryTime
    {
       [Key] 
       public int idDeliveryTime { get; set; }
       public string nameDeliveryTime { get; set; }
       public int validityDays { get; set; }
       public string descriptionDelyveryTime { get; set; }
    }
}