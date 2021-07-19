using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace NewEmpAssignAPI.Models
{
    public partial class EmpAssignDBContext : DbContext
    {
        public EmpAssignDBContext()
        {
        }

        public EmpAssignDBContext(DbContextOptions<EmpAssignDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Assignment> Assignments { get; set; }
        public virtual DbSet<EmpAssign> EmpAssigns { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=EmpAssignDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Assignment>(entity =>
            {
                entity.Property(e => e.AssignmentName).IsRequired();
            });

            modelBuilder.Entity<EmpAssign>(entity =>
            {
                entity.ToTable("EmpAssign");

                entity.Property(e => e.AssignemntId).HasColumnName("AssignemntID");

                entity.HasOne(d => d.Assignemnt)
                    .WithMany(p => p.EmpAssigns)
                    .HasForeignKey(d => d.AssignemntId)
                    .HasConstraintName("FK__EmpAssign__Assig__3A81B327");

                entity.HasOne(d => d.Emp)
                    .WithMany(p => p.EmpAssigns)
                    .HasForeignKey(d => d.EmpId)
                    .HasConstraintName("FK__EmpAssign__EmpId__398D8EEE");
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.Property(e => e.FirstName).IsRequired();
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
