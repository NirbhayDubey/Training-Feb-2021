using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AssignmentDay15.Models
{
    public class Employee
    {
        public Employee()
        {
            Assignments = new HashSet<Assignment>();
        }

        public int EmpId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public DateTime? Dob { get; set; }
        public DateTime? HireDate { get; set; }


        public virtual ICollection<Assignment> Assignments { get; set; }
    }
}
