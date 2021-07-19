using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectBigBasket.Interface;
using ProjectBigBasket.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBigBasket.Controllers
{
    [Authorize]
    [Authorize(Roles = UserRoles.Admin)]
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerProductController : ControllerBase
    {

        private ICustProd BbCustomerProduct;
        //its a view of customer address 
        public CustomerProductController(ICustProd custProds)
        {
            BbCustomerProduct = custProds;
        }

        // GET: api/Products
        [HttpGet]
        public IEnumerable<BbCustomerProduct> GetCustAdd()
        {
            return BbCustomerProduct.GetAll();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<BbCustomerProduct> GetCustAdd(string id)
        {

            return BbCustomerProduct.GetById(id);


        }
    }
}
