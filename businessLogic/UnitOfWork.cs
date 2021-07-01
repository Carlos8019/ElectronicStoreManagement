using businessLogic.interfaces;
using dataAccess;
using System;
namespace businessLogic
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly EsDbContext _context;
        public IClientsRepository Clients{get;}
        public IUsersRepository Users{get;}
        public UnitOfWork(EsDbContext context,IClientsRepository clients,IUsersRepository users)
        {
            this.Clients=clients;
            this._context=context;
            this.Users=users;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        protected virtual void Dispose(bool disposing)
        {
            if(disposing)
                _context.Dispose();
        }
    }
}