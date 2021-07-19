using ProjectHotstar.Models;
using ProjectHotstar.Repository.IGenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectHotstar.Repository.GenericRepository
{
    public class MovieRepo : GenericRepository<Movie>, IMovie
    {
        public MovieRepo(HotstarContext context) : base(context)
        {

        }
    }
}
