using StackOverFlow.Models;
using StackOverFlow.Repositories.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StackOverFlow.Repositories
{
    public class AnswerRepository : GenericRepository<Answer> , IAnswerRepository
    {
        private readonly StackOverFlowContext context;
        public AnswerRepository(StackOverFlowContext context) : base(context)
        {
            this.context = context;
        }

        public void UpdateAnswer(int ansId, Answer ans)
        {
            ans.AnswerId = ansId;
            this.context.Answers.Update(ans);
        }

        public IEnumerable<Answer> GetByQueId(int queId)
        {
            var que =  this.context.Answers.Where(q => q.QuestionId == queId).AsEnumerable();
            return que;
        }
    }
}
