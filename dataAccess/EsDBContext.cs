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
        /*
        optionsBuilder.UseMySql("server=localhost;port=3306;database=ESM;uid=esm;password=_Esm2009",
                                                    new MySqlServerVersion(new Version(8, 0, 25)));   
                                                    */
    }
            public DbSet<Clients> Clients { get; set; }
        }
    }