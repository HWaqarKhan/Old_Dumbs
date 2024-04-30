using Newtonsoft.Json;

namespace LondonAPI.Models {
    public class PagedCollection<T>: Collection<T>{
        [JsonProperty(NullValueHandling =NullValueHandling.Ignore)]
        public int? offSet { get; set; }
        [JsonProperty(NullValueHandling =NullValueHandling.Ignore)]
        public int? Limit { get; set; }
        [JsonProperty(NullValueHandling =NullValueHandling.Ignore)]
        public int? size { get; set; }
        [JsonProperty(NullValueHandling =NullValueHandling.Ignore)]
        public Link? First{ get; set; }
        [JsonProperty(NullValueHandling =NullValueHandling.Ignore)]
        public Link? Last{ get; set; }
        [JsonProperty(NullValueHandling =NullValueHandling.Ignore)]
        public Link? Next{ get; set; }
        [JsonProperty(NullValueHandling =NullValueHandling.Ignore)]
        public Link? Previous{ get; set; }
    }
}
