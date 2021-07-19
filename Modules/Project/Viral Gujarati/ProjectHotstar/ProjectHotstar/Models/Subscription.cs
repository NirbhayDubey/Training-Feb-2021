using System;
using System.Collections.Generic;

#nullable disable

namespace ProjectHotstar.Models
{
    public partial class Subscription
    {
        public int SubscriptionId { get; set; }
        public int? CustomerId { get; set; }
        public int? PlanId { get; set; }
        public DateTime? DateOfSubscription { get; set; }
        public DateTime? ValidThrough { get; set; }

        public virtual UserAccount Customer { get; set; }
        public virtual Plan Plan { get; set; }
    }
}
