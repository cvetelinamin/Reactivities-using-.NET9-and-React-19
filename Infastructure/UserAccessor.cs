﻿using Application.Interfaces;
using Domain;
using Microsoft.AspNetCore.Http;
using Persistence;
using System.Security.Claims;

namespace Infrastructure
{
    public class UserAccessor(IHttpContextAccessor httpContextAccessor, AppDbContext dbContext) : IUserAccessor
    {
        public async Task<User> GetUserAsync()
        {
            return await dbContext.Users.FindAsync(GetUserId())
                ?? throw new UnauthorizedAccessException("No user is loged in");
        }

        public string GetUserId()
        {
            return httpContextAccessor.HttpContext?.User.FindFirstValue(ClaimTypes.NameIdentifier)
                ?? throw new Exception("No user found");
        }
    }
}
