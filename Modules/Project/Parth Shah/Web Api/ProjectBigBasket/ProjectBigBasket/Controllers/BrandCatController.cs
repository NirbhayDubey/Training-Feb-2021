using Microsoft.AspNetCore.Mvc;
using ProjectBigBasket.Interface;
using ProjectBigBasket.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProjectBigBasket.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandCatController : ControllerBase
    {
        // GET: api/<BrandCatController>
        private IBrandCat BbBrandCat;

        public BrandCatController(IBrandCat cbDetails)
        {
            BbBrandCat = cbDetails;
        }

        [HttpGet]
        public IEnumerable<BbBrandCat> GetcbDetail()
        {
            return BbBrandCat.GetAll();
        }

    }
}
