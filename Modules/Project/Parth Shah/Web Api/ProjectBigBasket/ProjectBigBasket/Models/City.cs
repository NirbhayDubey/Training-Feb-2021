using System;
using System.Collections.Generic;

#nullable disable

namespace ProjectBigBasket.Models
{
    public partial class City
    {
        public City()
        {
            Addresses = new HashSet<Address>();
        }

        public string CityId { get; set; }
        public string CountryId { get; set; }
        public string CityName { get; set; }

        public virtual Country Country { get; set; }
        public virtual ICollection<Address> Addresses { get; set; }
    }
}
