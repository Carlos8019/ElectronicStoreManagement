using dataAccess.Models;
using dataAccess.interfaces;
using System.Collections.Generic;
namespace businessLogic.interfaces
{
    public interface IClientsRepository:IGenericRepository<Clients>
    {
        public IEnumerable<Clients> GetAllClients();
        public bool AddClient(Clients client);
    }
}