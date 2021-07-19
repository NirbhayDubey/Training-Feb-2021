using ProjectHotstar.Models;
using ProjectHotstar.Repository.IGenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectHotstar.Repository.GenericRepository
{
    public class PlanFeatureRepo : GenericRepository<PlanFeature>, IPlanFeature
    {
        public PlanFeatureRepo(HotstarContext context) : base(context)
        {

        }
    }
}
