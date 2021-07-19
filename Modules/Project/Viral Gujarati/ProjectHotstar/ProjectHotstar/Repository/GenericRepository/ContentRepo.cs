using ProjectHotstar.Models;
using ProjectHotstar.Repository.IGenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectHotstar.Repository.GenericRepository
{
    public class ContentRepo : GenericRepository<Content>, IContent
    {
        public ContentRepo(HotstarContext context) : base(context)
        {

        }
    }
}
