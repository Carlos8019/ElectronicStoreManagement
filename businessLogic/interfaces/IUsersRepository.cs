using dataAccess.Models;
using dataAccess.interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using businessLogic.DTO;
namespace businessLogic.interfaces
{
    public interface IUsersRepository:IGenericRepository<Users>
    {
        public Task<IEnumerable<Users>> ValidateClient(string userName,string password);        
        public Task<bool> CreateUser(UserDTO dto);
    }
}