using Abp.Webhooks;
using AniListAuth.Common;
using AniListAuth.Models;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.Owin.Security.OpenIdConnect;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics;
using System.Net;
using System.Text;
using static System.Net.Mime.MediaTypeNames;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Microsoft.Owin.Security.Notifications;
using System.Security.Claims;
using System.Security.Principal;

namespace AniListAuth.Controllers {
    public class HomeController : Controller {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger) {
            _logger = logger;
        }
        public IActionResult Index() {
            return View();
        }
        [HttpPost]
        public IActionResult Authenticate() {
            return RedirectPermanent(AnilisyHelper.GetOauthUri());
        }
        public async Task<IActionResult> OauthCallback(string code, string error) {
            //try {
            //    if (!string.IsNullOrEmpty(code)) {
            //        var token = await AnilisyHelper.GetTokenByCode(code);
            //        if (token != null) {
            //            ViewBag.AccessToken = token.access_token;
            //            ViewBag.ExpiresIn = token.expires_in;
            //            Debug.WriteLine("token", token.access_token);

            //        }
            //    }
            //    if (!string.IsNullOrEmpty(error)) {
            //        ViewBag.Error = "Error: " + error;
            //    }
            //} catch (Exception ex) {
            //    throw ex;
            //}

            ////Uri domain = new Uri(Request.GetDisplayUrl());
            ////return new Uri(domain.Scheme + "://" + domain.Host + (domain.IsDefaultPort ? "" : ":" + domain. ));
            //return View();
            
            Uri domain = new Uri(Request.GetDisplayUrl());
            var response = Request.Path; // (domain.Scheme + "://" + domain.Host + (domain.IsDefaultPort ? "" : ":" + domain.Segments));
            //response.Segments.Last();
            //response.GetHashCode();

            return Ok(response);
        }


    



        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error() {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }



        string client_id = "10135", redirect_uri = "https://localhost:44341", response_type = "token";
        public IActionResult AuthAniList() {
            string url = "https://anilist.co/api/v2/oauth/authorize?client_id=" + client_id + "&response_type=" + response_type;
            Debug.WriteLine(url);
            HttpWebRequest webReq = (HttpWebRequest)WebRequest.Create(string.Format(url));
            webReq.Method = "GET";
            HttpWebResponse webResponse = (HttpWebResponse)webReq.GetResponse();
            Debug.WriteLine("URL: ", url);
            //Uri domain = new Uri(Request.GetDisplayUrl());
            //return new Uri(domain.Scheme + "://" + domain.Host + (domain.IsDefaultPort ? "" : ":" + domain.PathAndQuery));

            return Redirect(url);
        }

        //public static async Task<string> tokenCode(string code) {
        //    var postData = new {
        //        code = code,
        //        client_id = ClientId,
        //    };
        //    using(var http = new HttpClient()) {
        //        StringContent content = new StringContent(JsonConvert.SerializeObject(postData),
        //            Encoding.UTF8,"application/json");
        //        using (var res = await http.PostAsJsonAsync("token", content)) {
        //            if()
        //        } ;

        //    }
        //}
        public void getToken() {
            var url = "https://graphql.anilist.co";

        }
        public Uri BuildUrl() {
            Uri domain = new Uri(Request.GetDisplayUrl());
            return new Uri(domain.Scheme + "://" + domain.Host + (domain.IsDefaultPort ? "" : ":" + domain.AbsolutePath));
        }
    }
}