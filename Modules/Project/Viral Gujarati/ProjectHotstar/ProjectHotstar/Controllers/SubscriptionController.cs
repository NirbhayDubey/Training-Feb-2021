using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectHotstar.Models;
using ProjectHotstar.Repository.IGenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectHotstar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscriptionController : ControllerBase
    {
        ISubscription _Subscription;

        private readonly HotstarContext _context;

        public SubscriptionController(ISubscription subscription, HotstarContext _context)
        {
            this._Subscription = subscription;
            this._context = _context;
        }

        [HttpGet]
        public IEnumerable<Subscription> GetSubscriptions()
        {
            return _Subscription.GetAll();
        }
        //[Authorize(Roles = UserRoles.CinemaAdmin)]
        [HttpGet("{​​​id}​​​")]
        public ActionResult<Subscription> GetSubscriptions(int id)
        {
            var subscription = _Subscription.GetById(id);
            if (subscription == null)
            {
                return NotFound();
            }
            return subscription;
        }
        [HttpPut("{​​​id}​​​")]
        public ActionResult<Subscription> PutContent(int id, Subscription subscription)
        {
            try
            {
                _Subscription.Update(subscription);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetSubscriptions(id);
        }


        [HttpPost]
        public ActionResult creates([FromBody] Subscription subscription)
        {
            var checksubscription = _context.Subscriptions.Where(s => s.SubscriptionId == subscription.SubscriptionId).Any();
            if (!checksubscription)
            {
                _Subscription.Create(subscription);
                Subscription addedsubscription = _context.Subscriptions.ToList().Last();
                return Ok(addedsubscription.SubscriptionId);

            }
            //else
            //{
                return Ok("Subscription is already exists...");
                            //}
        }

        //[HttpPost]
        //[Route("{customerId}/{planId}")]
        //public ActionResult<Subscription> PostSubscription(int customerId, int planId)
        //{
        //    var subscription = new Subscription();

        //    try
        //    {
        //        subscription.CustomerId = customerId;
        //        subscription.PlanId = planId;
        //        subscription.DateOfSubscription = DateTime.Now;


        //        _Subscription.Create(subscription);
        //    }
        //    catch (DbUpdateException)
        //    {
        //        if (_Subscription.Any(e => e.SubscriptionId == subscription.SubscriptionId))
        //        {
        //            return Conflict();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }
        //    return CreatedAtAction("GetSubscription", new { id = subscription.SubscriptionId }, subscription);
        //}


        //[Authorize(Roles = UserRoles.Admin)]
        [HttpDelete("{​​​id}​​​")]
        public IActionResult DeleteSubscription(int id)
        {
            var subscription = _Subscription.GetById(id);
            if (subscription == null)
            {
                return NotFound();
            }
            _Subscription.Delete(subscription);
            return NoContent();
        }

    }
}


