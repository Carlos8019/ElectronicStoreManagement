using Microsoft.EntityFrameworkCore;
using dataAccess.Models;
using System;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;
//using MySqlConnector.Logging;

namespace dataAccess
{
    public class EsDbContext : DbContext
    {
         //static LoggerFactory object
        /*
        public static readonly ILoggerFactory consoleLoggerFactory  
            = new LoggerFactory(new[] {
                  new ConsoleLoggerProvider((category, level) =>
                    category == DbLoggerCategory.Database.Command.Name &&
                    level == LogLevel.Information, true)
                });
                */

        public EsDbContext(DbContextOptions<EsDbContext> options) : base(options)
        {
        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql("DefaultConnection", ServerVersion.AutoDetect("DefaultConnection"));
            //optionsBuilder.UseLoggerFactory(loggerFactory)  //tie-up DbContext with LoggerFactory object
            //.EnableSensitiveDataLogging();     
        }

        public DbSet<Clients> Clients { get; set; }
        public DbSet<Services> Services { get; set; }
        public DbSet<Products> Products { get; set; }
        public DbSet<Users> Users { get; set; }
        public DbSet<UserProfile> UserProfiles { get; set; }
        public DbSet<PaymentMode> PaymentModes{ get; set; }
        public DbSet<DeliveryTime> DeliveryTimes { get; set; }
    }
}