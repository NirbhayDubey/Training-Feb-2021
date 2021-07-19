using System;
using System.Collections.Generic;
using System.Text;

namespace ToyManufacturingCompany.Models
{
    public class Customer
    {
#nullable enable
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string? Phone { get; set; 
        }
        public CustomerAddress Address { get; set; }
#nullable disable
        public ICollection<Order> Orders { get; set; }


        public override string ToString()
        {
            return "Id : " + this.Id + 
                "\nFirstName : " + FirstName +
                "\nLastName : " + LastName +
                "\nPhoneNumber : " + Phone;
        }
    }

   
}
