using BasicECommerce.DataAccessLayer.Infrastructure.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BasicECommerce.DataAccessLayer.Infrastructure.Repository {
    public class UnitOfWork : IUnitOfWork {
        private readonly AppDBContext _context;
        public ICategoryRepository Category { get; private set; }

        public IProductRepository Product  {get; private set;}

        public UnitOfWork(AppDBContext context)  {
            _context = context;
            Category= new CategoryRepository(context);
            Product= new ProductRepository(context);
        }
        public void Save() {
            _context.SaveChanges();
        }
    }
}
