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
    [Authorize(Roles = UserRoles.User)] //only user can authenticate this
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {


        private ICity City;

        public CityController(ICity cities)
        {
            City = cities;
        }

        // GET: api/Products
        [HttpGet]
        public IEnumerable<City> GetCities()
        {
            return City.GetAll();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<City> GetCities(string id)
        {

            return City.GetById(id);


        }

        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public IActionResult PutCities(int id, City city)
        {

            City.Update(city);
            return Ok(city);

        }
        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754

        public IActionResult PostCities(City city
            )
        {

            City.Create(city);
            return Ok(city);

        }


        [HttpDelete("{id}")]
        public IActionResult DeleteCities(string id)
        {
            var pr = City.GetById(id);
            if (pr == null)
            {
                return NotFound();
            }



            City.Delete(pr);
            return NoContent();


        }
    }
}
