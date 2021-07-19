using System;
using System.Collections.Generic;

#nullable disable

namespace StackOverFlow.Models
{
    public partial class Badge
    {
        public Badge()
        {
            BadgesEarnedByUsers = new HashSet<BadgesEarnedByUser>();
        }

        public int BadgeId { get; set; }
        public string BadgeName { get; set; }
        public string BadgeCategory { get; set; }
        public string BadgeDescription { get; set; }
        public string BadgeType { get; set; }

        public virtual ICollection<BadgesEarnedByUser> BadgesEarnedByUsers { get; set; }
    }
}
