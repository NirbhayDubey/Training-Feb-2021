using System;
using System.Collections.Generic;

#nullable disable

namespace StackOverFlow.Models
{
    public partial class TechnologiesUsedAsStudent
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public string Technology { get; set; }

        public virtual AppUser User { get; set; }
    }
}
