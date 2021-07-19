using System;
using System.Collections.Generic;

#nullable disable

namespace StackOverFlow.Models
{
    public partial class WorkExperience
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public string JobTitle { get; set; }
        public string CompanyName { get; set; }
        public int? YearOfJoinning { get; set; }
        public string Responsibilities { get; set; }

        public virtual AppUser User { get; set; }
    }
}
