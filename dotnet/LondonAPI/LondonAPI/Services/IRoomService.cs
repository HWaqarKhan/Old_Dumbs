using LondonAPI.Models;

namespace LondonAPI.Services {
    public interface IRoomService {
        Task<Room> GetRoomAsync(Guid id, CancellationToken ct);
        Task<IEnumerable<Room>> GetRoomAsync(CancellationToken ct);
    }
}
