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
        public IServicesRepository Services{get;}
        public IProductsRepository Products { get; set; }
        public IUserProfileRespository Profiles{get;}
        public IPaymentModeRepository PaymentModes {get;}
        public IDeliveryTimeRepository DeliveryTimes {get;}
        public UnitOfWork(EsDbContext context
        ,IClientsRepository clients
        ,IUsersRepository users
        ,IServicesRepository services
        ,IProductsRepository products
        ,IUserProfileRespository profile
        ,IPaymentModeRepository paymentMode
        )
        {
            this.Clients=clients;
            this._context=context;
            this.Users=users;
            this.Services=services;
            this.Products=products;
            this.Profiles=profile;
            this.PaymentModes=paymentMode;
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