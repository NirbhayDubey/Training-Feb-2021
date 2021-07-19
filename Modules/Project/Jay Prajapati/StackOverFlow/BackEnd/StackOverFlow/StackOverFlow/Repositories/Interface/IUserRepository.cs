using StackOverFlow.Models;
using StackOverFlow.Models.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StackOverFlow.Repositories.Interface
{
    public interface IUserRepository : IGenericRepository<AppUser>
    {

        public bool ValidateUser(string cred, int id);
        public void UpdateUser(int id, AppUser user);
        public IEnumerable<AppUser> SearchUser(string user);
    }
}
