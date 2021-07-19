using System;
using System.Collections.Generic;

#nullable disable

namespace ProjectBigBasket.Models
{
    public partial class Product
    {
        public Product()
        {
            Sales = new HashSet<Sale>();
        }

        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public string BrandId { get; set; }
        public string CartId { get; set; }
        public decimal ProductPrice { get; set; }

        public virtual Brand Brand { get; set; }
        public virtual Cart Cart { get; set; }
        public virtual ICollection<Sale> Sales { get; set; }
    }
}
