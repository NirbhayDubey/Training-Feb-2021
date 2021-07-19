using System;
using System.Collections.Generic;

#nullable disable

namespace ProjectHotstar.Models
{
    public partial class Tv
    {
        public int Tvid { get; set; }
        public int? ContentId { get; set; }
        public string Title { get; set; }
#nullable enable

        public string? TvImage { get; set; }

#nullable disable

        public string ChannelName { get; set; }
        public string ChannelLanguage { get; set; }

        public virtual Content Content { get; set; }
    }
}
