using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using day17Assignment.Models;
using day17assignment.Model;
using Microsoft.AspNetCore.Authorization;
using Newtonsoft.Json;

namespace day17Assignment.Controllers
{
/*    [Authorize(Roles = UserRoles.User)] //only user can authenticate this 
    [Authorize]*/
    [Route("api/[controller]")]
    [ApiController]
    public class PatientsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PatientsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Patients
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Patient>>> GetPatients()
        {
            return await _context.Patients.ToListAsync();
        }

        // GET: api/Patients/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Patient>> GetPatient(int id)
        {
            var patient = await _context.Patients.FindAsync(id);

            if (patient == null)
            {
                return NotFound();
            }

            return patient;
        }

        //Find a report of medicine list for a particular patient

        [HttpGet]
        [Route("PatientDrugDetail/{id}")]

        public object findPatient(int id)
        {

            var result = _context.Patients.Find(id);
            if (result == null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Please Enter a Id!" });
            }

            var drugDetail = _context.Drugs.Find(result.DrugId);
            var last = new  { id = result.PId, did = result.DrugId ,pname = result.PName ,dname = result.Drug.DrugName};

            return Ok(last);

            //return JsonConvert.SerializeObject(last);


          
        }

        //Find a report of patient assigned to a particular doctor

        [HttpGet]
        [Route("PatientPatientDetail/{id}")]

        public object finddr(int id)
        {

            var result = _context.Patients.Find(id);
            if (result == null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Please Enter a Id!" });
            }

            var drugDetail = _context.Doctors.Find(result.DrId);
            var last = new { id = result.PId, did = result.DrId, pname = result.PName, dname = result.Dr.DrName };

            return Ok(last);

        }


            // PUT: api/Patients/5
            // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
            [HttpPut("{id}")]
        public async Task<IActionResult> PutPatient(int id, Patient patient)
        {
            if (id != patient.PId)
            {
                return BadRequest();
            }

            _context.Entry(patient).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PatientExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Patients
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Patient>> PostPatient(Patient patient)
        {
            _context.Patients.Add(patient);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPatient", new { id = patient.PId }, patient);
        }

        // DELETE: api/Patients/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePatient(int id)
        {
            var patient = await _context.Patients.FindAsync(id);
            if (patient == null)
            {
                return NotFound();
            }

            _context.Patients.Remove(patient);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PatientExists(int id)
        {
            return _context.Patients.Any(e => e.PId == id);
        }
    }
}
