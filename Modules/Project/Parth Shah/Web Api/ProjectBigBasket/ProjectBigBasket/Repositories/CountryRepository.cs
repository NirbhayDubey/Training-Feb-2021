using ProjectBigBasket.Interface;
using ProjectBigBasket.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBigBasket.Repositories
{
    public class CountryRepository : GenericRepository<Country>, ICountry
    {

        public CountryRepository(BigBasketContext context) : base(context)
        {

        }
    }
}
