using ProjectHotstar.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectHotstar.Repository.IGenericRepository
{
    public interface IUserAccount : IGenericRepository<UserAccount>
    {
        public bool ValidateUser(string cred, int id);

    }

}
