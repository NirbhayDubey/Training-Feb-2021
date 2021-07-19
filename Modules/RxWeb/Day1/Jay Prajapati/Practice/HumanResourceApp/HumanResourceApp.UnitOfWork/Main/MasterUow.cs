using RxWeb.Core.Data;
using HumanResourceApp.BoundedContext.Main;

namespace HumanResourceApp.UnitOfWork.Main
{
    public class MasterUow : BaseUow, IMasterUow
    {
        public MasterUow(IMasterContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IMasterUow : ICoreUnitOfWork { }
}


