using System;
using System.Collections.Generic;

#nullable disable

namespace sample.Models
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
