﻿using System;
using System.Collections.Generic;

#nullable disable

namespace SampleProject.Models
{
    public partial class Deposit
    {
        public string Actno { get; set; }
        public string Cname { get; set; }
        public string Bname { get; set; }
        public int? Amount { get; set; }
        public DateTime? Adate { get; set; }
    }
}
