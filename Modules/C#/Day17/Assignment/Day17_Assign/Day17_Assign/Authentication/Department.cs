using System;
using System.Collections.Generic;
using Day17_Assign;

#nullable disable

namespace Day17_Assign.Models
{
    public partial class Department
    {
        public Department()
        {
            Patients = new HashSet<Patient>();
            staff = new HashSet<staff>();
        }

        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }

        public virtual ICollection<Patient> Patients { get; set; }
        public virtual ICollection<staff> staff { get; set; }
    }
}
