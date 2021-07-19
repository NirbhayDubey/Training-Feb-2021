
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace Project_Hotstar.Authentication
{
    public class RegisterModel
    {
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "User Name is required")]
        public string Username { get; set; }

        [EmailAddress]
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

        //[Required(ErrorMessage = "Phone Number is required")]
        //public string Phone { get; set; }

        [Required(ErrorMessage = "Address is required")]
        public string Address { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }

    }
}