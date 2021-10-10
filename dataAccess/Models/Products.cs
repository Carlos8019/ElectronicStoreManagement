using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;
using System.Globalization;
namespace dataAccess.Models
{
    public class Products
    {
        [Key]
        public int idProduct { get; set; }
        public string  nameProduct { get; set; }
        public string descriptionProduct { get; set; }
        public double priceProduct { get; set; }
        //public int idService { get; set; }
        //public List<Services> Services { get; set; }
        public Products()
        {
            
        }
        public Products(dynamic obj)
        {
            this.nameProduct=obj.nameProduct;
            this.descriptionProduct=obj.descriptionProduct;
            if (Double.TryParse(obj.priceProduct,NumberStyles.Any, CultureInfo.InvariantCulture, out double number))
               this.priceProduct=number;
            else
                this.priceProduct=0.0;
        }
    }
}