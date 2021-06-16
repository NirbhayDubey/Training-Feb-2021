﻿using StackOverFlow.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StackOverFlow.Repositories.Interface
{
    public interface ITagRepository : IGenericRepository<Tag>
    {
        public List<Tag> getByQueId(int queId);
        
    }
}
