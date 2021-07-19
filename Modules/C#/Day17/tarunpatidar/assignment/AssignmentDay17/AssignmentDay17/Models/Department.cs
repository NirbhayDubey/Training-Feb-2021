using System;
using System.Collections.Generic;

namespace Hospital.Models
{
    public partial class Department
    {
        public Department()
        {
            Patients = new HashSet<Patient>();
            staff = new HashSet<Staff>();
        }

        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }

        public virtual ICollection<Patient> Patients { get; set; }
        public virtual ICollection<Staff> staff { get; set; }
        public object Staff { get; internal set; }
    }
}

