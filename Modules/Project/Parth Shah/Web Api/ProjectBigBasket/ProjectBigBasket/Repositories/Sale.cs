using ProjectBigBasket.Interface;
using ProjectBigBasket.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBigBasket.Repositories
{
    public class SaleRepository : GenericRepository<Sale>, ISale
    {
        public SaleRepository(BigBasketContext context) : base(context)
        {

        }
    }
}
