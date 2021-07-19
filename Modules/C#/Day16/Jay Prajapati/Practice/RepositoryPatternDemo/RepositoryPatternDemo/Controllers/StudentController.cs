using Microsoft.AspNetCore.Mvc;
using RepositoryPatternDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RepositoryPatternDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentRepository studentRepository;
        public StudentController(IStudentRepository studentRepository)
        {
            this.studentRepository = studentRepository;
        }
        // GET: api/<StudentController>
        [HttpGet]
        public IEnumerable<Student> Get()
        {
            var st = studentRepository.GetAllStudent();
            return st;
        }

        // GET api/<StudentController>/5
        [HttpGet("{id}")]
        public Student Get(int id)
        {
            var st = studentRepository.GerStudent(id);
            return st;
        }

        // POST api/<StudentController>
        [HttpPost]
        public Student Post([FromBody] Student student)
        {
            return studentRepository.AddStudent(student);
        }

        // PUT api/<StudentController>/5
        [HttpPut]
        public Student Put([FromBody] Student student)
        {
            
            return studentRepository.UpdateStudent(student);
        }

        // DELETE api/<StudentController>/5
        [HttpDelete("{id}")]
        public Student Delete(int id)
        {
            return studentRepository.DeleteStudent(id);
        }
    }
}
