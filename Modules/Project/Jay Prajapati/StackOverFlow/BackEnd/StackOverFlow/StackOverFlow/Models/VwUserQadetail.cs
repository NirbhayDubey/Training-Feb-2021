using System;
using System.Collections.Generic;

#nullable disable

namespace StackOverFlow.Models
{
    public partial class VwUserQadetail
    {
        public int UserId { get; set; }
        public string FullName { get; set; }
        public int? NumberOfQuestionsAsked { get; set; }
        public int? NumberOfAnwersGive { get; set; }
        public int? NumberOfBadgesEarned { get; set; }
    }
}
