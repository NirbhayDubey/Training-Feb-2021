using System;
using System.Collections.Generic;

#nullable disable

namespace ProjectHotstar.Models
{
    public partial class Sport
    {
        public int SportsId { get; set; }
        public int? ContentId { get; set; }
#nullable enable

        public string? SportsImage { get; set; }

#nullable disable

        public string SportsType { get; set; }
        public string SportsTitle { get; set; }

        public virtual Content Content { get; set; }
    }
}
