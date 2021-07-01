using dataAccess.Classes;
using dataAccess.Models;
using businessLogic.interfaces;
using dataAccess;
using System.Collections.Generic;

namespace businessLogic.Repositories
{
    public class UsersRespository:GenericRepository<Users>, IUsersRepository
    {
        public UsersRespository(EsDbContext context):base(context)
        {

        }

        public IEnumerable<Users> ValidateClient(string userName, string password)
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