using dataAccess.Models;
using dataAccess.Classes;
using dataAccess.interfaces; 
using dataAccess;
using businessLogic.interfaces;
using System.Linq;
using System.Collections.Generic;
namespace businessLogic.Repositories
{
    public class ServicesRepository:GenericRepository<Services>,IServicesRepository
    {
        public ServicesRepository(EsDbContext context):base(context)
        {
            
        }
     public IEnumerable<Services> GetAllServices() 
     {
         List<Services> result;
         result=_context.Services.ToList();
         return result;
     }   
    }
}