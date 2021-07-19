using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalAuthenticationWithJWT.Authentication
{
    public partial class VstaffDepartment
    {
        public int StaffId { get; set; }
        public string Name { get; set; }
        public string Position { get; set; }
        public string Department { get; set; }
    }
}
