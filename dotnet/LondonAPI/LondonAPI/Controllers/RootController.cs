using LondonAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LondonAPI.Controllers {
    [Route("/")]
    [ApiVersion("1.0")]
    public class RootController : ControllerBase {
        [HttpGet(Name =nameof(GetRoot))]
        public IActionResult GetRoot() {
            var response = new RootResponse{
                Self = Link.To(nameof(GetRoot)),// Url.Link(nameof(GetRoot), null),
                Rooms =Link.To(nameof(RoomController.GetRoomAsync)),// new {href = Url.Link(nameof(RoomController.GetRooms), null), },
                Info = Link.To(nameof(InfoController.GetInfo)),//new {href = Url.Link(nameof(InfoController.GetInfo), null), },
            };  
            return Ok(response);
        }
    }
}
