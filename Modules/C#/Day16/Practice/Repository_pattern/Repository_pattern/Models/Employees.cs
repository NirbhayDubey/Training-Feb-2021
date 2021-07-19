using System;
using System.Collections.Generic;

namespace Repository_pattern.Models
{
    public partial class Employees
    {
        public decimal EmployeesId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime HireDate { get; set; }
        public string JobId { get; set; }
        public decimal? Salary { get; set; }
        public decimal? CommissionPct { get; set; }
        public decimal? ManagerId { get; set; }
        public decimal? DepartmentId { get; set; }
    }
}
