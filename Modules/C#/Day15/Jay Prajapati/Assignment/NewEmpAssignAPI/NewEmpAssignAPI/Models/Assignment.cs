using System;
using System.Collections.Generic;

#nullable disable

namespace NewEmpAssignAPI.Models
{
    public partial class Assignment
    {
        public Assignment()
        {
            EmpAssigns = new HashSet<EmpAssign>();
        }

        public int AssignmentId { get; set; }
        public string AssignmentName { get; set; }
        public string AssignmentNumber { get; set; }
        public DateTime EffectiveStartDate { get; set; }
        public DateTime EffectiveEndDate { get; set; }

        public virtual ICollection<EmpAssign> EmpAssigns { get; set; }
    }
}
