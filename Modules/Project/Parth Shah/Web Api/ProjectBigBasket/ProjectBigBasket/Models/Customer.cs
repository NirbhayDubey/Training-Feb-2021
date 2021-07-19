using System;
using System.Collections.Generic;

#nullable disable

namespace ProjectBigBasket.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Sales = new HashSet<Sale>();
        }

        public string CustId { get; set; }
        public string CustName { get; set; }
        public string AddrId { get; set; }
        public int PhoneNo { get; set; }

        public virtual Address Addr { get; set; }
        public virtual ICollection<Sale> Sales { get; set; }
    }
}
