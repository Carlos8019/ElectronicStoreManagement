    using Microsoft.EntityFrameworkCore;
    using dataAccess.Models;
    namespace dataAccess
    {
        public class EsDbContext:DbContext
        {
            public EsDbContext(DbContextOptions<EsDbContext> options):base(options)
            {
                
            }
            public DbSet<Clients> Clients { get; set; }
        }
    }