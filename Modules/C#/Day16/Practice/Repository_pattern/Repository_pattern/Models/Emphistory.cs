using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace Repository_pattern.Models
{

    [Keyless]
    public partial class Emphistory
    {
        public string FirstnAme { get; set; }
        public string LAstname { get; set; }
        public decimal EmployeeId { get; set; }
    }
}
