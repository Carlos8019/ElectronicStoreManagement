using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dataAccess.Models;
using dataAccess.interfaces;
namespace businessLogic.interfaces
{
    public interface IDeliveryTimeRepository:IGenericRepository<DeliveryTime>
    {
        public Task<IEnumerable<DeliveryTime>> GetAllDeliveryTimes();
    }
}