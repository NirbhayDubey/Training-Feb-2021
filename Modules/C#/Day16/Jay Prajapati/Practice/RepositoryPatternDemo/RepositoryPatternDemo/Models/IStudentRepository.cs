using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RepositoryPatternDemo.Models
{
    public interface IStudentRepository
    {
        IEnumerable<Student> GetAllStudent();
        Student GerStudent(int Id);
        Student AddStudent(Student student);
        Student UpdateStudent(Student studentChanges);
        Student DeleteStudent(int Id);


    }
}
