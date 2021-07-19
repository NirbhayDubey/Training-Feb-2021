using StackOverFlow.Models;
using StackOverFlow.Repositories.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StackOverFlow.Repositories
{
    public class WhereUserLikeToWorkRepository : GenericRepository<WhereUserLikeToWork> , IWhereUserLikeToWorkRepository
    {
        public WhereUserLikeToWorkRepository(StackOverFlowContext context): base(context)
        {

        }
    }
}
