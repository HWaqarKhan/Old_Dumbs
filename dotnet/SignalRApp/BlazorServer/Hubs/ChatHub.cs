using Microsoft.AspNetCore.SignalR;

namespace BlazorServer.Hubs;
public class ChatHub:Hub {
    public Task SendMessage (string user, string msg) {
        return Clients.All.SendAsync("ReceiveMessage", user, msg);
    }


}