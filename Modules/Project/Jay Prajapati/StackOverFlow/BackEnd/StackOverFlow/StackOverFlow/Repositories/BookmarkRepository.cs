using StackOverFlow.Models;
using StackOverFlow.Repositories.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StackOverFlow.Repositories
{
    public class BookmarkRepository : GenericRepository<Bookmark> , IBookmarkRepository
    {
        private StackOverFlowContext _cont;
        public BookmarkRepository(StackOverFlowContext context) : base(context)
        {
            this._cont = context;
        }


        public IList<Question> GetBookmarkedDetails(int userId)
        {
            var bookmark = (from b in _cont.Bookmarks
                            join q in _cont.Questions
                            on b.QuestionId equals q.QuestionId
                            where b.UserId == userId
                            select q).ToList();
            return bookmark;
        }

    }
}
