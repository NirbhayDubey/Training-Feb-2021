using System;
using System.Collections.Generic;

#nullable disable

namespace ProjectHotstar.Models
{
    public partial class Plan
    {
        public Plan()
        {
            PlanFeatures = new HashSet<PlanFeature>();
            Subscriptions = new HashSet<Subscription>();
        }

        public int PlanId { get; set; }
        public string PlanName { get; set; }
        public string SubscriptionPlan { get; set; }
        public decimal Price { get; set; }

        public virtual ICollection<PlanFeature> PlanFeatures { get; set; }
        public virtual ICollection<Subscription> Subscriptions { get; set; }
    }
}
