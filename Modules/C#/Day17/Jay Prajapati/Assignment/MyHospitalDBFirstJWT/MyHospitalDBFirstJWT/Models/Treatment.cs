using System;
using System.Collections.Generic;

namespace MyHospitalDBFirstJWT.Models
{
    public partial class Treatment
    {
        public int? PatientId { get; set; }
        public int? StaffId { get; set; }
        public string TreatmentName { get; set; }

        public virtual Patients Patient { get; set; }
        public virtual Staff Staff { get; set; }
    }
}
