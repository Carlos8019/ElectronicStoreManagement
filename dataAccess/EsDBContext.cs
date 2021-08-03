using Microsoft.EntityFrameworkCore;
using dataAccess.Models;
using System;
    namespace dataAccess
    {
        public class EsDbContext:DbContext
        {
            public EsDbContext(DbContextOptions<EsDbContext> options):base(options)
            {
            }


    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
    }
            public DbSet<Clients> Clients { get; set; }
            public DbSet<Services> Services { get; set; }
            public DbSet<Products> Products { get; set; }
        }
    }