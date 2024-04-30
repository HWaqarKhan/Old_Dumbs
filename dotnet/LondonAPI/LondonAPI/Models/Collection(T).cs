namespace LondonAPI.Models {
    public class Collection<T>:Resource {
        public T[] Value { get; set; }
    }
}
