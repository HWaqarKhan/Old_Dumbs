//using Google.Apis.Json;
//using GraphQL.Client.Abstractions;
//using GraphQL.Client.Http;
using AniListAuth.DataAccess;
using GraphQL;
using GraphQL.Client.Abstractions;
using GraphQL.Client.Http;
using GraphQL.Client.Serializer.Newtonsoft;
using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OpenIdConnect;
using Newtonsoft.Json;
using Owin;
using System;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddScoped<IGraphQLClient>(s => new GraphQLHttpClient("GraphQLURI", new NewtonsoftJsonSerializer()));
builder.Services.AddScoped<AnilistConsumer>();


//var GraphQLClientOption = new GraphQLHttpClientOptions {
//    EndPoint = new Uri("https://graphql.anilist.co")
//};
//var http = new HttpClient();
//http.DefaultRequestHeaders.Add("secretKey","");
//var client = new GraphQLHttpClient(GraphQLClientOption, new NewtonsoftJsonSerializer(), http);
//var req = new GraphQLRequest {
//    Query = @"{
//    Viewer {
//          id,
//         Name
//        }}"
//};

//var response = await client.SendQueryAsync<user>(req);
//function handleResponse(response) {
//    console.log(response);
//}
// Add services to the container.
builder.Services.AddControllersWithViews();
//builder.Services.AddScoped<IGraphQLClient>(s => new GraphQLHttpClient(ConfigureWebHostBuilder("AniListGraphQl"), new NewtonsoftJsonSerializer()));
var app = builder.Build();

//IAppBuilder? apps = app.UseOpenIdConnectAuthentication(new OpenIdConnectAuthenticationOptions {
//    ClientId = "10135",
//    ClientSecret = "G7D0oM9dH8TDH87BLi8JHsnrlqDLlwjtjVV8osY3",
//    MetadataAddress = "https://anilist.co/api/v2/oauth/authorize?",
//    RedirectUri = "https://localhost:44341/Home/OauthCallback",
//    ResponseType = "token",
//    SignInAsAuthenticationType = DefaultAuthenticationTypes.ExternalCookie
//}); ;
// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment()) {
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}
//app.UseAuthentication(new OpenIdConnectAuthenticationOptions {
//    // Other options removed for readability
//    SaveTokens = true,

//    // Required for the authorization code flow to exchange for tokens automatically
//    RedeemCode = true
//});


app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
