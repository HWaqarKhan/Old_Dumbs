﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace BasicECommerce.DataAccessLayer.Infrastructure.IRepository {
    public interface IRepository<T> where T: class {
        IEnumerable<T> GetAll(string? IncludeProperties = null);
        T GetT(Expression<Func<T, bool>>predicate, string? IncludeProperties = null);
        void Add(T entity);
        void Delete(T entity);
        void DeleteRange(IEnumerable<T> entity);

    }
}
