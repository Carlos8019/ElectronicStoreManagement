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
    public class DataController:ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger _logger;
        public DataController(IUnitOfWork unitOfWork,ILogger<DataController> logger)
        {
            _logger=logger;
            this._unitOfWork=unitOfWork;
        }
        [HttpGet("getAllClients")]
        public async Task<IActionResult> getAllClients()
        {
            var result=await _unitOfWork.Clients.GetAllClients();
            return Ok(result);            
        }
        [HttpGet("getAllServices")]
        public async Task<IActionResult> getAllServices(){
            var result=await _unitOfWork.Services.GetAllServices();
            return Ok(result);
        }
        [HttpGet("validateLogin/{userName}/{password}")]
        public async Task<IActionResult> validateLogin(string userName,string password)
        {
            var result=await _unitOfWork.Users.ValidateClient(userName,password);
            if(result.Any())
            {
                _logger.LogInformation("Validation login success");
                return Ok(1);
            }
                
            else 
                return Ok(0);
        }
        [HttpPost("saveClient")]
        public async Task<IActionResult> saveClient([FromBody]ClientDTO dto )
        {
            try
            {
                var result=await _unitOfWork.Clients.AddClient(dto);
                if(result)
                    return Ok(1);
                else
                    return Ok(0);                
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpGet("getAllProducts")]
        public async Task<IActionResult> getAllProducts()
        {
            var result=await _unitOfWork.Products.GetAllProducts();
            return Ok(result);
        }
        [HttpGet("getAllPaymentMode")]
        public async Task<IActionResult> getAllPaymentMode()
        {
            var result=await _unitOfWork.PaymentModes.GetAllPaymentsMode();
            return Ok(result);
        }

        [HttpGet("getAllDeliveryTimes")]
        public async Task<IActionResult> getAllDeliveryTimes()
        {
            var result=await _unitOfWork.DeliveryTimes.GetAllDeliveryTimes();
            return Ok(result);
        }
        

        [HttpPost("saveProduct")]
        public async Task<IActionResult> saveProducts([FromBody] ProductDTO dto)
        {
            try
            {
                var result=await _unitOfWork.Products.AddProduct(dto);
                if(result)
                    return Ok(1);
                else
                    return Ok(0);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost("saveService")]
        public async Task<IActionResult> saveService([FromBody] ServiceDTO dto)
        {
            try
            {
                var result=await _unitOfWork.Services.AddServices(dto);
                if(result)
                    return Ok(1);
                else
                    return Ok(0);                   
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}