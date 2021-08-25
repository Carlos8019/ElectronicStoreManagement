using System;
using dataAccess.Models;
using dataAccess.interfaces;
using System.Threading.Tasks;
using System.Collections.Generic;
namespace businessLogic.interfaces
{
    public interface IUserProfileRespository:IGenericRepository<UserProfile>
    {
        public Task<IEnumerable<UserProfile>> GetProfileById(int id);
    }
}