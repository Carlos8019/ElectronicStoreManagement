using dataAccess.interfaces;
using dataAccess.Models;
using System.Collections.Generic;
namespace businessLogic.interfaces
{
    public interface IServicesRepository:IGenericRepository<Services>
    {
        public IEnumerable<Services> GetAllServices();
    }
}