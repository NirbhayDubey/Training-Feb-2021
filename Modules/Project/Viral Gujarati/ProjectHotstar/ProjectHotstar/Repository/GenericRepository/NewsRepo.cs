using ProjectHotstar.Models;
using ProjectHotstar.Repository.IGenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectHotstar.Repository.GenericRepository
{
    public class NewsRepo : GenericRepository<News>, INews
    {
        public NewsRepo(HotstarContext context) : base(context)
        {

        }
    }
}
