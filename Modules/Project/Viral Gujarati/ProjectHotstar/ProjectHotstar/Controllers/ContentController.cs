using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectHotstar.Models;
using ProjectHotstar.Repository.IGenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectHotstar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContentController : ControllerBase
    {
        IContent _content;

        public ContentController(IContent content)
        {
            this._content = content;
        }

        [HttpGet]
        public IEnumerable<Content> GetContent()
        {
            return _content.GetAll();
        }
        //[Authorize(Roles = UserRoles.CinemaAdmin)]
        [HttpGet]
        [Route("{id}")]
        public ActionResult<Content> GetContent(int id)
        {
            var content = _content.GetById(id);
            if (content == null)
            {
                return NotFound();
            }
            return content;
        }
        [HttpPut("{​​​id}​​​")]
        public ActionResult<Content> PutContent(int id, Content content)
        {
            try
            {
                _content.Update(content);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetContent(id);
        }
        [HttpPost]
        public ActionResult<Content> PostContent(Content content)
        {
            try
            {
                _content.Create(content);
            }
            catch (DbUpdateException)
            {
                if (_content.Any(e => e.ContentId == content.ContentId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }
            return CreatedAtAction("GetContent", new { id = content.ContentId }, content);
        }
        //[Authorize(Roles = UserRoles.Admin)]
        [HttpDelete("{​​​id}​​​")]
        public IActionResult DeleteContent(int id)
        {
            var content = _content.GetById(id);
            if (content == null)
            {
                return NotFound();
            }
            _content.Delete(content);
            return NoContent();
        }

    }
}


