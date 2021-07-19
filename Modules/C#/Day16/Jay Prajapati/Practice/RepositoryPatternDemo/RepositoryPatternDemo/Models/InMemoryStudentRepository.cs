using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RepositoryPatternDemo.Models
{
    public class InMemoryStudentRepository : IStudentRepository
    {
        private List<Student> StudentList;
        public InMemoryStudentRepository()
        {
            StudentList = new List<Student>(){
                new Student() { StudentId=1,FirstName="Jay",LastName="Prajapati"},
                new Student() { StudentId = 1, FirstName = "Adam", LastName = "Smith" },
                new Student() { StudentId = 1, FirstName = "John", LastName = "Doe" }
            };
        }
        Student IStudentRepository.AddStudent(Student student)
        {
            StudentList.Add(student);
            return student;
        }

        Student IStudentRepository.DeleteStudent(int Id)
        {
           var St =  StudentList.FirstOrDefault(s => s.StudentId == Id);
            if(St != null)
            {
                StudentList.Remove(St);
                
            }
            else
            {
                Console.WriteLine("Student Not Found");
            }
            return St;
        }

        Student IStudentRepository.GerStudent(int Id)
        {
            var St = StudentList.Find(s => s.StudentId == Id);
            return St;
        }

        IEnumerable<Student> IStudentRepository.GetAllStudent()
        {
            return StudentList;
        }

        Student IStudentRepository.UpdateStudent(Student studentChanges)
        {

            var St = StudentList.Find(s => s.StudentId == studentChanges.StudentId);
            if (St != null)
            {
                St.FirstName = studentChanges.FirstName;
                St.LastName = studentChanges.LastName;
               
            }
            else
            {
                Console.WriteLine("Student Not Found");
            }
            return St;
        }
    }
}
