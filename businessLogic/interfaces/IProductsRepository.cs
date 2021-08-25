using dataAccess.Models;
using dataAccess.interfaces;
using businessLogic.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace businessLogic.interfaces
{
    public interface IProductsRepository:IGenericRepository<Products>
    {
        public Task<IEnumerable<Products>> GetAllProducts();
        public Task<bool> AddProduct(ProductDTO dto);
    }
}