using ProjectBigBasket.Interface;
using ProjectBigBasket.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBigBasket.Repositories
{
    public class CustomerProductRepository : GenericRepository<BbCustomerProduct>, ICustProd
    {

        public CustomerProductRepository(BigBasketContext context) : base(context)
        {

        }
    }
}
