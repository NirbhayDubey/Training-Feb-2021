using System;
using System.Collections.Generic;

#nullable disable

namespace StackOverFlow.Models
{
    public partial class TechnologiesUsedByUserInJob
    {
        public int? UserId { get; set; }
        public string Technologies { get; set; }

        public virtual AppUser User { get; set; }
    }
}
