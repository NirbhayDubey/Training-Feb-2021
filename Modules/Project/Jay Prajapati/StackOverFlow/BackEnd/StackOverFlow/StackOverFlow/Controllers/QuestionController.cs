using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using StackOverFlow.Models;
using StackOverFlow.Models.Authentication;
using StackOverFlow.UnitOfWorkPattern;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace StackOverFlow.Controllers
{
    [Authorize]
    [Route("api/{userid}/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly UserManager<ApplicationUser> userManager;
        public QuestionController(IUnitOfWork unitOfWork, UserManager<ApplicationUser> userManager)
        {
            this._unitOfWork = unitOfWork;
            this.userManager = userManager;

        }

        [HttpGet]
        [Route("{queId}")]
        public ActionResult<Question> GetQuestion(int userid,int queId)
        {
            //var user = userManager.Users.First(x => x.UserName == User.Identity.Name);
            //if (!_unitOfWork.AppUsers.ValidateUser(user.Id, userid))
            //{
            //    return Unauthorized();
            //}
            Question Que = _unitOfWork.Question.GetById(queId);
            Que.TotalViews += 1;
            _unitOfWork.Question.UpdateQuestion(queId, Que);
            _unitOfWork.Complete();
            return Que;
        }


        
        [HttpPost]
        public ActionResult<Question> PostQuestion(int userid, Question Que)
        {
            var user = userManager.Users.First(x => x.UserName == User.Identity.Name);
            if (!_unitOfWork.AppUsers.ValidateUser(user.Id, userid))
            {
                return Unauthorized();
            }
            Que.UserId = userid;
            Que.Vote = 0;
            Que.TotalViews = 0;
            Que.TimeOfAsk = DateTime.Now;
            _unitOfWork.Question.Add(Que);
            _unitOfWork.Complete();
            return Que;
        }


        
        [HttpPut]
        [Route("{queId}")]
        public ActionResult PutQuestion(int userid,int queId, Question que)
        {
            var user = userManager.Users.First(x => x.UserName == User.Identity.Name);
            if (!_unitOfWork.AppUsers.ValidateUser(user.Id, userid))
            {
                return Unauthorized();
            }
            if (!_unitOfWork.Question.ValidateUserQuestion(userid,queId))
            {
                return Unauthorized();
            }
            

            _unitOfWork.Question.UpdateQuestion(queId, que);
            _unitOfWork.Complete();
            return Ok();

        }

        
        [HttpGet]
        [Route("UpVote/{queId}")]
        public ActionResult GiveUpVoteToQue(int userid,int queId)
        {
            var user = userManager.Users.First(x => x.UserName == User.Identity.Name);
            
            var voteDetails = _unitOfWork.Vote.Find(u => u.AppUserId == userid && u.QuestionId == queId).Any();
            if (!_unitOfWork.AppUsers.ValidateUser(user.Id, userid))
            {
                return Ok(new Response() {
                    Status = "Fail",
                    Message = "You not valid user"});
            }
            if(_unitOfWork.AppUsers.GetById(userid).Reputation < 50)
            {
                return Ok(new Response() { Status = "Fail", Message = "You must have atleast 50 Reputaion points to give vote" });
            }
            if (voteDetails)
            {
                return Ok(new Response() { Status = "Fail", Message = "You have already Voted to this Question" });
            }
            
            Question que = _unitOfWork.Question.GetById(queId);
            var appUser = _unitOfWork.AppUsers.Find(a => a.UserId == que.UserId).FirstOrDefault();
            if (appUser.ApplicationUserId == user.Id)
            {
                return Ok(new Response() { Status = "Fail", Message = "You Cannot give Vote to Your Question" });
            }
            que.Vote += 1;
            _unitOfWork.Question.UpdateQuestion(queId, que);
            

            Vote vote = new Vote();
            vote.AppUserId = userid;
            vote.QuestionId = queId;
            vote.timeOfVote = DateTime.Now;
            _unitOfWork.Vote.Add(vote);

            
            appUser.Reputation += 1;
            _unitOfWork.AppUsers.UpdateUser(appUser.UserId, appUser);
            _unitOfWork.Complete();
            return Ok(que);
        }

        [HttpGet]
        [Route("DownVote/{queId}")]
        public ActionResult GiveDownVoteToQue(int userid, int queId)
        {
            var user = userManager.Users.First(x => x.UserName == User.Identity.Name);
            var voteDetails = _unitOfWork.Vote.Find(u => u.AppUserId == userid && u.QuestionId == queId).Any();
            if (!_unitOfWork.AppUsers.ValidateUser(user.Id, userid))
            {
                return Ok(new Response()
                {
                    Status = "Fail",
                    Message = "You not valid user"
                });
            }
            if (_unitOfWork.AppUsers.GetById(userid).Reputation < 50)
            {
                return Ok(new Response() { Status = "Fail", Message = "You must have atleast 50 Reputaion points to give vote" });
            }
            if (voteDetails)
            {
                return Ok(new Response() { Status = "Fail", Message = "You have already Voted to this Question" });
            }
            Question que = _unitOfWork.Question.GetById(queId);
            var appUser = _unitOfWork.AppUsers.Find(a => a.UserId == que.UserId).FirstOrDefault();
            if (appUser.ApplicationUserId == user.Id)
            {
                return Ok(new Response() { Status = "Fail", Message = "You Cannot give Vote to Your Question" });
            }
            que.Vote -= 1;
            _unitOfWork.Question.UpdateQuestion(queId, que);
            Vote vote = new Vote();
            vote.AppUserId = userid;
            vote.QuestionId = queId;
            vote.timeOfVote = DateTime.Now;
            _unitOfWork.Vote.Add(vote);
            _unitOfWork.Complete();
            return Ok(que);
        }


        [HttpGet]
        [Route("Bookmark/{queId}")]
        public ActionResult BookmarkQuestion(int userid, int queId)
        {
            var user = userManager.Users.First(x => x.UserName == User.Identity.Name);
            if (!_unitOfWork.AppUsers.ValidateUser(user.Id, userid))
            {
                return Ok(new Response()
                {
                    Status = "Fail",
                    Message = "You not valid user"
                });
            }
            if (_unitOfWork.AppUsers.GetById(userid).Reputation < 50)
            {
                return Ok(new Response() { Status = "Fail", Message = "You must have atleast 50 Reputaion points to give vote" });
            }
            Question que = _unitOfWork.Question.GetById(queId);
            var bookmark = new Bookmark();
            bookmark.UserId = userid;
            bookmark.QuestionId = queId;
            var isBookmarked = _unitOfWork.Bookmark.Find(b => (b.QuestionId == queId && b.UserId == userid)).FirstOrDefault(); ;
            if (isBookmarked != null)
            {
                return Ok(new Response() { Status = "Fail", Message = "This Question is already bookmarked for this user" });
            }
            _unitOfWork.Bookmark.Add(bookmark);
            _unitOfWork.Complete();
            return Ok(bookmark);

        }


        


    }
}
