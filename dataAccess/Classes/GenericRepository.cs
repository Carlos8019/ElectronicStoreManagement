using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using dataAccess.interfaces;
namespace dataAccess.Classes
{
    public abstract class GenericRepository<T>:IGenericRepository<T> where T:class
    {
        protected readonly EsDbContext _context;
        internal DbSet<T> dBSet;
        
        protected GenericRepository(EsDbContext context)
        {
            _context=context;
            this.dBSet=context.Set<T>();
        }
        public async Task<T> Get(int id)
        {
            return await _context.Set<T>().FindAsync(id);
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            return await _context.Set<T>().ToListAsync();
        }

        public virtual async Task Add(T entity)
        {
            await _context.Set<T>().AddAsync(entity);
        }

        public void Delete(T entity)
        {
            _context.Set<T>().Remove(entity);
        }

        public void Update(T entity)
        {
            _context.Set<T>().Update(entity);
        }
        public virtual async Task<int> Save()
        {
            return await _context.SaveChangesAsync();
        }
    }
}