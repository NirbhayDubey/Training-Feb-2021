using System;
using System.Collections.Generic;
using Day17_Assign;
using Day17_Assign.Authentication;


#nullable disable

namespace Day17_Assign.Models
{
    public partial class staff
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Position { get; set; }
        public int? Department { get; set; }

        public virtual Department DepartmentNavigation { get; set; }
    }
}
