using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Comment
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public required string Body { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;


        public required string UserId { get; set; }
        public required User User { get; set; }
        public required string ActivityId { get; set; }
        public required Activity Activity { get; set; }
    }
}
