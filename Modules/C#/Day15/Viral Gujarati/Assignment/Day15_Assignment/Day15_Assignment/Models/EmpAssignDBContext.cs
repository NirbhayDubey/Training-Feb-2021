using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Day15_Assignment.Models;

namespace Day15_Assignment.Models
{
    public class EmpAssignDBContext : DbContext
    {
        public EmpAssignDBContext()
        {



        }
        public EmpAssignDBContext(DbContextOptions<EmpAssignDBContext> options) : base(options)
        {



        }
        public object Assignments { get; internal set; }
        public object Employees { get; internal set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=.\SQLEXPRESS01;Database=EmpAssignDB;Trusted_Connection=True;");
        }


        public DbSet<Day15_Assignment.Models.Employee> Employee { get; set; }


        public DbSet<Day15_Assignment.Models.Assignment> Assignment { get; set; }

    }
}
