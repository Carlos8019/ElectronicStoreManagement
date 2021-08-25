using dataAccess.Models;
using dataAccess.Classes;
using dataAccess;
using businessLogic.interfaces;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Logging;
namespace businessLogic.Repositories
{
    public class UserProfileRepository : GenericRepository<UserProfile>, IUserProfileRespository
    {
        private readonly ILogger _logger;
        public UserProfileRepository(EsDbContext context, ILoggerFactory logger) : base(context)
        {
            _logger = logger.CreateLogger<UserProfileRepository>();
        }
        public async Task<IEnumerable<UserProfile>> GetProfileById(int id)
        {
            _logger.LogInformation("Get User Profile: " + id.ToString());
            var result = await _context.UserProfiles
                       .Where(up => up.idProfile == id)
                       .ToListAsync();
            return result;
        }
    }
}