using BasicECommerce.DataAccessLayer.Infrastructure.IRepository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace BasicECommerce.DataAccessLayer.Infrastructure.Repository {
    public class Repository<T> : IRepository<T> where T : class {
        private readonly AppDBContext _context;
        private DbSet<T> _dbSet;
        public Repository(AppDBContext context) {
            _context = context;
            _dbSet = _context.Set<T>(); //_dbSet = _context.Set<DBModel>()
        }
        public void Add(T entity) {
            _dbSet.Add(entity);
        }

        public void Delete(T entity) {
            _dbSet.Remove(entity);
        }

        public void DeleteRange(IEnumerable<T> entity) {
            _dbSet.RemoveRange(entity);
        }

        public IEnumerable<T> GetAll(string? IncludeProperties = null) {
            IQueryable<T> query = _dbSet;
            if (IncludeProperties!=null) {
                foreach (var item in IncludeProperties.Split(new char[] {','}, StringSplitOptions.RemoveEmptyEntries)) {
                    query = query.Include(item);
                }
            }
            return query.ToList();
        }

        public T GetT(Expression<Func<T, bool>> predicate, string? IncludeProperties = null) {
            IQueryable<T> query = _dbSet;
            query = query.Where(predicate);
            if (IncludeProperties != null) {
                foreach (var item in IncludeProperties.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries)) {
                    query = query.Include(item);
                }
            }
            return query.FirstOrDefault();
        }
    }
}
