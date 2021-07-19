using StudentForm.Models;
using StudentForm.Repository.IRepo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentForm.Repository.Repo
{
    public class StudentRepo : GenericRepo<Student>, IStudent
    {
        public StudentRepo(StudentDbContext context) : base(context)
        {

        }
    }
}