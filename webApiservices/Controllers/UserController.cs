using Microsoft.AspNetCore.Mvc;
using businessLogic.interfaces;
using System.Collections.Generic;
using System.Linq;
using businessLogic.DTO;
using System;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
namespace webApiservices.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger _logger;
        public UserController(IUnitOfWork unitOfWork, ILogger<UserController> logger)
        {
            _logger = logger;
            this._unitOfWork = unitOfWork;
        }
        [HttpPost("createUser")]
        [ProducesResponseType(Microsoft.AspNetCore.Http.StatusCodes.Status200OK)]
        [ProducesResponseType(Microsoft.AspNetCore.Http.StatusCodes.Status404NotFound)]
        [ProducesResponseType(Microsoft.AspNetCore.Http.StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> CreateUser([FromBody] UserDTO dto)
        {
            try
            {
                var result = await _unitOfWork.Users.CreateUser(dto);
                if (result)
                    return Ok(1);
                else
                    return NotFound(0);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message + " " + ex.StackTrace);
            }
        }
        [HttpGet("getUsers")]
        [ProducesResponseType(Microsoft.AspNetCore.Http.StatusCodes.Status200OK)]
        [ProducesResponseType(Microsoft.AspNetCore.Http.StatusCodes.Status404NotFound)]
        [ProducesResponseType(Microsoft.AspNetCore.Http.StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> GetAllUsers()
        {
            try
            {
                var result = await _unitOfWork.Users.GetAll();
                if (result.Any())
                    return Ok(result);
                else
                    return NotFound(0);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message + " " + ex.StackTrace);
            }
        }

    }
}