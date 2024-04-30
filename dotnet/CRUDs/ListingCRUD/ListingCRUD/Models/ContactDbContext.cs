using Microsoft.EntityFrameworkCore;

namespace ListingCRUD.Models {
    public class ContactDbContext : DbContext {
        public ContactDbContext(DbContextOptions options) : base(options) {
        }
        public DbSet<Contact> Contacts{ get; set; }
        public DbSet<PhoneNumber> PhoneNumbers { get; set; }
    }
}
