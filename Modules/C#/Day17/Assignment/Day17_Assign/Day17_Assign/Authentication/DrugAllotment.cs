using System;
using System.Collections.Generic;

#nullable disable

namespace Day17_Assign.Models
{
    public partial class DrugAllotment
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
