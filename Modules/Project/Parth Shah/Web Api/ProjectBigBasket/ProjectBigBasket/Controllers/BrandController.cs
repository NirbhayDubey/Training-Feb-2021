using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectBigBasket.Interface;
using ProjectBigBasket.Models;

namespace ProjectBigBasket.Controllers
{
    [Authorize(Roles = UserRoles.User)] //only user can authenticate this
    [Authorize]

    [Route("api/[controller]")]
    [ApiController]
    public class BrandController : ControllerBase
    {
        private IBrand Brand;

        public BrandController(IBrand Brands)
        {
            Brand = Brands;
        }

        // GET: api/Products
        [HttpGet]
        public IEnumerable<Brand> GetBrands()
        {
            return Brand.GetAll();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<Brand> GetBrand(string id)
        {

            return Brand.GetById(id);


        }

        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public IActionResult PutBrand(int id, Brand brand)
        {

            Brand.Update(brand);
            return Ok(brand);

        }
        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754

        public IActionResult PostProducts(Brand brand)
        {

            Brand.Create(brand);
            return Ok(brand);

        }


        [HttpDelete("{id}")]
        public IActionResult DeleteBrand(string id)
        {
            var pr = Brand.GetById(id);
            if (pr == null)
            {
                return NotFound();
            }



            Brand.Delete(pr);
            return NoContent();


        }
    }
}
