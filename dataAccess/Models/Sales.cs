using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
namespace dataAccess.Models
{
    public class Sales
    {
        [Key]
        public int idSale { get; set; }
        public List<PresaleHead> Presales { get; set; }
        public int idPresale { get; set; }

    }
}