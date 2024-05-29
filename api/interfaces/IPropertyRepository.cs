using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos;
using api.Model;
using api.Models;

namespace api.interfaces
{
    public interface IPropertyRepository
    {
        Task<Property> CreatePropertyAsync(CreatePropertyDto createPropertyDto);
        Task<List<Property>> GetPropertiesAsync();
        Task<Property> GetPropertyByIdAsync(int id);
        Task<Property> UpdatePropertyAsync(CreatePropertyDto updatePropertyDto, int id);
        Task<bool> DeletePropertyAsync(int id);

        
    }
}