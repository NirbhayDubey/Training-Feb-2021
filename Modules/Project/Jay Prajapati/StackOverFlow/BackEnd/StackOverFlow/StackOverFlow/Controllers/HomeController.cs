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
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly UserManager<ApplicationUser> _userManager;
        public HomeController(IUnitOfWork unitOfWork, UserManager<ApplicationUser> userManager)
        {
            this._unitOfWork = unitOfWork;
            this._userManager = userManager;
        }

        //[HttpGet]
        //[Route("isLoggedIn")]
        //public Boolean IsLoggedIn()
        //{
        //    var user = _userManager.Users.FirstOrDefault(x => x.UserName == User.Identity.Name)!;
        //    if (user != null)
        //    {
        //        return true;
        //    }
        //    return false;

        //}

        // Users
        [HttpGet]
        [Route("allUsers")]
        public ActionResult GetAllUsers()
        {
            var users = _unitOfWork.AppUsers.GetAll();
            return Ok(users);
        }

        [HttpGet]
        [Route("user/{userId}")]
        public ActionResult GetUserById(int userId)
        {
            var user = _unitOfWork.AppUsers.GetById(userId);
            user.Bookmarks = _unitOfWork.Bookmark.Find(b => b.UserId == userId).ToList();
            user.Questions = _unitOfWork.Question.Find(q => q.UserId == userId).ToList();
            user.Answers = _unitOfWork.Answer.Find(a => a.UserId == userId).ToList();
            user.BadgesEarnedByUsers = _unitOfWork.BadgesEarnedByUser.Find(a => a.UserId == userId).ToList();
            
            
            user.ProfileViews += 1;
            _unitOfWork.AppUsers.UpdateUser(user.UserId,user);
            _unitOfWork.Complete();
            return Ok(user);
        }

        [HttpGet]
        [Route("SearchUser/{user}")]
        public ActionResult SearchUser(string user)
        {
            var users = _unitOfWork.AppUsers.SearchUser(user);
            return Ok(users);
        }

        //Questions

        [HttpGet]
        [Route("topQuestions")]
        public ActionResult<IEnumerable<VwQuestionDetail>> GetTopQuestion()
        {
            IEnumerable<VwQuestionDetail> Que = _unitOfWork.VwQuestionDetail.GetAll()
                                                           .OrderBy(q => q.VotesForQuestion);
            return Ok(Que);
        }


        [HttpGet]
        [Route("allQuestions")]
        public ActionResult GetAllQuestion()
        {
            var Que = _unitOfWork.Question.GetAllQuestions();
            return Ok(Que);
        }

        [HttpGet]
        [Route("QADetails")]
        public ActionResult GetQADetails()
        {
            return Ok();
        }

        [HttpGet]
        [Route("question/{queId}")]
        public ActionResult<Question> GetQuestion(int queId)
        {
            
            Question Que = _unitOfWork.Question.GetById(queId);
            Que.TotalViews += 1;
            _unitOfWork.Question.UpdateQuestion(queId, Que);
            _unitOfWork.Complete();
            Que.Answers = _unitOfWork.Answer.GetByQueId(queId).ToList();
            Que.Tags = _unitOfWork.Tag.getByQueId(queId);
            return Ok(Que);
        }

        [HttpGet]
        [Route("SearchQuetsion/{Que}")]
        public ActionResult SearchQuestion(string Que)
        {
            var ques = _unitOfWork.Question.FindQuestion(Que);
            return Ok(ques);
        }

        


        // Answers
        [HttpGet]
        [Route("answers")]
        public ActionResult<IEnumerable<Answer>> GetAnswer(int queId)
        {
            
            IEnumerable<Answer> ans = _unitOfWork.Answer.GetByQueId(queId);
            
            return Ok(ans);
        }

        //Tags
        [HttpGet]
        [Route("allTags")]
        public ActionResult GerAllTags()
        {
            var tags = _unitOfWork.Tag.getDistinctTag();
   
            return Ok(tags);
        }


    }
}
