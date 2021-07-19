#region Namespace
using HumanResourceApp.BoundedContext.Main;
using HumanResourceApp.Infrastructure.Security;
using HumanResourceApp.UnitOfWork.DbEntityAudit;
using HumanResourceApp.UnitOfWork.Main;
using Microsoft.Extensions.DependencyInjection;
using RxWeb.Core;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data;
using RxWeb.Core.Security;

#endregion Namespace



namespace HumanResourceApp.Api.Bootstrap
{
    public static class ScopedExtension
    {

        public static void AddScopedService(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped<IRepositoryProvider, RepositoryProvider>();
            serviceCollection.AddScoped<ITokenAuthorizer, TokenAuthorizer>();
            serviceCollection.AddScoped<IModelValidation, ModelValidation>();
            serviceCollection.AddScoped<IAuditLog, AuditLog>();
            serviceCollection.AddScoped<IApplicationTokenProvider, ApplicationTokenProvider>();
            serviceCollection.AddScoped(typeof(IDbContextManager<>), typeof(DbContextManager<>));

            #region ContextService

            serviceCollection.AddScoped<ILoginContext, LoginContext>();
            serviceCollection.AddScoped<ILoginUow, LoginUow>();
                        serviceCollection.AddScoped<IMasterContext, MasterContext>();
            serviceCollection.AddScoped<IMasterUow, MasterUow>();
            #endregion ContextService




            #region DomainService

            #endregion DomainService
        }
    }
}




