using dataAccess.Models;
using dataAccess.interfaces;
using businessLogic.DTO;
using System.Threading.Tasks;
using System.Collections.Generic;
namespace businessLogic.interfaces
{
    public interface IClientsRepository:IGenericRepository<Clients>
    {
        public Task<IEnumerable<Clients>> GetAllClients();
        public Task<bool> AddClient(ClientDTO dtoClient);
    }
}