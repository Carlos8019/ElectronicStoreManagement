using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace dataAccess.Models
{
    public class PresaleHead
    {
        [Key]
        public int idPresale { get; set; }
        public int idClient { get; set; }
        public List<Clients> Clients { get; set; }
        public int idStatusPresale { get; set; }
        public List<StatusPresale>  StatusPresales { get; set; }
        public int date { get; set; }
        public int idPaymentMode { get; set; }
        public List<PaymentMode> PaymentModes { get; set; }
        public int idDeliveryTime { get; set; }
        public List<DeliveryTime> DeliveryTimes { get; set; }        
        public double subTotalPresale { get; set; }
        public double totalPresale { get; set; }
        public int idTax { get; set; }
        public List<Tax> Taxes { get; set; }
    }
}