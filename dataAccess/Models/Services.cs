using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;
using System.Globalization;
namespace dataAccess.Models
{
    public class Services
    {
        [Key]
        public int idService { get; set; }
        public string nameService { get; set; }
        public string descriptionService { get; set; }
        public double priceService { get; set; }
        public Services()
        {
        }
        public Services(dynamic obj)
        {
            this.nameService=obj.nameService;
            this.descriptionService=obj.descriptionService;
             if (Double.TryParse(obj.priceService,NumberStyles.Any, CultureInfo.InvariantCulture, out double number))
               this.priceService=number;
            else
                this.priceService=0.0;
        }        
    }
}