using AutoMapper;
using LondonAPI.Models;

namespace LondonAPI.Infrastructure {
    public class MapingProfile:Profile {
        public MapingProfile() {
            CreateMap<RoomEntity, Room>()
                .ForMember(dest => dest.Rate,
                opt => opt.MapFrom(src => src.Rate / 100.0m))
                .ForMember(dest => dest.Self,
                opt => opt.MapFrom(src =>
                    Link.To(nameof(Controllers.RoomController.GetRoomByIdAsync), new { roomId = src.Id })));

        }
    }
}
 