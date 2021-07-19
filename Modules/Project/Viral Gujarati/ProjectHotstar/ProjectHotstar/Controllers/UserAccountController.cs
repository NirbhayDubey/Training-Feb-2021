using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project_Hotstar.Models.Authentication;
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
    public class UserAccountController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly IUserAccount _userAccount;



        //IUserAccount _userAccount;

        public UserAccountController(IUserAccount userAccount, UserManager<ApplicationUser> _userManager, IUserAccount _userAccount)
        {
            this._userAccount = userAccount;
            this.userManager = _userManager;
            _userAccount = userAccount;

        }

        [HttpGet]
        [Route("current")]
        public ActionResult GetCurrentUser()
        {
            var user = userManager.Users.First(x => x.UserName == User.Identity.Name);
            var appUser = _userAccount.Find(u => u.ApplicationUserId == user.Id).First();

            return Ok(user);
        }


        [HttpGet]
        public IEnumerable<UserAccount> GetUserAccount()
        {
            return _userAccount.GetAll();
        }
        //[Authorize(Roles = UserRoles.CinemaAdmin)]
        [HttpGet("{​​​id}​​​")]
        public ActionResult<UserAccount> GetUserAccount(int id)
        {
            var userAccount = _userAccount.GetById(id);
            if (userAccount == null)
            {
                return NotFound();
            }
            return userAccount;
        }
        [HttpPut("{​​​id}​​​")]
        public ActionResult<UserAccount> PutUserAccount(int id, UserAccount userAccount)
        {
            try
            {
                _userAccount.Update(userAccount);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetUserAccount(id);
        }
        [HttpPost]
        public ActionResult<UserAccount> PostUserAccount(UserAccount userAccount)
        {
            try
            {
                _userAccount.Create(userAccount);
            }
            catch (DbUpdateException)
            {
                if (_userAccount.Any(e => e.CustomerId == userAccount.CustomerId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }
            return CreatedAtAction("GetUserAccount", new { id = userAccount.CustomerId }, userAccount);
        }
        //[Authorize(Roles = UserRoles.Admin)]
        [HttpDelete("{​​​id}​​​")]
        public IActionResult DeleteUserAccount(int id)
        {
            var userAccount = _userAccount.GetById(id);
            if (userAccount == null)
            {
                return NotFound();
            }
            _userAccount.Delete(userAccount);
            return  NoContent();
        }

    }
}


