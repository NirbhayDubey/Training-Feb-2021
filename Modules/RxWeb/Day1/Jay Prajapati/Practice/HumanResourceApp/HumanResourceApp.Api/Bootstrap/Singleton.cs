using HumanResourceApp.BoundedContext.Singleton;
using HumanResourceApp.Infrastructure.Singleton;
using Microsoft.Extensions.DependencyInjection;
using RxWeb.Core.Data;

namespace HumanResourceApp.Api.Bootstrap
{
    public static class Singleton
    {
        public static void AddSingletonService(this IServiceCollection serviceCollection)
        {
            #region Singleton
            serviceCollection.AddSingleton<ITenantDbConnectionInfo, TenantDbConnectionInfo>();
            serviceCollection.AddSingleton(typeof(UserAccessConfigInfo));
            #endregion Singleton
        }

    }
}




