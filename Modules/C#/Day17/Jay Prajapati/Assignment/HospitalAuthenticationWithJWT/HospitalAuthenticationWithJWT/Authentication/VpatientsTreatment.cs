using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalAuthenticationWithJWT.Authentication
{
    public partial class VpatientsTreatment
    {
        public int PatientId { get; set; }
        public string PatientName { get; set; }
        public int? PatientAge { get; set; }
        public string PatientCity { get; set; }
        public int StaffId { get; set; }
        public string StaffName { get; set; }
        public string Department { get; set; }
        public string Treatment { get; set; }
    }
}
