using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalAuthenticationWithJWT.Authentication
{
    public class Treatment
    {
        public int? PatientId { get; set; }
        public int? StaffId { get; set; }
        public string TreatmentName { get; set; }

        public virtual Patient Patient { get; set; }
        public virtual Staff Staff { get; set; }
    }
}
