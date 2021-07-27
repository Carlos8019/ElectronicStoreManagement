using businessLogic.interfaces;
using dataAccess.Models;
using System.Linq;
using dataAccess.Classes;
using dataAccess;
using businessLogic.DTO;
using System.Collections.Generic;
namespace businessLogic.Repositories
{
    public class ClientsRepository:GenericRepository<Clients> ,IClientsRepository 
    {
        
        public ClientsRepository(EsDbContext context):base(context)
        {
        }
        public bool AddClient(ClientDTO dtoClient)
        {
            bool result=false;
            Clients objClient= new Clients(dtoClient);
            _context.Clients.Add(objClient);
            var validation=_context.SaveChanges();
            if(validation==1)
                result=true;
            return result;
        }

        public IEnumerable<Clients> GetAllClients()
        {
            var result=_context.Clients.ToList();
            /*List<Clients> result=new List<Clients>();
            Clients objClient=new Clients();
            Clients objClient1=new Clients();
            objClient.idClient=1;
            objClient.nameClient="Carlos Yanez";
            objClient.phoneClient="0998905560";
            objClient.addressClient="Turubamba";
            objClient.emailClient="carlosyanez2009@gmail.com";
            result.Add(objClient);
            objClient1.idClient=2;
            objClient1.nameClient="Tatiana Ushiña";
            objClient1.phoneClient="0984723300";
            objClient1.addressClient="Solanda";
            objClient1.emailClient="tatianaisabel@gmail.com";
            result.Add(objClient1);
            */
            return result;
            
        }
    }
}