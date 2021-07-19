using StackOverFlow.Models;
using StackOverFlow.Repositories.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StackOverFlow.Repositories
{
    public class TagRepository : GenericRepository<Tag>, ITagRepository
    {
        private StackOverFlowContext _cont;
        public TagRepository(StackOverFlowContext context) : base(context)
        {
            this._cont = context;
        }
        public List<Tag> getByQueId(int queId)
        {
            var tags = _cont.Tags.Where(t => t.QuestionId == queId).ToList();
            return tags;
        }
        public List<string> getDistinctTag()
        {
            var tags = _cont.Tags.Select(t => t.TagName).Distinct().ToList();
            return tags;
        }
    }
}
