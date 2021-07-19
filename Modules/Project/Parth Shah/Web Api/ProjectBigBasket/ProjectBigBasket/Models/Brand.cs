using System;
using System.Collections.Generic;

#nullable disable

namespace ProjectBigBasket.Models
{
    public partial class Brand
    {
        public Brand()
        {
            Products = new HashSet<Product>();
        }

        public string BrandId { get; set; }
        public string BrandName { get; set; }
        public string CategoryId { get; set; }

        public virtual Category Category { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}
