using LondonAPI.Models;
namespace LondonAPI {
    public class DataSeeder {

        private readonly HotelApiContext _context;
        public DataSeeder(HotelApiContext context) {
            _context = context;
        }

        public void Seed() {
            _context.Rooms.Add(new RoomEntity {
                Id = Guid.Parse("301df0fd-8679-ab92-ab92-0a586ae53d08"),
                Name = "Oxford Suite",
                Rate = 10119
            });
            _context.Rooms.Add(new RoomEntity {
                Id = Guid.Parse("ee2b83be-91db-4de5-8122-35a9e9195976"),
                Name = "Driscoll Suite",
                Rate = 23959
            });
            _context.SaveChanges();
        }

        //public SeedData() {
        //    using (var context = new HotelApiContext()) {
        //        var rooms = new List<RoomEntity> {
        //            new RoomEntity {
        //                Id = Guid.Parse("301df04d-8679-4b1b-ab92-0a586ae53d08"),
        //        Name = "Oxford Suite",
        //        Rate = 10119,
        //            },
        //            new RoomEntity {
        //                Id = Guid.Parse("ee2b83be-91db-4de5-8122-35a9e9195976"),
        //        Name = "Driscoll Suite",
        //        Rate = 23959
        //            }
        //        };
        //        context.Rooms.AddRange(rooms);
        //        context.SaveChanges();
        //    }

        //}
        //public List<RoomEntity> GetRooms() {
        //    using (var context = new HotelApiContext()) {
        //        var list = context.Rooms
        //            .ToList();
        //        return list;
        //    }
        //}
        //public static async Task InitializeAsync(IServiceProvider services) {
        //    await AddTestData(
        //        services.GetRequiredService<HotelApiContext>());
        //}

        //public static async Task AddTestData(HotelApiContext context) {
        //    if (context.Rooms.Any()) {
        //        // Already has data
        //        return;
        //    }

        //    context.Rooms.Add(new RoomEntity {
        //        Id = Guid.Parse("301df04d-8679-4b1b-ab92-0a586ae53d08"),
        //        Name = "Oxford Suite",
        //        Rate = 10119,
        //    });

        //    context.Rooms.Add(new RoomEntity {
        //        Id = Guid.Parse("ee2b83be-91db-4de5-8122-35a9e9195976"),
        //        Name = "Driscoll Suite",
        //        Rate = 23959
        //    });

        //    await context.SaveChangesAsync();
        //}

        //public static async Task  GetRooms(HotelApiContext context) {
        //    List<RoomEntity> data = new();
        //    data.Add(new () {
        //        Id = Guid.Parse("301df04d-8679-4b1b-ab92-0a586ae53d08"),
        //        Name = "Oxford Suite",
        //        Rate = 10119,
        //    });
        //    data.Add(new () {
        //        Id = Guid.Parse("ee2b83be-91db-4de5-8122-35a9e9195976"),
        //        Name = "Driscoll Suite",
        //        Rate = 23959
        //    });
        //    context.AddRange(data);
        //    context.SaveChanges();
        //}


    }
}
