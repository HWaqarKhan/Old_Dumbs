using Microsoft.EntityFrameworkCore;

namespace ImageCRUD.Models {
    public class AppDbContext : DbContext {
        public AppDbContext(DbContextOptions options) : base(options) {
        }
        public DbSet<Contact> Contacts { get; set; }
    }
}
