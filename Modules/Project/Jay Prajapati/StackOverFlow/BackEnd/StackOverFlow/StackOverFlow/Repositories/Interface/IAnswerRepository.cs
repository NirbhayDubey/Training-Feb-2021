using StackOverFlow.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StackOverFlow.Repositories.Interface
{
    public interface IAnswerRepository : IGenericRepository<Answer>
    {
        public void UpdateAnswer(int ansId, Answer ans);
        public IEnumerable<Answer> GetByQueId(int queId);
    }
}
