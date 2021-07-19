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
    public class MovieController : ControllerBase
    {
       IMovie _Movie;

        public MovieController(IMovie movie)
        {
            this._Movie = movie;
        }

        [HttpGet]
        public IEnumerable<Movie> GetMovies()
        {
            return _Movie.GetAll();
        }
        //[Authorize(Roles = UserRoles.CinemaAdmin)]
        [HttpGet("{​​​id}​​​")]
        public ActionResult<Movie> GetMovies(int id)
        {
            var movie = _Movie.GetById(id);
            if (movie == null)
            {
                return NotFound();
            }
            return movie;
        }
        [HttpPut("{​​​id}​​​")]
        public ActionResult<Movie> PutContent(int id, Movie movie)
        {
            try
            {
                _Movie.Update(movie);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetMovies(id);
        }
        [HttpPost]
        public ActionResult<Movie> PostContent(Movie movie)
        {
            try
            {
                _Movie.Create(movie);
            }
            catch (DbUpdateException)
            {
                if (_Movie.Any(e => e.MovieId == movie.MovieId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }
            return CreatedAtAction("GetMovie", new { id = movie.MovieId },movie);
        }
        //[Authorize(Roles = UserRoles.Admin)]
        [HttpDelete("{​​​id}​​​")]
        public IActionResult DeleteMovies(int id)
        {
            var movie = _Movie.GetById(id);
            if (movie == null)
            {
                return NotFound();
            }
            _Movie.Delete(movie);
            return NoContent();
        }

    }
}


