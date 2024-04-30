using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security.Notifications;
using Microsoft.Owin.Security.OpenIdConnect;
using Newtonsoft.Json;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Security.Policy;
using System.Text;
using System.Threading.Tasks;

namespace AniListAuth.Common
{
    public class AnilisyHelper
    {
        public static string ApplicationName = "Anilist GraphQL API Web Client";

        public static string client_id = "10135";

        public static string ClientSecret = "G7D0oM9dH8TDH87BLi8JHsnrlqDLlwjtjVV8osY3";

        public static string redirect_uri = "https://localhost:44341/Home/OauthCallback";

        public static string OauthUri = "https://anilist.co/api/v2/oauth/authorize?";

        public static string TokenUri= "https://anilist.co/api/v2/oauth/token";
        
        public static string response_type = "token";

        public void ConfigureAuth(IAppBuilder app) {
            // ...

            //app.UseOpenIdConnectAuthentication(new OpenIdConnectAuthenticationOptions {
            //    ClientId = client_id,
            //    Authority = OauthUri,
            //    Notifications = new OpenIdConnectAuthenticationNotifications() {
            //        AuthorizationCodeReceived = (context) => {
            //            string authorizationCode = context.Code;
            //            // (tricky) the authorizationCode is available here to use, but...
            //            return Task.FromResult(0);
            //        }
            //    }
            //});

            app.UseOpenIdConnectAuthentication(new OpenIdConnectAuthenticationOptions {
                ClientId = client_id,
                ClientSecret = ClientSecret,
                MetadataAddress = OauthUri,
                RedirectUri = redirect_uri,
                ResponseType = response_type,
                SignInAsAuthenticationType = DefaultAuthenticationTypes.ExternalCookie
            });

        }

        public static string GetOauthUri() 
        {
            StringBuilder sbUri = new StringBuilder(OauthUri);
            sbUri.Append("client_id=" + client_id);
            sbUri.Append(";redirect_uri=" + redirect_uri);
            sbUri.Append("&response_type=" + response_type);
            return sbUri.ToString();
        }

        public static async Task<AnilistToken> GetTokenByCode(string code) {
           

            AnilistToken token = null;

            var postData = new {
                grant_type = "authorization_code",
                client_id = client_id,
                client_secret = ClientSecret,
                redirect_uri = redirect_uri,
                code = code,
            };

            //var httpWebRequest = new(HttpWebRequest.(TokenUri);
            //    httpWebRequest.ContentType = "application/json";
            //httpWebRequest.Accept = "application/json";
            var httpWebRequest = (HttpWebRequest)WebRequest.Create(TokenUri);
            httpWebRequest.ContentType = "application/json";
            httpWebRequest.Method = "POST";
            httpWebRequest.Headers["Accept"] = "application/json";

            using (var httpClient = new HttpClient()) 
            {
                //httpClient.BaseAddress = new Uri(TokenUri);
                //httpClient.DefaultRequestHeaders.Accept.Clear();
                //httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                
                

                //httpClient.DefaultRequestHeaders.Accept  ="application/json";
                StringContent content = new(JsonConvert.SerializeObject(postData), Encoding.UTF8, "application/json");
                //HttpContent httpContent = new HttpContent
                using (var response = await httpClient.PostAsync(TokenUri, content)) 
                {
                    if (response.StatusCode == System.Net.HttpStatusCode.OK) 
                    {
                        string responseString = await response.Content.ReadAsStringAsync();
                        token = JsonConvert.DeserializeObject<AnilistToken>(responseString);
                    }
                }
            }

            return token;
        }

        //public string GetAccessToken(string code) {
        //    string AccessToken = "";
        //    string responseFromServer = "";
        //    WebRequest request = WebRequest.Create(TokenUri); //your project url
        //    request.Method = "POST";

        //    string postData = "grant_type=authorization_code" + "client_id=" + client_id + "client_secret=" + ClientSecret + "redirect_uri=" + redirect_uri + "code=" + code;
        //    var postData = new {
        //        grant_type = "authorization_code",
        //        client_id = client_id,
        //        client_secret = ClientSecret,
        //        redirect_uri = redirect_uri,
        //        code = code,
        //    };
        //    StringContent array = new StringContent(JsonConvert.SerializeObject(postData), Encoding.UTF8, "application/json");
        //    byte[] byteArray = Encoding.UTF8.GetString((byte)postData);
        //    request.ContentType = "application/json";
        //    request.ContentLength = byteArray.Length;
        //    System.IO.Stream dataStream = request.GetRequestStream();
        //    dataStream.Write(array, 0, byteArray.Length);
        //    dataStream.Close();
        //    WebResponse response = request.GetResponse();
        //    Console.WriteLine(((HttpWebResponse)response).StatusDescription);
        //    using (dataStream = response.GetResponseStream()) {
        //        System.IO.StreamReader reader = new System.IO.StreamReader(dataStream);
        //        responseFromServer = reader.ReadToEnd();
        //        Console.WriteLine(responseFromServer);
        //    }
        //    AnilistToken myDeserializedClass = Newtonsoft.Json.JsonConvert.DeserializeObject<AnilistToken>(responseFromServer);
        //    AccessToken = myDeserializedClass.access_token;

        //    response.Close();
        //    return AccessToken;
        //}


        //public static async Task<Task> SecurityToken(SecurityTokenValidatedNotification<OpenIdConnectMessage, OpenIdConnectAuthenticationOptions> context) {
        //    string aadInstance = ConfigurationManager.AppSettings["ida:AADInstance"];
        //    string clientId = ConfigurationManager.AppSettings["ida:ClientId"];
        //    string clientSecret = ConfigurationManager.AppSettings["ida:ClientSecret"];
        //    string source = ConfigurationManager.AppSettings["ExchangeOnlineId"];

        //    var authContext = new AuthenticationContext(aadInstance, false);
        //    var credentials = new ClientCredential(clientId, clientSecret);
        //    var appRedirectUrl = context.Request.Scheme + "://" + context.Request.Host + context.Request.PathBase + "/";
        //    var authResult = await authContext.AcquireTokenByAuthorizationCodeAsync(context.ProtocolMessage.Code, new Uri(appRedirectUrl), credentials, source);
        //    var accessToken = authResult.AccessToken;
        //    var applicationUserIdentity = new ClaimsIdentity(context.OwinContext.Authentication.User.Identity);
        //    applicationUserIdentity.AddClaim(new Claim("AccessToken", accessToken));
        //    context.OwinContext.Authentication.User.AddIdentity(applicationUserIdentity);
        //    return Task.FromResult(0);
        //}
    }
}
