﻿using Application.Profiles.DTOs;
using Domain;

namespace API.DTOs
{
    public class ActivityDto
    {
        public required string Id { get; set; }

        public required string Title { get; set; }
        public DateTime Date { get; set; }
        public required string Description { get; set; }
        public required string Category { get; set; }
        public bool IsCancelled { get; set; }

        // locatiion props

        public required string City { get; set; }
        public required string Venue { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }

        //navigation properties
        public ICollection<UserProfile> Attendees { get; set; } = [];
    }
}
