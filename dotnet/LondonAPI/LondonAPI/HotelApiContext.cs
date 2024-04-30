using Microsoft.EntityFrameworkCore;
using LondonAPI.Models;
namespace LondonAPI {
    public class HotelApiContext : DbContext{
        public HotelApiContext(DbContextOptions options):base(options) {
        }
        //protected override void OnConfiguring(DbContextOptionsBuilder options) {
        //    options.UseInMemoryDatabase("LondonAPI");
        //}
        public DbSet<RoomEntity>  Rooms{ get; set; }
        public DbSet<BookingEntity> Bookings { get; set; }
    }
}
