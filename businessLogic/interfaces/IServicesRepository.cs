using dataAccess.interfaces;
using dataAccess.Models;
using businessLogic.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace businessLogic.interfaces
{
    public interface IServicesRepository:IGenericRepository<Services>
    {
        public Task<IEnumerable<Services>> GetAllServices();
        public Task<bool> AddServices(ServiceDTO dto);
    }
}