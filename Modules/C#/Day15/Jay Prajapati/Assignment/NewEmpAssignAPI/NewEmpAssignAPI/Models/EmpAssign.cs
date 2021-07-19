using System;
using System.Collections.Generic;

#nullable disable

namespace NewEmpAssignAPI.Models
{
    public partial class EmpAssign
    {
        public int? EmpId { get; set; }
        public int? AssignemntId { get; set; }
        public string AssignmentStatus { get; set; }
        public string AssignmentProjectedEndDate { get; set; }
        public int Id { get; set; }

        public virtual Assignment Assignemnt { get; set; }
        public virtual Employee Emp { get; set; }
    }
}
