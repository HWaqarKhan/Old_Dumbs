using Microsoft.AspNetCore.SignalR.Client;
using System;
using System.Threading.Tasks;
using System.Windows;

namespace WPFClient;
/// <summary>
/// Interaction logic for MainWindow.xaml
/// </summary>
public partial class MainWindow : Window {
    HubConnection connection;
    HubConnection counterConnection;
    public MainWindow() {
        InitializeComponent();

        connection = new HubConnectionBuilder()
            .WithUrl("https://localhost:44345/chathub")
            .WithAutomaticReconnect().Build();

        counterConnection = new HubConnectionBuilder()
            .WithUrl("https://localhost:44345/counterhub")
            .WithAutomaticReconnect().Build();

        connection.Reconnecting += (sender) => { //event fired on different thread
            this.Dispatcher.Invoke(() => {
                var message = "Attempting to reconnect....";
                messages.Items.Add(message);
            });

            return Task.CompletedTask;
        };

        connection.Reconnected += (sender) => { //event fired on different thread
            this.Dispatcher.Invoke(() => {
                var message = "Reconnected to the server";
                messages.Items.Clear();
                messages.Items.Add(message);
            });

            return Task.CompletedTask;
        };
       
        connection.Closed += (sender) => { //event fired on different thread
            this.Dispatcher.Invoke(() => {
                var message = "Connection Closed";
                messages.Items.Add(message);
                openConnection.IsEnabled = true;
                sendMessage.IsEnabled = false;
            });

            return Task.CompletedTask;
        };
    }

    private async void openConnection_Click(object sender, RoutedEventArgs e) {
        connection.On<string, string>("ReceiveMessage", (user, msg) => {
            this.Dispatcher.Invoke(() => {
                var message = $"{user} : {msg}";
                messages.Items.Add(message);
            });
        });

        try {
            await connection.StartAsync();
            messages.Items.Add("Connection Started");
            openConnection.IsEnabled = false;
            sendMessage.IsEnabled = true;
        } catch (Exception ex) {
            messages.Items.Add(ex.Message);

        }
    }
    private async void sendMessage_Click(object sender, RoutedEventArgs e) {
        try {
            await connection.InvokeAsync("SendMessage", "WPF Client", messageInput.Text);
        } catch (Exception ex) {
            messages.Items.Add(ex.Message);
        }
    }
    private async void openCounter_Click(object sender, RoutedEventArgs e) {
        try {
            await counterConnection.StartAsync();
            openCounter.IsEnabled = false;
        } catch (Exception ex) {
            messages.Items.Add(ex.Message);
        }
    }

    private async void increamentCounter_Click(object sender, RoutedEventArgs e) {
        try {
            await counterConnection.InvokeAsync("AddTotal", "WPF Client", 1);
        } catch (Exception ex) {
            messages.Items.Add(ex.Message);
        }
    }
}
