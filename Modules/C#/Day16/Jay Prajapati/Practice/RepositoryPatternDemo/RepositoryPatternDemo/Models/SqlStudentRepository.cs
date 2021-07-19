using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace RepositoryPatternDemo.Models
{
    public class SqlStudentRepository : IStudentRepository
    {
        private readonly RepositoryPatternDemoContext context;
        public SqlStudentRepository(RepositoryPatternDemoContext context)
        {
            this.context = context;
        }
        public Student AddStudent(Student student)
        {
            context.Students.Add(student);
            context.SaveChanges();
            return student;
        }

        public Student DeleteStudent(int Id)
        {
            var st = context.Students.Find(Id);
            if (st != null)
            {
                context.Students.Remove(st);
                context.SaveChanges();
            }
            else
            {
                Console.WriteLine("Student Not Found to Delete");
            }
            return st;
        }

        public Student GerStudent(int Id)
        {
            var st = context.Students.Find(Id);
            
            return st;
        }
        public IEnumerable<Student> GetAllStudent()
        {
            return context.Students;
        }

        public Student UpdateStudent(Student studentChanges)
        {
            var st = context.Students.Find(studentChanges.StudentId);
            if (st != null)
            {
                context.Students.Update(studentChanges);
                context.SaveChanges();
            }
            return studentChanges;

            //var st = context.Students.Attach(studentChanges);
            //st.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            //context.SaveChanges();
            //return studentChanges;
        }


    }
}
