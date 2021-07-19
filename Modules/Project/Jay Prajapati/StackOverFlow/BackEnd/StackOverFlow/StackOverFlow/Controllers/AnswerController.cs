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
using System.Threading.Tasks;

namespace StackOverFlow.Controllers
{
    [Route("api/{userId}/[controller]/{queId}")]
    [ApiController]
    public class AnswerController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly UserManager<ApplicationUser> userManager;
        public AnswerController(IUnitOfWork unitOfWork, UserManager<ApplicationUser> userManager)
        {
            this._unitOfWork = unitOfWork;
            this.userManager = userManager;

        }

        [HttpGet]
        public ActionResult<IEnumerable<Answer>> GetAnswer(int queId)
        {
            //var user = userManager.Users.First(x => x.UserName == User.Identity.Name);
            //if (!_unitOfWork.AppUsers.ValidateUser(user.Id, userid))
            //{
            //    return Unauthorized();
            //}
            IEnumerable<Answer> ans = _unitOfWork.Answer.GetByQueId(queId);
            //Answer ans = _unitOfWork.Answer.GetById(queId);
            //_unitOfWork.Question.UpdateQuestion(queId, ans);
            //_unitOfWork.Complete();
            return Ok(ans);
        }


        [Authorize]
        [HttpPost]
        public ActionResult<Answer> PostAnswer(int userid,int queId, Answer ans)
        {
            var user = userManager.Users.First(x => x.UserName == User.Identity.Name);
            
            if (!_unitOfWork.AppUsers.ValidateUser(user.Id, userid))
            {
                return Unauthorized();
            }
            if (_unitOfWork.Question.GetById(queId) == null)
            {
                return BadRequest("Question Not Exists");
            }
            ans.UserId = userid;
            ans.QuestionId = queId;
            ans.Vote = 0;
            _unitOfWork.Answer.Add(ans);
            _unitOfWork.Complete();
            return ans;
        }


        [Authorize]
        [HttpPut]
        [Route("{ansId}")]
        public ActionResult PutAnswer(int userid, int ansId, int queId, Answer ans)
        {
            var user = userManager.Users.First(x => x.UserName == User.Identity.Name);
            if (!_unitOfWork.AppUsers.ValidateUser(user.Id, userid))
            {
                return Unauthorized();
            }
            if (_unitOfWork.Question.GetById(queId) == null)
            {
                return BadRequest("Question Not Exists");
            }
            var answer = _unitOfWork.Answer.Find(a => a.AnswerId == ansId).FirstOrDefault();
            answer.QuestionId = queId;
            answer.UserId = userid;
            answer.Answer1 = ans.Answer1;
            _unitOfWork.Answer.UpdateAnswer(ansId, answer);
            _unitOfWork.Complete();
            return Ok();

        }

        [Authorize]
        [HttpGet]
        [Route("UpVote/{ansId}")]
        public ActionResult GiveUpVoteToAns(int userId,int queId,int ansId)
        {
            var user = userManager.Users.First(x => x.UserName == User.Identity.Name);
            var voteDetail = _unitOfWork.Vote.Find(v => v.AppUserId == userId && v.AnswerId == ansId).Any();
            if (!_unitOfWork.AppUsers.ValidateUser(user.Id, userId))
            {
                return Ok(new Response()
                {
                    Status = "Fail",
                    Message = "You not valid user"
                });
            }
            if (_unitOfWork.Question.GetById(queId) == null)
            {
                return Ok(new Response() { Status = "Fail", Message = "Question not Exist" });
            }
            
            if(_unitOfWork.AppUsers.GetById(userId).Reputation < 50)
            {
                return Ok(new Response() { Status = "Fail", Message = "You must have atleast 50 Reputaion points to give vote" });
            }
            if (voteDetail)
            {
                return Ok(new Response() { Status = "Fail", Message = "You have already voted to this Answer" });
            }
            var ans = _unitOfWork.Answer.GetById(ansId);
            var appUser = _unitOfWork.AppUsers.Find(a => a.UserId == ans.UserId).FirstOrDefault();
            if (appUser.ApplicationUserId == user.Id)
            {
                return Ok(new Response() { Status = "Fail", Message = "You Cannot give Vote to Your Answer" });
            }
                
                ans.Vote += 1;
                _unitOfWork.Answer.UpdateAnswer(ansId, ans);
                var vote = new Vote();
                vote.AppUserId = userId;
                vote.AnswerId = ansId;
                vote.timeOfVote = DateTime.Now;
                _unitOfWork.Vote.Add(vote);

                
                appUser.Reputation += 1;
                _unitOfWork.AppUsers.UpdateUser(appUser.UserId, appUser);

                _unitOfWork.Complete();
                return Ok(ans);
            

        }

        [HttpGet]
        [Route("DownVote/{ansId}")]
        public ActionResult GiveDownVoteToAns(int userId, int queId, int ansId)
        {
            var user = userManager.Users.First(x => x.UserName == User.Identity.Name);
            var voteDetail = _unitOfWork.Vote.Find(v => v.AppUserId == userId && v.AnswerId == ansId).Any();
            if (!_unitOfWork.AppUsers.ValidateUser(user.Id, userId))
            {
                return Ok(new Response()
                {
                    Status = "Fail",
                    Message = "You not valid user"
                });
            }
            if (_unitOfWork.Question.GetById(queId) == null)
            {
                return Ok(new Response() { Status = "Fail", Message = "Quesion Not Exist" });
            }
            var ans = _unitOfWork.Answer.GetById(ansId);
            var appUser = _unitOfWork.AppUsers.Find(a => a.UserId == ans.UserId).FirstOrDefault();
            if (_unitOfWork.AppUsers.GetById(userId).Reputation < 50)
            {
                return Ok(new Response() { Status = "Fail", Message = "You must have atleast 50 Reputaion points to give vote" });
            }
            if (voteDetail)
            {
                return Ok(new Response() { Status = "Fail", Message = "You have already voted to this Answer" });
            }
            if (appUser.ApplicationUserId == user.Id)
            {
                return Ok(new Response() { Status = "Fail", Message = "You Cannot give Vote to Your Answer" });
            }
            ans.Vote -= 1;
            _unitOfWork.Answer.UpdateAnswer(ansId, ans);
            var vote = new Vote();
            vote.AppUserId = userId;
            vote.AnswerId = ansId;
            vote.timeOfVote = DateTime.Now;
            _unitOfWork.Vote.Add(vote);
            _unitOfWork.Complete();
            return Ok(ans);

        }


        
    }
}
