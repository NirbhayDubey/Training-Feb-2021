using ProjectBigBasket.Interface;
using ProjectBigBasket.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBigBasket.Repositories
{
    public class ProductRepository : GenericRepository<Product>, IProduct
    {
        public ProductRepository(BigBasketContext context) : base(context)
        {

        }
    }
}
