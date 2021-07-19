using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyHospitalDBFirstJWT.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MyHospitalDBFirstJWT.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly MyHospDBFirstJWTContext context ;
        public UserController(MyHospDBFirstJWTContext cont)
        {
            this.context = cont;
        }

        // GET Pateints DATA

        
        [HttpGet]
        [Route("patients")]
        public IEnumerable<Patients> GetAllPatients()
        {
            return context.Patients.ToList();
        }

        
        [HttpGet]
        [Route("patients/{id}")]
        public Patients GetPatient(int id)
        {
            var p = context.Patients.Find(id);
            return p;
        }


        // GET Staff DATA

        [HttpGet]
        [Route("staff")]
        public IEnumerable<VstaffDepartment> GetAllStaff()
        {
            return context.VstaffDepartment.ToList();
        }

        
        [HttpGet]
        [Route("staff/{id}")]
        public VstaffDepartment GetStaff(int id)
        {
            
            var staff = context.VstaffDepartment.FirstOrDefault(s=>s.StaffId == id);
            return staff;
        }


        // GET PatientsTreatment DATA
        [HttpGet]
        [Route("PT")]
        public IEnumerable<VpatientsTreatment> GetAllPT()
        {
            return context.VpatientsTreatment.ToList();
        }

        
        [HttpGet]
        [Route("PT/{id}")]
        public VpatientsTreatment GetPT(int id)
        {
            
            var p = context.VpatientsTreatment.FirstOrDefault(p=>p.PatientId == id);
            return p;
        }



        //  ---------------CRUD For Admin

        // For STAFF
        // POST api/<AdminController>
        [HttpPost]
        [Route("admin/staff")]
        public IActionResult AddStaff([FromBody] Staff staff)
        {
            context.Add(staff);
            context.SaveChanges();
            return Ok();
        }

        // PUT api/<AdminController>/5
        [HttpPut]
        [Route("admin/staff/{id}")]
        public IActionResult Modifystaff(int id, [FromBody] Staff staff)
        {
            var s = context.Staff.Find(id);
            context.Update(s);
            context.SaveChanges();
            return Ok(s);
        }

        // DELETE api/<AdminController>/5
        [HttpDelete]
        [Route("admin/staff/{id}")]
        public IActionResult Delete(int id)
        {
            var s = context.Staff.Find(id);
            context.Remove(s);
            return Ok(s);
        }







    }
}
