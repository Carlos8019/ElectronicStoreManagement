using Microsoft.AspNetCore.Mvc;
using businessLogic.interfaces;
namespace webApiservices.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClientsController:ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        public ClientsController(IUnitOfWork unitOfWork)
        {
            this._unitOfWork=unitOfWork;
        }
        [HttpGet("getAllClients")]
        public IActionResult getAllClients()
        {
            var result=_unitOfWork.Clients.GetAllClients();
            return Ok(result);            
        }
    }
}