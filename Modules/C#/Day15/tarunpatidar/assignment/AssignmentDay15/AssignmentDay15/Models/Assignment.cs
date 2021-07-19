using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

#nullable disable

namespace AssignmentDay15.Models
{
    public class Assignment
    {
        public int AssignmentId { get; set; }
        public string AssignmentName { get; set; }
        public string ActionCode { get; set; }
        public DateTime? Lastdate { get; set; }
        public string AssignmentStatus { get; set; }
        public int? EmpId { get; set; }

        public virtual Employee Emp { get; set; }
    }
}
