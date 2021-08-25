using System;
using businessLogic.Repositories;
namespace businessLogic.interfaces
{
    public interface IUnitOfWork:IDisposable
    {
        public IClientsRepository Clients{get;}
        public IUsersRepository Users{get;}
        public IServicesRepository Services{get;}
        public IProductsRepository Products { get; set; }
        public IUserProfileRespository Profiles{get;}
    }
}