using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace dataAccess.Models
{
    [Table("PaymentMode")]
    public class PaymentMode
    {
        [Key]
        public int idPaymentMode { get; set; }
        public string namePaymentMode { get; set; }
        public string descriptionPaymentMode { get; set; }
    }
}