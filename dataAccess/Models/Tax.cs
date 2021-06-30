using System.ComponentModel.DataAnnotations;
namespace dataAccess.Models
{
    public class Tax
    {
        [Key]
        public int idTax { get; set; }
        public string nameTax { get; set; }
        public double amountTax { get; set; }
        public string descriptionTax { get; set; }
    }
}