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
    public class CountryController : ControllerBase
    {


        private ICountry Country;

        public CountryController(ICountry countries)
        {
            Country = countries;
        }

        // GET: api/Products
        [HttpGet]
        public IEnumerable<Country> GetCountries()
        {
            return Country.GetAll();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<Country> Getcountries(string id)
        {

            return Country.GetById(id);


        }

        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public IActionResult Putcountries(int id, Country country)
        {

            Country.Update(country);
            return Ok(country);

        }
        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754

        public IActionResult Postcountries(Country country
            )
        {

            Country.Create(country);
            return Ok(country);

        }


        [HttpDelete("{id}")]
        public IActionResult Deletecountries(string id)
        {
            var pr = Country.GetById(id);
            if (pr == null)
            {
                return NotFound();
            }



            Country.Delete(pr);
            return NoContent();


        }
    }
}
