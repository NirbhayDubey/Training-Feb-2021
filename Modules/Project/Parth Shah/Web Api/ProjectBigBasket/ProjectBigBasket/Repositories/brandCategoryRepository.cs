using ProjectBigBasket.Interface;
using ProjectBigBasket.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBigBasket.Repositories
{
    public class brandCategoryRepository : GenericRepository<BbBrandCat>, IBrandCat
    {

        public brandCategoryRepository(BigBasketContext context) : base(context)
        {

        }
    }
}

