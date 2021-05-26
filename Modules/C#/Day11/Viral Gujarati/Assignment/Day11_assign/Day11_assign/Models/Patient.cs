﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Day11_assign.Models
{
    public partial class Patient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public int? Department { get; set; }
        public int? Age { get; set; }

        public virtual Department DepartmentNavigation { get; set; }
    }
}
