using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RepositoryPatternDemo.Models;

namespace RepositoryPatternDemo.Models
{
    public class Student
    {
        public int StudentId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        
        public IList<StudentCourse> StudentCourses { get; set; }

    }
}
