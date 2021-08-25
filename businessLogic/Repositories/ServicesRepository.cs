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
    public class ServicesRepository:GenericRepository<Services>,IServicesRepository
    {
        public ServicesRepository(EsDbContext context):base(context)
        {
            
        }
        public async Task<IEnumerable<Services>> GetAllServices() 
        {
            List<Services> result;
            result=await _context.Services.ToListAsync();
            return result;
        }   
        public async Task<bool> AddServices(ServiceDTO dto)
        {
          bool result=false;
          Services tmp = new Services(dto);
          var insert=await _context.Services.AddAsync(tmp);
          var validation=await _context.SaveChangesAsync();
            if(validation==1)
                result=true;
          return result;   
        }
    }
}