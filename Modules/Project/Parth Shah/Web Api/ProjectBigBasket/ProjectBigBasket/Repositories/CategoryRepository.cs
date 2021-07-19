using ProjectBigBasket.Interface;
using ProjectBigBasket.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBigBasket.Repositories
{
    public class CategoryRepository : GenericRepository<Category>, ICategory
    {

        public CategoryRepository(BigBasketContext context) : base(context)
        {

        }
    }
}
