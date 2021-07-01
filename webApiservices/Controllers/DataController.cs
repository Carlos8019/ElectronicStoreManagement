using Microsoft.AspNetCore.Mvc;
using businessLogic.interfaces;
using System.Collections.Generic;
using System.Linq;

namespace webApiservices.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DataController:ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        public DataController(IUnitOfWork unitOfWork)
        {
            this._unitOfWork=unitOfWork;
        }
        [HttpGet("getAllClients")]
        public IActionResult getAllClients()
        {
            var result=_unitOfWork.Clients.GetAllClients();
            return Ok(result);            
        }
        [HttpGet("validateLogin")]
        public IActionResult validateLogin(string userName,string password)
        {
            var result=_unitOfWork.Users.ValidateClient(userName,password).ToList();
            if(result.Any())
                return Ok(1);
            else 
                return BadRequest(0);
        }
    }
}