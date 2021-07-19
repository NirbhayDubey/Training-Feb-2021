using StackOverFlow.Models;
using StackOverFlow.Repositories.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StackOverFlow.Repositories
{
    public class VwUserQADetailRepository : GenericRepository<VwUserQadetail> , IVwUserQADetailRepository
    {
        public VwUserQADetailRepository(StackOverFlowContext context) : base(context)
        {

        }
    }
}
