using ProjectBigBasket.Interface;
using ProjectBigBasket.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBigBasket.Repositories
{
    public class CityRepository : GenericRepository<City>, ICity
    {

        public CityRepository(BigBasketContext context) : base(context)
        {

        }
    }
}
