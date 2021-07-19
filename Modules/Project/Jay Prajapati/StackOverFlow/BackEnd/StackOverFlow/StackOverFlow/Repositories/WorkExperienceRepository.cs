using StackOverFlow.Models;
using StackOverFlow.Repositories.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StackOverFlow.Repositories
{
    public class WorkExperienceRepository : GenericRepository<WorkExperience> , IWorkExperienceRepository
    {
        public WorkExperienceRepository(StackOverFlowContext context) : base(context)
        {

        }
    }
}
