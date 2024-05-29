using System.Collections.Generic;
using System.Threading.Tasks;
using api.Dtos;
using api.interfaces;
using api.Model;
using api.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PropertyController : ControllerBase
    {
        private readonly IPropertyRepository PropertyRepository;

        public PropertyController(IPropertyRepository PropertyRepository)
        {
            this.PropertyRepository = PropertyRepository;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> CreateProperty([FromBody] CreatePropertyDto createPropertyDto)
        {
            Property property = await PropertyRepository.CreatePropertyAsync(createPropertyDto);
            if (property == null)
                return BadRequest("Something went wrong while creating the Property.");
            return Ok(property);
        }

        [HttpGet("GetAll")]
        public async Task<IActionResult> GetProperties()
        {
            List<Property> properties = await PropertyRepository.GetPropertiesAsync();
            if (properties == null)
                return NotFound("No Propertys found.");
            return Ok(properties);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetPropertyById(int id)
        {
            Property property = await PropertyRepository.GetPropertyByIdAsync(id);
            if (property == null)
                return NotFound($"Property with id {id} not found.");
            return Ok(property);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateProperty(int id, [FromBody] CreatePropertyDto updatePropertyDto)
        {
            Property property = await PropertyRepository.UpdatePropertyAsync(updatePropertyDto, id);
            if (property == null)
                return BadRequest("Something went wrong while updating the Property.");
            return Ok(property);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteProperty(int id)
        {
            bool result = await PropertyRepository.DeletePropertyAsync(id);
            if (!result)
                return BadRequest("Something went wrong while deleting the Property.");
            return Ok("Property deleted successfully.");
        }

    }
}
