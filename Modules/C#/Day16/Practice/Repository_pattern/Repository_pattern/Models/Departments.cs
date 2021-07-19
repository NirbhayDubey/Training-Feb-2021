using System;
using System.Collections.Generic;

namespace Repository_pattern.Models
{
    public partial class Departments
    {
        public decimal DepartmentsId { get; set; }
        public string DepartmentName { get; set; }
        public decimal? ManagerId { get; set; }
        public decimal? LocationId { get; set; }
    }
}
