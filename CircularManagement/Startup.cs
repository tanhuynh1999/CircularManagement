using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CircularManagement.Startup))]
namespace CircularManagement
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
