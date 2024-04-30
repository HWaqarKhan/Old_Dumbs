using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.Net.Http.Headers;
using System.Text;

namespace LondonAPI.Infrastructure {
    public class IonOutputFormatter : TextOutputFormatter {
        private readonly NewtonsoftJsonOutputFormatter _OutputFormatter;
        public IonOutputFormatter(NewtonsoftJsonOutputFormatter OutputFormatter) {
            if (_OutputFormatter==null) throw new ArgumentNullException(nameof(_OutputFormatter));

            _OutputFormatter = OutputFormatter;

            SupportedMediaTypes.Add(new MediaTypeHeaderValue("application/ion+json"));
            SupportedEncodings.Add(Encoding.UTF8);
        }
        public override Task WriteResponseBodyAsync(OutputFormatterWriteContext context, Encoding selectedEncoding) {
             return _OutputFormatter.WriteResponseBodyAsync(context, selectedEncoding);
        }
    }
}
