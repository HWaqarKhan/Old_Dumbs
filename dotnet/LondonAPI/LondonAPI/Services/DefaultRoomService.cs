using AutoMapper;
using AutoMapper.QueryableExtensions;
using LondonAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace LondonAPI.Services {
    public class DefaultRoomService : IRoomService {
        private readonly HotelApiContext _context;
        private readonly IMapper _mapper;
        public DefaultRoomService(HotelApiContext context, IMapper mapper) {
            _context = context;
            _mapper = mapper;
        }
        public async Task<Room> GetRoomAsync(Guid id, CancellationToken ct) {
            var entity = await _context.Rooms.SingleOrDefaultAsync(r => r.Id ==id, ct);
            if (entity == null) return null;
            //var resource = new Room {
            //    Href = null,//Url.Link(nameof(GetRoomByIdAsync), new { roomId = entity.Id }),
            //    Name = entity.Name,
            //    Rate = entity.Rate / 100.0m
            //};
            return _mapper.Map<Room>(entity);
        }

        public async Task<IEnumerable<Room>> GetRoomAsync(CancellationToken ct) {
            var query = _context.Rooms.ProjectTo<Room>(_mapper.ConfigurationProvider);
            return await query.ToArrayAsync();
        }
    }
}
