namespace LondonAPI.Models {
    public class PageResult<T> {
        public IEnumerable<T> Items { get; set; }
        public int TotalSize { get; set; }
    }
}
