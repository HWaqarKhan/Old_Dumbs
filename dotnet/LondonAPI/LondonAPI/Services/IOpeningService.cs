using LondonAPI.Models;


namespace LandonAPI.Services
{
    public interface IOpeningService
    {
        Task<PageResult<Opening>> GetOpeningsAsync(PagingOptions pagingOptions);
        Task<IEnumerable<BookingRange>> GetConflictingSlots(
            Guid roomId,
            DateTimeOffset start,
            DateTimeOffset end);
    }
}
