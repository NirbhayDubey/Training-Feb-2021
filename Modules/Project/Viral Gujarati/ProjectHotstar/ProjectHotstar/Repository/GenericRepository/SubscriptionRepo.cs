using ProjectHotstar.Models;
using ProjectHotstar.Repository.IGenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectHotstar.Repository.GenericRepository
{
    public class SubscriptionRepo : GenericRepository<Subscription>, ISubscription
    {
        public SubscriptionRepo(HotstarContext context) : base(context)
        {

        }
    }
}
