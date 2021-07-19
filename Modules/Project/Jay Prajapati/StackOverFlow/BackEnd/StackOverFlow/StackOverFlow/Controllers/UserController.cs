using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using StackOverFlow.Code;
using StackOverFlow.Models;
using StackOverFlow.Models.Authentication;
using StackOverFlow.UnitOfWorkPattern;
using System;
using System.Data;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StackOverFlow.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly UserManager<ApplicationUser> userManager;
        
        public UserController(IUnitOfWork unitOfWork,UserManager<ApplicationUser> userManager )
        {
            this._unitOfWork = unitOfWork;
            this.userManager = userManager;
            
        }


        
        //[HttpGet] 
        //public IActionResult GetCurrentUserId() 
        //{
        //    var user = userManager.Users.First(x => x.UserName == User.Identity.Name);

        //    return Ok(user); 
        //}

        


        //GET: api/<UserController>
        [HttpGet]
        [Route("current")]
        public ActionResult GetCurrentUser()
        {
            var user = userManager.Users.First(x => x.UserName == User.Identity.Name);
            var appuser = _unitOfWork.AppUsers.Find(u => u.ApplicationUserId == user.Id).First();
            appuser.Bookmarks = _unitOfWork.Bookmark.Find(b => b.UserId == appuser.UserId).ToList();
            appuser.Questions = _unitOfWork.Question.Find(q => q.UserId == appuser.UserId).ToList();
            appuser.Answers = _unitOfWork.Answer.Find(a => a.UserId == appuser.UserId).ToList();
            appuser.WhereUserLikeToWorks = _unitOfWork.WhereUserLikeToWork.Find(a => a.UserId == appuser.UserId).ToList();
            appuser.BadgesEarnedByUsers = _unitOfWork.BadgesEarnedByUser.Find(a => a.UserId == appuser.UserId).ToList();
            appuser.Bookmarks = _unitOfWork.Bookmark.Find(a => a.UserId == appuser.UserId).ToList();
            appuser.JobProfiles = _unitOfWork.JobProfile.Find(a => a.UserId == appuser.UserId).ToList();

            return Ok(appuser);
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<AppUser> GetUser(int id)
        {
            var user = userManager.Users.First(x => x.UserName == User.Identity.Name);
            if (!_unitOfWork.AppUsers.ValidateUser(user.Id, id))
            {
                return Unauthorized();
            }
            AppUser myuser = _unitOfWork.AppUsers.GetById(id);
            myuser.Bookmarks = _unitOfWork.Bookmark.Find(b => b.UserId == id).ToList();
            myuser.Questions = _unitOfWork.Question.Find(q => q.UserId == id).ToList();
            myuser.Answers = _unitOfWork.Answer.Find(a => a.UserId == id).ToList();
            
            return myuser;
        }

        [HttpPut]
        [Route("{id}")]
        public ActionResult<AppUser> PostUser(int id, AppUser user)
        {
            var u = userManager.Users.AsNoTracking().First(x => x.UserName == User.Identity.Name);
            if (!_unitOfWork.AppUsers.ValidateUser(u.Id, id))
            {
                return Unauthorized();
            }
            var appUser = _unitOfWork.AppUsers.Find(a => a.ApplicationUserId == u.Id).First();
            appUser.FullName = user.FullName;
            appUser.Title = user.Title;
            appUser.Location = user.Location;
            appUser.GitHub = user.GitHub;
            appUser.Twitter = user.Twitter;
            appUser.AboutUser = user.AboutUser;
            _unitOfWork.AppUsers.UpdateUser(id, appUser);
            _unitOfWork.Complete();
            return user;
        }

        // bookmarkedQuestions
        [HttpGet]
        [Route("bookmarked/{id}")]
        public ActionResult GetBookmarkedQuestions(int id)
        {
            var u = userManager.Users.AsNoTracking().First(x => x.UserName == User.Identity.Name);
            if (!_unitOfWork.AppUsers.ValidateUser(u.Id, id))
            {
                return Unauthorized();
            }
            var bookmarked = _unitOfWork.Bookmark.GetBookmarkedDetails(id);
            return Ok(bookmarked);

        }

        


    }
}
