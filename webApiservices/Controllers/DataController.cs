using Microsoft.AspNetCore.Mvc;
using businessLogic.interfaces;
using System.Collections.Generic;
using System.Linq;
using businessLogic.DTO;

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
        [HttpGet("validateLogin/{userName}/{password}")]
        public IActionResult validateLogin(string userName,string password)
        {
            var result=_unitOfWork.Users.ValidateClient(userName,password).ToList();
            if(result.Any())
                return Ok(1);
            else 
                return Ok(0);
        }
        [HttpPost("saveClient")]
        public IActionResult saveClient([FromBody]ClientDTO dto )
        {
            return Ok(1);
        }
    }
}