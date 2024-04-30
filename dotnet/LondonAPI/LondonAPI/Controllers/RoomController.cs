using LandonAPI.Services;
using LondonAPI.Models;
using LondonAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LondonAPI.Controllers {
    [Route("/[controller]")]

    public class RoomController : ControllerBase {
        private readonly IRoomService _context;
        private readonly IOpeningService _openingService;
        public RoomController(IRoomService context, IOpeningService openingService) {
            _context = context;
            _openingService = openingService;
        }
        [HttpGet(Name = nameof(GetRoomAsync))]
        public async Task<IActionResult> GetRoomAsync(CancellationToken ct) {
            var rooms = await _context.GetRoomAsync(ct);
            var collectionLink = Link.ToCollection(nameof(GetRoomAsync));
            var collection = new Collection<Room> {
                Self = collectionLink,
                Value = rooms.ToArray(), 
            };
            return Ok(collection);
        }

        [HttpGet("{id:guid}", Name = nameof(GetRoomByIdAsync))]
        public async Task<IActionResult> GetRoomByIdAsync(Guid roomId, CancellationToken ct) {
            var room = await _context.GetRoomAsync(roomId, ct);
            if (room == null) return NotFound();
            return Ok(room);

        }
        [HttpGet("{openings}", Name = nameof(GetAllRoomOpeningsAsync))]
        public async Task<IActionResult> GetAllRoomOpeningsAsync( CancellationToken ct,
            [FromQuery]PagingOptions pagingOptions) {
            var openings = await _openingService.GetOpeningsAsync(pagingOptions);
            var collectionLink = Link.ToCollection(nameof(GetRoomAsync));
            var collection = new PagedCollection<Opening> {
                Self = collectionLink,
                Value = openings.Items.ToArray(),
                size = openings.TotalSize,
                offSet= pagingOptions.OffSet.Value,
                Limit= pagingOptions.Limit.Value,
            };
            return Ok(collection);

        }
    }
}
