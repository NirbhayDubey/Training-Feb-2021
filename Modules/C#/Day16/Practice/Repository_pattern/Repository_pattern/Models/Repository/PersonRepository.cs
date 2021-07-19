using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Repository_pattern.Models.IRepository;

namespace Repository_pattern.Models.Repository
{
    public class PersonRepository : GenericRepository<Person>, IPerson
    {
        public PersonRepository(TestDBContext context) : base(context)
        {

        }
    }
}
