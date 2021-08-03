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
        public bool AddServices(ServiceDTO dto)
        {
          bool result=false;
          Services tmp = new Services(dto);
          var insert=_context.Services.Add(tmp);
          var validation=_context.SaveChanges();
            if(validation==1)
                result=true;
          return result;   
        }
    }
}