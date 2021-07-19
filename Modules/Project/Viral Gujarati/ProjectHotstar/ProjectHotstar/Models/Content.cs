
using System;
using System.Collections.Generic;

#nullable disable

namespace ProjectHotstar.Models
{
    public partial class Content
    {
        public Content()
        {
            Movies = new HashSet<Movie>();
            News = new HashSet<News>();
            Sports = new HashSet<Sport>();
            Tvs = new HashSet<Tv>();
        }

        
        public int ContentId { get; set; }
        public string Title { get; set; }

        public string Url { get; set; }
        public string Episode { get; set; }
        public string Genre { get; set; }
        public DateTime? ReleaseDate { get; set; }
        public int? SuitableAge { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Movie> Movies { get; set; }
        public virtual ICollection<News> News { get; set; }
        public virtual ICollection<Sport> Sports { get; set; }
        public virtual ICollection<Tv> Tvs { get; set; }
    }
}
