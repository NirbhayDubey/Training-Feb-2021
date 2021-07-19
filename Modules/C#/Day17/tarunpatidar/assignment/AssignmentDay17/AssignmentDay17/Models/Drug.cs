using System;
using System.Collections.Generic;

namespace Hospital.Models
{
    public partial class Drug
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