using dataAccess.Models;
using dataAccess.interfaces;
using businessLogic.DTO;
using System.Collections.Generic;
namespace businessLogic.interfaces
{
    public interface IProductsRepository:IGenericRepository<Products>
    {
        public IEnumerable<Products> GetAllProducts();
        public bool AddProduct(ProductDTO dto);
    }
}