using BasicECommerce.DataAccessLayer.Infrastructure.IRepository;
using BasicECommerce.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BasicECommerce.DataAccessLayer.Infrastructure.Repository {
    public class CategoryRepository : Repository<Category>, ICategoryRepository {
        private readonly AppDBContext _context;
        public CategoryRepository(AppDBContext context) : base(context) {
            _context = context;
        }

        public void Update(Category category) {
            var categoryDb = _context.Categories.FirstOrDefault(x => x.Id == category.Id);
            if (categoryDb!=null) {
                categoryDb.Name = category.Name;
                categoryDb.DisplayOrder = category.DisplayOrder;
            }
        }
    }
}
