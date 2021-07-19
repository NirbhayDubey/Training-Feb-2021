using System;
using System.Collections.Generic;

namespace Repository_pattern.Models
{
    public partial class Countries
    {
        public string CountriesId { get; set; }
        public string CountryName { get; set; }
        public decimal? RegionId { get; set; }
    }
}
