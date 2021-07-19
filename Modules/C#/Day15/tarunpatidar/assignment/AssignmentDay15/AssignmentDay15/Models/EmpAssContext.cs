using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AssignmentDay15.Models
{
    public partial class EmpAssContext : DbContext
    {
        public EmpAssContext()
        {

        }

        public EmpAssContext(DbContextOptions<EmpAssContext> options) : base(options)
        {

        }

        public virtual DbSet<Assignment> Assignments { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=DESKTOP-4KO4R8R\\SQLEXPRESS03;Database=EmpAss;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_CP1_CI_AS");

            modelBuilder.Entity<Assignment>(entity =>
            {
                entity.HasKey(e => e.AssignmentId)
                .HasName("PK_Assignme_6278FABED5ABA858");

                entity.Property(e => e.AssignmentId)
                .ValueGeneratedNever()
                .HasColumnName("AssignmentID");

                entity.Property(e => e.ActionCode)
               .HasMaxLength(50)
               .IsUnicode(false);

                entity.Property(e => e.AssignmentName)
                .HasMaxLength(50)
               .IsUnicode(false);

                entity.Property(e => e.AssignmentStatus)
                .HasMaxLength(50)
               .IsUnicode(false);

                entity.Property(e => e.EmpId).HasColumnName("EmoID");

                entity.Property(e => e.Lastdate).HasColumnType("date");

                entity.HasOne(d => d.Emp)
                .WithMany(p => p.Assignments)
                .HasForeignKey(d => d.EmpId)
                .HasConstraintName("FK_Assignments_Employees");

            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.HasKey(e => e.EmpId)
                .HasName("PK_Employee_AF2DBB992FC51948");

                entity.Property(e => e.EmpId).ValueGeneratedNever();

                entity.Property(e => e.Dob).HasColumnType("date");

                entity.Property(e => e.FirstName)
                .HasMaxLength(50)
                .IsUnicode(false);

                entity.Property(e => e.Gender)
               .HasMaxLength(50)
               .IsUnicode(false);

                entity.Property(e => e.HireDate).HasColumnType("date");

                entity.Property(e => e.LastName)
               .HasMaxLength(50)
               .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);

        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
