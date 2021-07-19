using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NewEmpAssignAPI.Models;

namespace NewEmpAssignAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpAssignsController : ControllerBase
    {
        private readonly EmpAssignDBContext _context;

        public EmpAssignsController(EmpAssignDBContext context)
        {
            _context = context;
        }

        // GET: api/EmpAssigns
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmpAssign>>> GetEmpAssigns()
        {
            return await _context.EmpAssigns.ToListAsync();
        }

        // GET: api/EmpAssigns/5
        [HttpGet("{id}")]
        
        public async Task<ActionResult<EmpAssign>> GetEmpAssign(int id)
        {
            var empAssign = await _context.EmpAssigns.FindAsync(id);

            if (empAssign == null)
            {
                return NotFound();
            }

            return empAssign;
        }
        [HttpGet]
        [Route("/{empId}/Assignments")]
        public ActionResult<List<EmpAssign>> GetAllAssignments(int empId)
        {
            var Assignments = _context.EmpAssigns.Where(s => s.EmpId == empId).ToList();
            return Assignments;
        }

        [HttpGet]
        [Route("/{empId}/Assignments/{AsignId}")]
        public ActionResult<List<EmpAssign>> GetAllAssignmentsWithID(int empId,int AsignId)
        {
            var Assignments = _context.EmpAssigns.Where(s => s.EmpId == empId && s.AssignemntId == AsignId).ToList();
            return Assignments;
        }

        // PUT: api/EmpAssigns/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmpAssign(int id, EmpAssign empAssign)
        {
            if (id != empAssign.Id)
            {
                return BadRequest();
            }

            _context.Entry(empAssign).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmpAssignExists(id))
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

        // POST: api/EmpAssigns
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EmpAssign>> PostEmpAssign(EmpAssign empAssign)
        {
            _context.EmpAssigns.Add(empAssign);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmpAssign", new { id = empAssign.Id }, empAssign);
        }

        // DELETE: api/EmpAssigns/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmpAssign(int id)
        {
            var empAssign = await _context.EmpAssigns.FindAsync(id);
            if (empAssign == null)
            {
                return NotFound();
            }

            _context.EmpAssigns.Remove(empAssign);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmpAssignExists(int id)
        {
            return _context.EmpAssigns.Any(e => e.Id == id);
        }
    }
}
