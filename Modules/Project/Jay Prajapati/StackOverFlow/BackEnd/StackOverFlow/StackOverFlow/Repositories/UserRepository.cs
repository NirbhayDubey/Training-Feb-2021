using Microsoft.EntityFrameworkCore;
using StackOverFlow.Models;
using StackOverFlow.Models.Authentication;
using StackOverFlow.Repositories.Interface;
using System;

using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StackOverFlow.Repositories
{
    public class UserRepository : GenericRepository<AppUser>, IUserRepository
    {
        private readonly StackOverFlowContext context;
        public UserRepository(StackOverFlowContext context) : base(context)
        {
            this.context = context;
        }
        
          


        public void UpdateUser(int id, AppUser user)
        {
            user.UserId = id;
            
            context.AppUsers.Update(user);

        }


        public bool ValidateUser(string cred, int id)
        {
            var user = this.context.AppUsers.AsNoTracking().SingleOrDefault(x => x.UserId == id);
            if (user == null || user.ApplicationUserId != cred)
            {
                return false;
            }
            return true;
        }

        public IEnumerable<AppUser> SearchUser(string user)
        {
            
            var users = context.AppUsers.Where(u => u.FullName.Contains(user.Trim())).AsEnumerable();
            return users;
        }

        
    }
}
