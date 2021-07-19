using System;
using System.Collections.Generic;

#nullable disable

namespace StackOverFlow.Models
{
    public partial class BadgesEarnedByUser
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public int? BadgeId { get; set; }
        public DateTime? DateOfEarned { get; set; }

        public virtual Badge Badge { get; set; }
        public virtual AppUser User { get; set; }
    }
}
