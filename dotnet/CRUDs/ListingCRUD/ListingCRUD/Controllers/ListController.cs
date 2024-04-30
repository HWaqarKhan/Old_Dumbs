using ListingCRUD.Models;
using Microsoft.AspNetCore.Mvc;

namespace ListingCRUD.Controllers {
    public class ListController : Controller {
        private readonly ContactDbContext _context;
        public ListController(ContactDbContext context) {
            _context = context;
        }
        public IActionResult Index() {
            List<Contact> contacts;
            contacts = _context.Contacts.ToList();
            return View(contacts);
        }
    }
}
