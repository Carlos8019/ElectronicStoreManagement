using dataAccess.Models;
using dataAccess.interfaces;
using System.Collections.Generic;
namespace businessLogic.interfaces
{
    public interface IUsersRepository:IGenericRepository<Users>
    {
        public IEnumerable<Users> ValidateClient(string userName,string password);        
    }
}