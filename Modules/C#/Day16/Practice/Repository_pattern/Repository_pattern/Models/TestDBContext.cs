using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Repository_pattern.Models
{
    public partial class TestDBContext : DbContext
    {
        public TestDBContext()
        {
        }

        public TestDBContext(DbContextOptions<TestDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Adresses> Adresses { get; set; }
        public virtual DbSet<Countries> Countries { get; set; }
        public virtual DbSet<Course> Course { get; set; }
        public virtual DbSet<Courses> Courses { get; set; }
        public virtual DbSet<Departments> Departments { get; set; }
        public virtual DbSet<Emphistory> Emphistory { get; set; }
        public virtual DbSet<Employees> Employees { get; set; }
        public virtual DbSet<JobHistory> JobHistory { get; set; }
        public virtual DbSet<Locations> Locations { get; set; }
        public virtual DbSet<Person> Person { get; set; }
        public virtual DbSet<PersonSkills> PersonSkills { get; set; }
        public virtual DbSet<Persons> Persons { get; set; }
        public virtual DbSet<Student> Student { get; set; }
        public virtual DbSet<Students> Students { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer(@"Server=.\SQLEXPRESS01;Database=RepositorypatternDB;Trusted_Connection=True;");
            }
        }

    }
}