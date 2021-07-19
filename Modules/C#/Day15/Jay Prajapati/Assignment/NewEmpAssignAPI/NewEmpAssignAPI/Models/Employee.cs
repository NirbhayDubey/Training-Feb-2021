using System;
using System.Collections.Generic;

#nullable disable

namespace NewEmpAssignAPI.Models
{
    public partial class Employee
    {
        public Employee()
        {
            EmpAssigns = new HashSet<EmpAssign>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Gender { get; set; }
        public DateTime HireDate { get; set; }
        public string MaritalStatus { get; set; }

        public virtual ICollection<EmpAssign> EmpAssigns { get; set; }
    }
}
