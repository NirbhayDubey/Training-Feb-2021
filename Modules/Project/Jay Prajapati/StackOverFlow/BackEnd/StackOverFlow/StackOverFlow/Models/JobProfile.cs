using System;
using System.Collections.Generic;

#nullable disable

namespace StackOverFlow.Models
{
    public partial class JobProfile
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public string JobType { get; set; }
        public string Role { get; set; }
        public string JobSearchStatus { get; set; }
        public string Industry { get; set; }
        public decimal? MinAnnualSalary { get; set; }
        public int? MinExperience { get; set; }
        public int? MaxExperience { get; set; }

        public virtual AppUser User { get; set; }
    }
}
