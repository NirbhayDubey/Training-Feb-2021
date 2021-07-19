using System;
using System.Collections.Generic;

#nullable disable

namespace ProjectBigBasket.Models
{
    public partial class Category
    {
        public Category()
        {
            Brands = new HashSet<Brand>();
        }

        public string CategoryId { get; set; }
        public string CategoryName { get; set; }

        public virtual ICollection<Brand> Brands { get; set; }
    }
}
