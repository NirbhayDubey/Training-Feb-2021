using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RepositoryPatternDemo.Models
{
    public class Course
    {
        public int  CourseId {get;set;}
        public string CourseName { get; set; }
        public IList<StudentCourse> StudentCourses { get; set; }

    }
}
