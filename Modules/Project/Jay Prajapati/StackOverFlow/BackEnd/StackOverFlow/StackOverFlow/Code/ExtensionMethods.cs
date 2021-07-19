using Microsoft.AspNetCore.Identity;
using StackOverFlow.Models;
using StackOverFlow.Models.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace StackOverFlow.Code
{
    public static class ExtensionMethods
    {
        
        
        public static string getUserName(this ClaimsPrincipal user)
        {
            
            if (!user.Identity.IsAuthenticated)
            {
                return null;
            }
            ClaimsPrincipal currentUser = user;
            string username = currentUser.FindFirst(ClaimTypes.Name).Value;

            return username;
            
        }
    }
}
