using Microsoft.AspNetCore.Identity;
using ProjectHotstar.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_Hotstar.Models.Authentication
{
    public class ApplicationUser : IdentityUser
    {
        public UserAccount UserAccount { get; set; }
    }
}
