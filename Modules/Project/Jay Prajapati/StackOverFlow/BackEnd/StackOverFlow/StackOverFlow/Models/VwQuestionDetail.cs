using System;
using System.Collections.Generic;

#nullable disable

namespace StackOverFlow.Models
{
    public partial class VwQuestionDetail
    {
        public int QuestionId { get; set; }
        public string Question { get; set; }
        public int? NumberOfAnswers { get; set; }
        public int? TotalViews { get; set; }
        public int? VotesForQuestion { get; set; }
    }
}
