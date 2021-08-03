using dataAccess.interfaces;
using dataAccess.Models;
using businessLogic.DTO;
using System.Collections.Generic;
namespace businessLogic.interfaces
{
    public interface IServicesRepository:IGenericRepository<Services>
    {
        public IEnumerable<Services> GetAllServices();
        public bool AddServices(ServiceDTO dto);
    }
}