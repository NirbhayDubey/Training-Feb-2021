using System;
using System.Collections.Generic;

#nullable disable

namespace ProjectBigBasket.Models
{
    public partial class Cart
    {
        public Cart()
        {
            Products = new HashSet<Product>();
        }

        public string CartId { get; set; }
        public TimeSpan Time { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}
