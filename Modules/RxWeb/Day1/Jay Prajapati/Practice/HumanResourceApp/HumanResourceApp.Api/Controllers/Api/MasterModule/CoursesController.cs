using Microsoft.AspNetCore.Mvc;
using System.Linq;
using HumanResourceApp.UnitOfWork.Main;
using HumanResourceApp.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace HumanResourceApp.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class CoursesController : BaseController<Cours,Cours,Cours>

    {
        public CoursesController(IMasterUow uow):base(uow) {}

    }
}
