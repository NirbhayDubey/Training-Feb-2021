using StackOverFlow.Models;
using StackOverFlow.Repositories.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StackOverFlow.Repositories
{
    public class VoteRepository : GenericRepository<Vote>, IVoteRepository
    {
        public VoteRepository(StackOverFlowContext context) : base(context)
        {

        }
    }
}
