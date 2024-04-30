using LondonAPI.Models;

namespace LondonAPI {
    public interface ISeedData {
        public List<RoomEntity> GetRooms();
    }
}