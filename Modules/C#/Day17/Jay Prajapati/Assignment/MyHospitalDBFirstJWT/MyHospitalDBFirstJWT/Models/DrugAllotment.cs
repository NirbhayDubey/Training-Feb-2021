using System;
using System.Collections.Generic;

namespace MyHospitalDBFirstJWT.Models
{
    public partial class DrugAllotment
    {
        public int? PatientId { get; set; }
        public string DrugName { get; set; }
        public string Morning { get; set; }
        public string Afternoon { get; set; }
        public string Evenning { get; set; }
        public string Night { get; set; }

        public virtual Patients Patient { get; set; }
    }
}
