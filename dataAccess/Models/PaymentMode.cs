using System.ComponentModel.DataAnnotations;
namespace dataAccess.Models
{
    public class PaymentMode
    {
        [Key]
        public int idPaymentMode { get; set; }
        public string namePaymentMode { get; set; }
        public string descriptionPaymentMode { get; set; }
    }
}