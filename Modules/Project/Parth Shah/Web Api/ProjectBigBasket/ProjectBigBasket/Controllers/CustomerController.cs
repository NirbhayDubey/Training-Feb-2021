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
    public class CustomerController : ControllerBase
    {


        private ICustomer Customer;

        public CustomerController(ICustomer customers)
        {
            Customer = customers;
        }

        // GET: api/Products
        [HttpGet]
        public IEnumerable<Customer> Getcustomers()
        {
            return Customer.GetAll();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<Customer> Getcustomers(string id)
        {

            return Customer.GetById(id);


        }

        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public IActionResult Putcustomers(int id, Customer customer)
        {

            Customer.Update(customer);
            return Ok(customer);

        }
        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754

        public IActionResult Postcustomers(Customer customer
            )
        {

            Customer.Create(customer);
            return Ok(customer);

        }


        [HttpDelete("{id}")]
        public IActionResult Deletecustomers(string id)
        {
            var pr = Customer.GetById(id);
            if (pr == null)
            {
                return NotFound();
            }



            Customer.Delete(pr);
            return NoContent();


        }
    }
}
