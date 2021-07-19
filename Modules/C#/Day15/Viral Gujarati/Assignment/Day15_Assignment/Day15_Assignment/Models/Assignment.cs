using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Day15_Assignment.Models
{
    public class Assignment
    {
        [Key]
        public long AssignmentId { get; set; }
        public string AssignmentName { get; set; }
        public string AssignmentStatus { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public long? EmployeeId { get; set; }

        public virtual Employee Employee { get; set; }
    }
}

