using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalAuthenticationWithJWT.Authentication
{
    public class DrugAllotment
    {
        public int? PatientId { get; set; }
        public string DrugName { get; set; }
        public string Morning { get; set; }
        public string Afternoon { get; set; }
        public string Evenning { get; set; }
        public string Night { get; set; }

        public virtual Patient Patient { get; set; }
    }
}
