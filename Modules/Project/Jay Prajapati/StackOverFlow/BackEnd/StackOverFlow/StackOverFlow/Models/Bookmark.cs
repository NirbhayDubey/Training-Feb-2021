using System;
using System.Collections.Generic;

#nullable disable

namespace StackOverFlow.Models
{
    public partial class Bookmark
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public int? QuestionId { get; set; }

        public virtual Question Question { get; set; }
        public virtual AppUser User { get; set; }
    }
}
