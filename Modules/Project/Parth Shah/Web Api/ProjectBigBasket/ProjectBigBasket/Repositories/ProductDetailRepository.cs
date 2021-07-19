using ProjectBigBasket.Interface;
using ProjectBigBasket.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBigBasket.Repositories
{
    public class ProductDetailRepository : GenericRepository<BbproductDetail>, IProductDetail
    {

        public ProductDetailRepository(BigBasketContext context) : base(context)
        {

        }
    }
}
