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

        public EsDbContext(DbContextOptions<EsDbContext> options) : base(options)
        {
        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
 
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