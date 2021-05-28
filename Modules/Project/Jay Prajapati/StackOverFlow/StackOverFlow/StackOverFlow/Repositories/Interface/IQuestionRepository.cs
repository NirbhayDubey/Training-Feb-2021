﻿using StackOverFlow.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StackOverFlow.Repositories.Interface
{
    public interface IQuestionRepository : IGenericRepository<Question>
    {
        public bool ValidateUserQuestion(int userId, int queId);
        public void UpdateQuestion(int queId, Question Que);
    }
}
