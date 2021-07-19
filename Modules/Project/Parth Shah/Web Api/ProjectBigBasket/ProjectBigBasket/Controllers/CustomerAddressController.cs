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
    public class CustomerAddressController : ControllerBase
    {
        private ICustAdd BbCustomerAddress;
        //its a view of customer address 
        public CustomerAddressController(ICustAdd custAdds)
        {
            BbCustomerAddress = custAdds;
        }

        // GET: api/Products
        [HttpGet]
        public IEnumerable<BbCustomerAddress> GetCustAdd()
        {
            return BbCustomerAddress.GetAll();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<BbCustomerAddress> GetCustAdd(string id)
        {

            return BbCustomerAddress.GetById(id);


        }

       


     

    }
}
