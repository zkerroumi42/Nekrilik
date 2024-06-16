using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.interfaces;
using api.Model;
using api.Dtos;
using Microsoft.EntityFrameworkCore;
using api.Data;
using api.Enums;

namespace api.Repositories
{
    public class PropertyRepository : IPropertyRepository
    {
        private readonly ApiDbContext _context;

        public PropertyRepository(ApiDbContext context)
        {
            _context = context;
        }

        public async Task<Property> CreatePropertyAsync(CreatePropertyDto createPropertyDto)
        {
            var property = new Property
            {
                Title = createPropertyDto.Title,
                Description = createPropertyDto.Description,
                Address = createPropertyDto.Address,
                Photo = createPropertyDto.Photo,
                // State = createPropertyDto.State,
                ZipCode = createPropertyDto.ZipCode,
                PropertyType = createPropertyDto.PropertyType,
                RentalType = createPropertyDto.RentalType,
                Price = createPropertyDto.Price,
                PropertyStatus = createPropertyDto.PropertyStatus,
                MaxGuests = createPropertyDto.MaxGuests,
                DateListed = DateTime.UtcNow,
                AppUserId = createPropertyDto.AppUserId,
            };

            _context.Properties.Add(property);
            await _context.SaveChangesAsync();

            return property;
        }

        public async Task<List<Property>> GetPropertiesAsync()
        {
            return await _context.Properties
                .Include(p => p.Owner)
                .Include(p => p.Reviews)
                .ToListAsync();
        }

        public async Task<Property> GetPropertyByIdAsync(int id)
        {
            return await _context.Properties
                .Include(p => p.Owner)
                .Include(p => p.Reviews)
                .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<Property> UpdatePropertyAsync(CreatePropertyDto updatePropertyDto, int id)
        {
            var property = await _context.Properties.FindAsync(id);
            if (property == null)
            {
                return null;
            }

            property.Title = updatePropertyDto.Title;
            property.Description = updatePropertyDto.Description;
            property.Address = updatePropertyDto.Address;
            property.Photo = updatePropertyDto.Photo;
            // property.State = updatePropertyDto.State;
            property.ZipCode = updatePropertyDto.ZipCode;
            property.PropertyType = updatePropertyDto.PropertyType;
            property.RentalType = updatePropertyDto.RentalType;
            property.Price = updatePropertyDto.Price;
            property.PropertyStatus = updatePropertyDto.PropertyStatus;
            property.MaxGuests = updatePropertyDto.MaxGuests;
            property.AppUserId = updatePropertyDto.AppUserId;

            await _context.SaveChangesAsync();

            return property;
        }

        public async Task<bool> DeletePropertyAsync(int id)
        {
            var property = await _context.Properties.FindAsync(id);
            if (property == null)
            {
                return false;
            }

            _context.Properties.Remove(property);
            await _context.SaveChangesAsync();

            return true;
        }

    public async Task<int> GetPropertiesCountAsync()
    {
        return await _context.Properties.CountAsync();
    }

         public async Task<List<Property>> SearchByTypeAsync(PropertyType propertyType)
        {
            var properties = await _context.Properties
                .Where(p => p.PropertyType== propertyType)
                .ToListAsync();

            return properties;
        }
         public async Task<List<Property>> SearchByRentalTypeAsync(RentalType rentalType)
        {
            var properties = await _context.Properties
                .Where(p => p.RentalType== rentalType)
                .ToListAsync();

            return properties;
        }

         public async Task<List<Property>> SearchByPropertyStatuseAsync(PropertyStatus status)
        {
            var properties = await _context.Properties
                .Where(p => p.PropertyStatus== status)
                .ToListAsync();

            return properties;
        }

    }
}
