using ProjectBigBasket.Interface;
using ProjectBigBasket.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBigBasket.Repositories
{
    public class CustomerAddressRepository : GenericRepository<BbCustomerAddress>, ICustAdd
    {

        public CustomerAddressRepository(BigBasketContext context) : base(context)
        {

        }
    }
}
