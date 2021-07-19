using System;
using System.Collections.Generic;

#nullable disable

namespace sample.Models
{
    public partial class Treatment
    {
        public int? PatientId { get; set; }
        public int? StaffId { get; set; }
        public string TreatmentName { get; set; }

        public virtual Patient Patient { get; set; }
        public virtual staff Staff { get; set; }
    }
}
