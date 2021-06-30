using System;
using businessLogic.Repositories;
namespace businessLogic.interfaces
{
    public interface IUnitOfWork:IDisposable
    {
        IClientsRepository Clients{get;}
    }
}