using System;
using System.Collections.Generic;

namespace MyHospitalDBFirstJWT.Models
{
    public partial class Department
    {
        public Department()
        {
            Patients = new HashSet<Patients>();
            Staff = new HashSet<Staff>();
        }

        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }

        public virtual ICollection<Patients> Patients { get; set; }
        public virtual ICollection<Staff> Staff { get; set; }
    }
}
