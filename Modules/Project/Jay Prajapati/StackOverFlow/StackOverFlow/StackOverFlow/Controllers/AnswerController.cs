﻿using Microsoft.AspNetCore.Authorization;
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
        public ActionResult<List<Answer>> GetAnswer(int queId)
        {
            //var user = userManager.Users.First(x => x.UserName == User.Identity.Name);
            //if (!_unitOfWork.AppUsers.ValidateUser(user.Id, userid))
            //{
            //    return Unauthorized();
            //}
            var ans = _unitOfWork.Answer.GetByQueId(queId);
            //Answer ans = _unitOfWork.Answer.GetById(queId);
            //_unitOfWork.Question.UpdateQuestion(queId, ans);
            //_unitOfWork.Complete();
            return ans;
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
        public ActionResult PutQuestion(int userid, int ansId, int queId, Answer ans)
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
            _unitOfWork.Answer.UpdateAnswer(ansId, ans);
            _unitOfWork.Complete();
            return Ok();

        }
    }
}
