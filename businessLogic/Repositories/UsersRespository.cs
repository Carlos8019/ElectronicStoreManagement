using dataAccess.Classes;
using dataAccess.Models;
using businessLogic.interfaces;
using dataAccess;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using businessLogic.DTO;
using System.Linq;
using Microsoft.EntityFrameworkCore;
namespace businessLogic.Repositories
{
    public class UsersRespository:GenericRepository<Users>, IUsersRepository
    {
        private readonly ILogger _logger;
        private IUserProfileRespository _userProfile;
        public UsersRespository(EsDbContext context,ILoggerFactory logger,IUserProfileRespository userProfile):base(context)
        {
            _logger=logger.CreateLogger<UsersRespository>();
            _userProfile=userProfile;
        }
        public async Task<bool> CreateUser(UserDTO dto)
        {
            //find iser profile   
            _logger.LogInformation("Create User",dto);
            int.TryParse(dto.idProfile,out int idProfile);
            var objUserProfile=await _userProfile.GetProfileById(idProfile);
            //create entity
            Users entity=new Users(dto);
            entity.UserProfiles=objUserProfile.ToList();
            _logger.LogInformation("Create Entity");
            var result=await _context.Users.AddAsync(entity);
            var insert=await _context.SaveChangesAsync();
            _logger.LogInformation("Result Insert User: "+insert);
            if(insert>0)
                return true;
            else
                return false;
        }
        public async Task<IEnumerable<Users>> ValidateClient(string userName, string password)
        {
            List<Users> result= new List<Users>();
            Users objUser= new Users();
            objUser.idProfile=1;
            objUser.nameUser="binyanea";
            objUser.passwordUser="7b85175b455060e3237e925f023053ca9515e8682a83c8b09911c724a1f8b75f";
            if(userName==objUser.nameUser && password== objUser.passwordUser)
            {
                result.Add(objUser);    
            }
            return result;

        }
    }
}