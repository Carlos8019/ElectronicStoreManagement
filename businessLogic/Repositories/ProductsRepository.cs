using dataAccess.Models;
using dataAccess.Classes;
using dataAccess.interfaces; 
using dataAccess;
using businessLogic.interfaces;
using System.Linq;
using System.Collections.Generic;
using businessLogic.DTO;
namespace businessLogic.Repositories
{
    public class ProductsRepository:GenericRepository<Products>, IProductsRepository
    {
        public ProductsRepository(EsDbContext context):base(context)
        {
            
        }
        public IEnumerable<Products> GetAllProducts()
        {
            return _context.Products.ToList();
        }
        public bool AddProduct(ProductDTO dto)
        {
            bool result=false;
            Products tmp=new Products(dto);
            _context.Add(tmp);
            var validation=_context.SaveChanges();
            if(validation==1)
                result=true;
            return result;
        }
    }
}