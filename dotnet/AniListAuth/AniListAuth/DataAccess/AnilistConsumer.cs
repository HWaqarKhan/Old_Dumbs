using GraphQL.Client.Abstractions;

namespace AniListAuth.DataAccess {
    public class AnilistConsumer {
        private readonly IGraphQLClient _client;
        public AnilistConsumer(IGraphQLClient client) {
            _client = client;
        }
    }   
}
