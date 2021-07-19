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
    //[Authorize(Roles = UserRoles.Admin)]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductDetailController : ControllerBase
    {


        private IProductDetail BbproductDetail;
        //its a view of customer address 
        public ProductDetailController(IProductDetail prodDetails)
        {
            BbproductDetail = prodDetails;
        }

        // GET: api/Products
        [HttpGet]
        public IEnumerable<BbproductDetail> GetProdDetail()
        {
            return BbproductDetail.GetAll();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<BbproductDetail> GetProductDetail(string id)
        {

            return BbproductDetail.GetById(id);


        }
    }
}
