using System;
using System.Collections.Generic;

#nullable disable

namespace StackOverFlow.Models
{
    public partial class Education
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public string Degree { get; set; }
        public string University { get; set; }
        public int? FromYear { get; set; }
        public int? ToYear { get; set; }
        public string Summary { get; set; }

        public virtual AppUser User { get; set; }
    }
}
