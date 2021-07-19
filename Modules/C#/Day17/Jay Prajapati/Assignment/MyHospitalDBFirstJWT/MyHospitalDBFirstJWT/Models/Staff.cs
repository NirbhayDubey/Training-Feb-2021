using System;
using System.Collections.Generic;

namespace MyHospitalDBFirstJWT.Models
{
    public partial class Staff
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Position { get; set; }
        public int? Department { get; set; }

        public virtual Department DepartmentNavigation { get; set; }
    }
}
