using System.Collections.Generic;
namespace dataAccess.Models
{
    public class PresaleBody
    {
        public int idPresale { get; set; }
        public List<PresaleHead> PresaleHeads { get; set; }
        public int idProduct { get; set; }
        public List<Products> Products { get; set; }
        public int itemsNumber { get; set; }
        public double unitAmount { get; set; }
        public double totalAmount { get; set; }
        public List<Services> Services { get; set; }
        public int idService { get; set; }
    }
}