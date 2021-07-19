using System;
using System.Collections.Generic;

namespace Hospital.Models
{
    public partial class Treatment
    {
        public int? PatientId { get; set; }
        public int? StaffId { get; set; }
        public string TreatmentName { get; set; }

        public virtual Patient Patient { get; set; }
        public virtual Staff Staff { get; set; }
    }
}
