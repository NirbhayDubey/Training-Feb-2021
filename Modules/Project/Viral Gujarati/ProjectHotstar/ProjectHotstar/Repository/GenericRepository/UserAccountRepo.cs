using ProjectHotstar.Models;
using ProjectHotstar.Repository.IGenericRepository;
using ProjectHotstar.Repository.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ProjectHotstar.Repository.GenericRepository
{
    public class UserAccountRepo : GenericRepository<UserAccount>, IUserAccount
    {
        private readonly HotstarContext _context;
        public UserAccountRepo(HotstarContext context) : base(context)
        {
            this._context = context;
        }

        public bool ValidateUser(string cred, int id)
        {
            var user = this._context.UserAccounts.AsNoTracking().SingleOrDefault(x => x.CustomerId == id);
            if (user == null || user.ApplicationUserId != cred)
            {
                return false;
            }
            return true;
        }
    }
}

