using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dataAccess.Models;
using dataAccess.Classes;
using businessLogic.interfaces;
using dataAccess;
using Microsoft.EntityFrameworkCore;
namespace businessLogic.Repositories
{
    public class DeliveryTimeRepository : GenericRepository<DeliveryTime>, IDeliveryTimeRepository
    {
        public DeliveryTimeRepository(EsDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<DeliveryTime>> GetAllDeliveryTimes()
        {
            var result=await _context.DeliveryTimes.ToListAsync();
            return result;
        }
    }
}