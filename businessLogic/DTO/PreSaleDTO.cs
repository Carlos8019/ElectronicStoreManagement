using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace businessLogic.DTO
{
    public class PreSaleDTO
    {
        public string idClient { get; set; }
        public string date { get; set; }
        public string idPaymentMode { get; set; }
        public string idValidityTime { get; set; }
        public string validityDays { get; set; }
        public string productsArray { get; set; }
        public string servicesArray { get; set; }
        public string commentsArray { get; set; }
    }
}