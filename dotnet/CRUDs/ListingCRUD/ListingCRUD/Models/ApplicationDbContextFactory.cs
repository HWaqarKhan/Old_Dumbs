
using ListingCRUD.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactBook.EF {
    public class ApplicationDbContextFactory : IDesignTimeDbContextFactory<ContactDbContext> {
        public ContactDbContext CreateDbContext(string[] args) {
            var optionsBuilder = new DbContextOptionsBuilder<ContactDbContext>();
            optionsBuilder.UseSqlServer("Data Source=localhost;Database=MasterCRUDDB;User ID=sa;Password=123");

            return new ContactDbContext(optionsBuilder.Options);
        }
    }
}
