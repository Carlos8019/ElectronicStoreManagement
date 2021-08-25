using System.Threading.Tasks;
using System.Collections.Generic;
namespace dataAccess.interfaces
{
    public interface IGenericRepository<T> where T:class
    {
        public Task<T> Get(int id);
        public Task<IEnumerable<T>> GetAll();

        public Task Add(T entity);

        public void Delete(T entity);

        public void Update(T entity);
        public Task<int> Save();
    }
}