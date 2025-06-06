﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Activities.DTOs
{
    public class CreateActivityDto
    {

        public string Title { get; set; } = string.Empty;

        public DateTime Date { get; set; }

        public string Description { get; set; } = string.Empty;

        public string Category { get; set; } = string.Empty;

        // locatiion props

        public string City { get; set; } = string.Empty;

        public string Venue { get; set; } = string.Empty;

        public double Latitude { get; set; }

        public double Longitude { get; set; }
    }
}
