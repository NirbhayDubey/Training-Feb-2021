using System;
using System.Collections.Generic;

#nullable disable

namespace ProjectBigBasket.Models
{
    public partial class Address
    {
        public Address()
        {
            Customers = new HashSet<Customer>();
        }

        public string AddrId { get; set; }
        public string Address1 { get; set; }
        public string CityId { get; set; }

        public virtual City City { get; set; }
        public virtual ICollection<Customer> Customers { get; set; }
    }
}
