using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;


#nullable disable

namespace Day15_Assignment.Models
{
    public partial class Employee
    {
        public Employee()
        {
            Assignments = new HashSet<Assignment>();

        }

        [Key]
        public long EmpId { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string Gender { get; set; }
            public string AddressLine1 { get; set; }
            public string City { get; set; }
            public string Country { get; set; }

        public DateTime HireDate { get; set; }

            public virtual ICollection<Assignment> Assignments { get; set; }
        }
    }
