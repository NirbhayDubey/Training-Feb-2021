﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Day12_prac.Models
{
    public class Student
    {
        public int StudentId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int CourseId { get; set; }
        public Course Course { get; set; }
    }
}