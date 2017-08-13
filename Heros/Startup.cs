using System.IO;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Heros.Startup))]
namespace Heros
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            //app.Use(async (context, next) => {
            //    await next();

            //    if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
            //    {
            //        context.Request.Path = new PathString("/index.html"); // Put your Angular root page here 
            //        await next();
            //    }
            //});
            ConfigureAuth(app);
        }
    }
}
