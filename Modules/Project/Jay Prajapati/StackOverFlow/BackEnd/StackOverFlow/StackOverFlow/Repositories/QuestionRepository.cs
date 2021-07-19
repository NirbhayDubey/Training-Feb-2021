using Microsoft.EntityFrameworkCore;
using StackOverFlow.Models;
using StackOverFlow.Repositories.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace StackOverFlow.Repositories
{
    public class QuestionRepository : GenericRepository<Question>, IQuestionRepository
    {
        private readonly StackOverFlowContext context;
        public QuestionRepository(StackOverFlowContext context) : base(context)
        {
            this.context = context;
        }

        public void UpdateQuestion(int QueId, Question Que)
        {
            Que.QuestionId = QueId;
            _context.Update(Que);
        }

        public bool ValidateUserQuestion(int userId, int queId)
        {
            var Que = _context.Questions.AsNoTracking().Where(q=>q.QuestionId == queId).ToList()[0];
            
            if (Que == null || Que.UserId != userId)
            {
                return false;
            }
                return true;
        }

        public IEnumerable<Question> GetAllQuestions()
        {
            var que = _context.Questions.Include(a => a.Answers).Include(t => t.Tags)
                .AsEnumerable();
            return que;
        }


        public IEnumerable<object> GetQADetail()
        {
            var qa = _context.Questions.Include(a => a.Answers).Include(t => t.Tags).AsEnumerable();
            return qa;
        }
        public IEnumerable<object> GetQADetailById()
        {
            return null;
        }

        public IEnumerable<object> FindQuestion(string quesPart)
        {
            var questions = context.Questions.Where(q => q.Question1.Contains(quesPart.Trim())).AsEnumerable();
            return questions;
        }

    }
}
