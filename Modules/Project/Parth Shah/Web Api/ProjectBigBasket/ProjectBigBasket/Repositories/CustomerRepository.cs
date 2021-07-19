using ProjectBigBasket.Interface;
using ProjectBigBasket.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBigBasket.Repositories
{
    public class CustomerRepository : GenericRepository<Customer>, ICustomer
    {

        public CustomerRepository(BigBasketContext context) : base(context)
        {

        }
    }
}
