using System;
using System.Collections.Generic;

namespace Repository_pattern.Models
{
    public partial class Courses
    {
        public Courses()
        {
            Students = new HashSet<Students>();
        }

        public int CoursesId { get; set; }
        public string CourseName { get; set; }

        public virtual ICollection<Students> Students { get; set; }
    }
}
