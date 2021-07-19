using StackOverFlow.Models;
using StackOverFlow.Repositories.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StackOverFlow.Repositories
{
    public class TechWantToWorkWithRepository : GenericRepository<TechWantToWorkWith>, ITechWantToWorkWithRepository
    {
        public TechWantToWorkWithRepository(StackOverFlowContext context) : base(context)
        {

        }
    }

}
