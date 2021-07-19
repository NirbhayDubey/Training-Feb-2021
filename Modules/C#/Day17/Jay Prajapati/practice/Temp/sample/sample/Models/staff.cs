using System;
using System.Collections.Generic;

#nullable disable

namespace sample.Models
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
