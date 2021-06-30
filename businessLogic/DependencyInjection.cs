using Microsoft.Extensions.DependencyInjection;
using businessLogic.interfaces;
using businessLogic.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.InMemory;
using dataAccess;
namespace businessLogic
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddRepository(this IServiceCollection services)
        {
            services.AddTransient<IClientsRepository,ClientsRepository>();
            services.AddTransient<IUnitOfWork,UnitOfWork>();
            
            return services;
        }
    }
}