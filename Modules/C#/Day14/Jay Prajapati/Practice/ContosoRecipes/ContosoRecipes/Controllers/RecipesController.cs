using ContosoRecipes.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContosoRecipes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipesController : ControllerBase
    {

        [HttpGet]
        public ActionResult GetRecipesList()
        {
            Recipe[] recipes =
            {
                new() {Title = "Oxtail"},
                new() {Title = "Curry Chiken"},
                new() {Title = "Dumplings"}
            };
            return Ok(recipes);
        }
        //[HttpGet]
        //public ActionResult GetRecipes([FromQuery] int count)
        //{
        //    //string[] recipes= { "Oxtail", "Curry Chiken", "Dumplings" };
        //    Recipe[] recipes1 =
        //    {
        //        new() {Title = "Oxtail"},
        //        new() {Title = "Curry Chiken"},
        //        new() {Title = "Dumplings"}
        //    };
        //    //if (recipes.Any())

        //    //{
        //    //    return NotFound();
        //    //}
        //    return Ok(recipes1.Take(count));
        //}
        [HttpPost]
        public ActionResult CreateNewRecipes([FromBody] Recipe newRecipe)
        {
            bool badThingsHapened = false;
            if (badThingsHapened)
            {
                return BadRequest();
            }
            return Created("", newRecipe);
        }
        [HttpDelete]
        public ActionResult DeleteRecipes()
        {
            bool badThingHappened = false;
            if (badThingHappened)
                return BadRequest();
            return NoContent();
        }
    }
}
