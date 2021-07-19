using System;
using System.Collections.Generic;
using Day17_Assign.Authentication;

#nullable disable

namespace Day17_Assign.Models
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
