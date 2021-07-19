using ProjectBigBasket.Interface;
using ProjectBigBasket.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBigBasket.Repositories
{
    public class BrandRepository : GenericRepository<Brand>, IBrand
    {

        public BrandRepository(BigBasketContext context) : base(context)
        {

        }
    }
}
