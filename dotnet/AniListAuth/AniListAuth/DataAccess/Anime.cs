using Microsoft.AspNetCore.Mvc.RazorPages;

namespace AniListAuth.DataAccess {
   public class user {
        public int Id { get; set; }
        public string Name { get; set; }
    };
    public class Anime {
        public int AnimeId { get; set; }

        public string Name { get; set; }

        public string ImageUrl { get; set; }
        public override string ToString() {
            return $"Id: {AnimeId},\n" +
                $"Name: {Name},\n" +
                $"Image: {ImageUrl}]\n";
        }

    }
}
