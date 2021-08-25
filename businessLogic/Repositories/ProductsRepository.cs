using dataAccess.Models;
using dataAccess.Classes;
using dataAccess.interfaces; 
using dataAccess;
using businessLogic.interfaces;
using System.Linq;
using System.Collections.Generic;
using businessLogic.DTO;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace businessLogic.Repositories
{
    public class ProductsRepository:GenericRepository<Products>, IProductsRepository
    {
        public ProductsRepository(EsDbContext context):base(context)
        {
            
        }
        public async Task<IEnumerable<Products>> GetAllProducts()
        {
            return await _context.Products.ToListAsync();
        }
        public async Task<bool> AddProduct(ProductDTO dto)
        {
            bool result=false;
            Products tmp=new Products(dto);
            await _context.AddAsync(tmp);
            var validation=await _context.SaveChangesAsync();
            if(validation==1)
                result=true;
            return result;
        }
    }
}