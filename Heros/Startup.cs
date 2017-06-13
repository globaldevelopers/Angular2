using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Heros.Startup))]
namespace Heros
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
