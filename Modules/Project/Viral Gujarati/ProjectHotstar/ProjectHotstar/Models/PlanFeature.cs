using System;
using System.Collections.Generic;

#nullable disable

namespace ProjectHotstar.Models
{
    public partial class PlanFeature
    {
        public int Id { get; set; }
        public string Features { get; set; }
        public byte[] Free { get; set; }
        public byte[] Vip { get; set; }
        public byte[] Premium { get; set; }
        public int? PlanId { get; set; }

        public virtual Plan Plan { get; set; }
    }
}
