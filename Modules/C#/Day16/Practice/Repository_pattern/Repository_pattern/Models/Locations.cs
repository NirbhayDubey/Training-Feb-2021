using System;
using System.Collections.Generic;

namespace Repository_pattern.Models
{
    public partial class Locations
    {
        public decimal LocationsId { get; set; }
        public string StreetAddress { get; set; }
        public string PostalCode { get; set; }
        public string City { get; set; }
        public string StateProvince { get; set; }
        public string CountryId { get; set; }
    }
}
