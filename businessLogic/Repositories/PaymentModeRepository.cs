using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using businessLogic.interfaces;
using dataAccess.Models;
using dataAccess.Classes;
using dataAccess;
using Microsoft.EntityFrameworkCore;

namespace businessLogic.Repositories
{
    public class PaymentModeRepository : GenericRepository<PaymentMode>, IPaymentModeRepository
    {
        public PaymentModeRepository(EsDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<PaymentMode>> GetAllPaymentsMode()
        {
            var result=await _context.PaymentModes.ToListAsync();
            return result;
                       
        }
    }
}