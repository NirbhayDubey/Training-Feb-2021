using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using MyHospitalDBFirstJWT.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MyHospitalDBFirstJWT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        public IConfiguration configuration;
        private readonly MyHospDBFirstJWTContext _context;

        public AuthenticateController(IConfiguration config, MyHospDBFirstJWTContext context)
        {
            this.configuration = config;
            this._context = context;
        }
       

        [HttpPost]
        [Route("Register")]
        public IActionResult Register(UserInfo User)
        {
            var IsUserExists = _context.UserInfo.FirstOrDefault(s => s.UserName == User.UserName || s.Email == User.Email);
            if(IsUserExists == null)
            {
                UserInfo user = new UserInfo()
                {
                    UserName = User.UserName,
                    FirstName = User.FirstName,
                    LastName = User.LastName,
                    Email = User.Email,
                    Password = User.Password,
                    CreatedDate = DateTime.Now
                };
                _context.Add(user);
                _context.SaveChanges();
                return Ok("User Register Successfully");
                 
            }
            else
            {
                return BadRequest("User Already Exists");
            }
        }

        [HttpPost]
        [Route("Admin-register")]
        public IActionResult AdminRegister(UserInfo User)
        {
            var IsUserExists = _context.UserInfo.FirstOrDefault(s => s.UserName == User.UserName || s.Email == User.Email);
            if (IsUserExists == null)
            {
                UserInfo user = new UserInfo()
                {
                    UserName = User.UserName,
                    FirstName = User.FirstName,
                    LastName = User.LastName,
                    Email = User.Email,
                    Password = User.Password,
                    CreatedDate = DateTime.Now,
                    UserRole = "Admin"
                };
                _context.Add(user);
                _context.SaveChanges();
                return Ok("User Register Successfully");

            }
            else
            {
                return BadRequest("User Already Exists");
            }
        }
        // Admin Login
        // POST api/<AuthenticateController>
        [HttpPost]
        [Route("admin-login")]
        public IActionResult AdminLogin(UserInfo _userData)
        {
            if(_userData != null && _userData.Email != null && _userData.Password != null)
            {
                var user = GetUser(_userData.Email, _userData.Password);
                if(user != null)
                {
                   if(user.UserRole == "Admin")
                    {
                        var claims = new[]
                   {
                        new Claim(JwtRegisteredClaimNames.Sub, configuration["Jwt:Subject"]),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                        new Claim("Id", user.UserId.ToString()),
                        new Claim("FirstName", user.FirstName),
                        new Claim("LastName", user.LastName),
                        new Claim("UserName", user.UserName),
                        new Claim("Email", user.Email),
                        new Claim("UserRole", user.UserRole)
                   };
                        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"]));

                        var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                        var token = new JwtSecurityToken(configuration["Jwt:Issuer"], configuration["Jwt:Audience"], claims, expires: DateTime.UtcNow.AddDays(1), signingCredentials: signIn);

                        return Ok(new JwtSecurityTokenHandler().WriteToken(token));
                    }
                    else
                    {
                        return BadRequest("You are not Authorized As Admin");
                    }
                }
                else
                {
                    return BadRequest("Invalid Credentials");
                }
            }
            else
            {
                return BadRequest();
            }
        }
        private UserInfo GetUser(string email, string password)
        {
            return _context.UserInfo.FirstOrDefault(s => s.Email == email && s.Password == password);
        }

        [HttpPost]
        [Route("login")]
        public IActionResult Login(UserInfo _userData)
        {
            if (_userData != null && _userData.Email != null && _userData.Password != null)
            {
                var user = GetUser(_userData.Email, _userData.Password);
                if (user != null)
                {
                    var claims = new[]
                    {
                        new Claim(JwtRegisteredClaimNames.Sub, configuration["Jwt:Subject"]),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                        new Claim("Id", user.UserId.ToString()),
                        new Claim("FirstName", user.FirstName),
                        new Claim("LastName", user.LastName),
                        new Claim("UserName", user.UserName),
                        new Claim("Email", user.Email),
                        new Claim("UserRole", user.UserRole)
                   };
                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"]));

                    var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                    var token = new JwtSecurityToken(configuration["Jwt:Issuer"], configuration["Jwt:Audience"], claims, expires: DateTime.UtcNow.AddDays(1), signingCredentials: signIn);

                    return Ok(new JwtSecurityTokenHandler().WriteToken(token));
                }
                else
                {
                    return BadRequest("Invalid Credentials");
                }
            }
            else
            {
                return BadRequest();
            }
        }


    }
}
