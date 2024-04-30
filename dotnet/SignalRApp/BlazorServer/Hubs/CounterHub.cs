using Microsoft.AspNetCore.SignalR;

namespace BlazorServer.Hubs;

public class CounterHub: Hub {
    public Task AddTotal (string user, int value) {
        return Clients.All.SendAsync("CounterIncreament", user, value);
    }
}
