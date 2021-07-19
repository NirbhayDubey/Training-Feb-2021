using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace Repository_pattern.Models
{
    [Keyless]

    public partial class JobHistory
    {
        public decimal EmployeeId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string JobId { get; set; }
        public decimal? DepartmentId { get; set; }
    }
}
