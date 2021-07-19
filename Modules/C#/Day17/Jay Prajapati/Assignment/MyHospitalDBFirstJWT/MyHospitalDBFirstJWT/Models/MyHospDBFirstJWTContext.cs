using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace MyHospitalDBFirstJWT.Models
{
    public partial class MyHospDBFirstJWTContext : DbContext
    {
        

        public MyHospDBFirstJWTContext(DbContextOptions<MyHospDBFirstJWTContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Department> Department { get; set; }
        public virtual DbSet<DrugAllotment> DrugAllotment { get; set; }
        public virtual DbSet<Patients> Patients { get; set; }
        public virtual DbSet<Staff> Staff { get; set; }
        public virtual DbSet<Treatment> Treatment { get; set; }
        public virtual DbSet<UserInfo> UserInfo { get; set; }
        public virtual DbSet<VpatientsTreatment> VpatientsTreatment { get; set; }
        public virtual DbSet<VstaffDepartment> VstaffDepartment { get; set; }

        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Department>(entity =>
            {
                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");

                entity.Property(e => e.DepartmentName).HasMaxLength(40);
            });

            modelBuilder.Entity<DrugAllotment>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Afternoon).HasMaxLength(5);

                entity.Property(e => e.DrugName).HasMaxLength(20);

                entity.Property(e => e.Evenning).HasMaxLength(5);

                entity.Property(e => e.Morning).HasMaxLength(5);

                entity.Property(e => e.Night).HasMaxLength(5);

                entity.Property(e => e.PatientId).HasColumnName("PatientID");

                entity.HasOne(d => d.Patient)
                    .WithMany()
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("FK__DrugAllot__Patie__403A8C7D");
            });

            modelBuilder.Entity<Patients>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.City).HasMaxLength(20);

                entity.Property(e => e.Name).HasMaxLength(40);

                entity.HasOne(d => d.DepartmentNavigation)
                    .WithMany(p => p.Patients)
                    .HasForeignKey(d => d.Department)
                    .HasConstraintName("FK__Patients__Depart__3B75D760");
            });

            modelBuilder.Entity<Staff>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Name).HasMaxLength(40);

                entity.Property(e => e.Position).HasMaxLength(20);

                entity.HasOne(d => d.DepartmentNavigation)
                    .WithMany(p => p.Staff)
                    .HasForeignKey(d => d.Department)
                    .HasConstraintName("FK__Staff__Departmen__38996AB5");
            });

            modelBuilder.Entity<Treatment>(entity =>
            {
                entity.HasNoKey();

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

            modelBuilder.Entity<UserInfo>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__UserInfo__1788CC4CB67DF5E5");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VpatientsTreatment>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VPatientsTreatment");

                entity.Property(e => e.Department).HasMaxLength(40);

                entity.Property(e => e.PatientCity).HasMaxLength(20);

                entity.Property(e => e.PatientId).HasColumnName("PatientID");

                entity.Property(e => e.PatientName).HasMaxLength(40);

                entity.Property(e => e.StaffId).HasColumnName("StaffID");

                entity.Property(e => e.StaffName).HasMaxLength(40);

                entity.Property(e => e.Treatment).HasMaxLength(50);
            });

            modelBuilder.Entity<VstaffDepartment>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VStaffDepartment");

                entity.Property(e => e.Department).HasMaxLength(40);

                entity.Property(e => e.Name).HasMaxLength(40);

                entity.Property(e => e.Position).HasMaxLength(20);

                entity.Property(e => e.StaffId).HasColumnName("StaffID");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
