using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalAuthenticationWithJWT.Authentication
{
    public class Patient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? Age { get; set; }
        public string City { get; set; }
        public int? Department { get; set; }

        public virtual Department DepartmentNavigation { get; set; }
    }
}
