using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Hospital.Models
{
    public partial class HospitalContext : DbContext
    {
        public HospitalContext()
        {
        }

        public HospitalContext(DbContextOptions<HospitalContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<Drug> Drug { get; set; }
        public virtual DbSet<Patient> Patients { get; set; }
        public virtual DbSet<Treatment> Treatments { get; set; }
        public virtual DbSet<Staff> Staff { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code.You can avoid scaffolding the connection string by using the Name = syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-4KO4R8R\\SQLEXPRESS03;Database=HospitalDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Department>(entity =>
            {
                entity.ToTable("Department");

                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");

                entity.Property(e => e.DepartmentName).HasMaxLength(40);
            });

            modelBuilder.Entity<Drug>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Drug");

                entity.Property(e => e.Afternoon).HasMaxLength(5);

                entity.Property(e => e.DrugName).HasMaxLength(20);

                entity.Property(e => e.Evenning).HasMaxLength(5);

                entity.Property(e => e.Morning).HasMaxLength(5);

                entity.Property(e => e.Night).HasMaxLength(5);

                entity.Property(e => e.PatientId).HasColumnName("PatientID");

                entity.HasOne(d => d.Patient)
                    .WithMany()
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("FK__Drug__Patie__403A8C7D");
            });

            modelBuilder.Entity<Patient>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.City).HasMaxLength(20);

                entity.Property(e => e.Name).HasMaxLength(40);

                entity.HasOne(d => d.DepartmentNavigation)
                    .WithMany(p => p.Patients)
                    .HasForeignKey(d => d.Department)
                    .HasConstraintName("FK__Patients__Depart__3B75D760");
            });

            modelBuilder.Entity<Treatment>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Treatment");

                entity.Property(e => e.PatientId).HasColumnName("PatientID");

                entity.Property(e => e.StaffId).HasColumnName("StaffID");

                entity.Property(e => e.TreatmentName).HasMaxLength(50);

                entity.HasOne(d => d.Patient)
                    .WithMany()
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("FK__Treatment__Patie__3D5E1FD2");

                entity.HasOne(d => d.Staff)
                    .WithMany()
                    .HasForeignKey(d => d.StaffId)
                    .HasConstraintName("FK__Treatment__Staff__3E52440B");
            });

            modelBuilder.Entity<Staff>(entity =>
            {
                entity.ToTable("Staff");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Name).HasMaxLength(40);

                entity.Property(e => e.Position).HasMaxLength(20);

                entity.HasOne(d => d.DepartmentNavigation)
                    .WithMany(p => p.staff)
                    .HasForeignKey(d => d.Department)
                    .HasConstraintName("FK__Staff__Departmen__38996AB5");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}


