using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace sample.Models
{
    public partial class HospitalAuthenticationJWTDBContext : DbContext
    {
        public HospitalAuthenticationJWTDBContext()
        {
        }

        public HospitalAuthenticationJWTDBContext(DbContextOptions<HospitalAuthenticationJWTDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AspNetRole> AspNetRoles { get; set; }
        public virtual DbSet<AspNetRoleClaim> AspNetRoleClaims { get; set; }
        public virtual DbSet<AspNetUser> AspNetUsers { get; set; }
        public virtual DbSet<AspNetUserClaim> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogin> AspNetUserLogins { get; set; }
        public virtual DbSet<AspNetUserRole> AspNetUserRoles { get; set; }
        public virtual DbSet<AspNetUserToken> AspNetUserTokens { get; set; }
        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<DrugAllotment> DrugAllotments { get; set; }
        public virtual DbSet<Patient> Patients { get; set; }
        public virtual DbSet<Treatment> Treatments { get; set; }
        public virtual DbSet<VpatientsTreatment> VpatientsTreatments { get; set; }
        public virtual DbSet<VstaffDepartment> VstaffDepartments { get; set; }
        public virtual DbSet<staff> staff { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=HospitalAuthenticationJWTDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<AspNetRole>(entity =>
            {
                entity.HasIndex(e => e.NormalizedName, "RoleNameIndex")
                    .IsUnique()
                    .HasFilter("([NormalizedName] IS NOT NULL)");

                entity.Property(e => e.Name).HasMaxLength(256);

                entity.Property(e => e.NormalizedName).HasMaxLength(256);
            });

            modelBuilder.Entity<AspNetRoleClaim>(entity =>
            {
                entity.HasIndex(e => e.RoleId, "IX_AspNetRoleClaims_RoleId");

                entity.Property(e => e.RoleId).IsRequired();

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetRoleClaims)
                    .HasForeignKey(d => d.RoleId);
            });

            modelBuilder.Entity<AspNetUser>(entity =>
            {
                entity.HasIndex(e => e.NormalizedEmail, "EmailIndex");

                entity.HasIndex(e => e.NormalizedUserName, "UserNameIndex")
                    .IsUnique()
                    .HasFilter("([NormalizedUserName] IS NOT NULL)");

                entity.Property(e => e.Email).HasMaxLength(256);

                entity.Property(e => e.NormalizedEmail).HasMaxLength(256);

                entity.Property(e => e.NormalizedUserName).HasMaxLength(256);

                entity.Property(e => e.UserName).HasMaxLength(256);
            });

            modelBuilder.Entity<AspNetUserClaim>(entity =>
            {
                entity.HasIndex(e => e.UserId, "IX_AspNetUserClaims_UserId");

                entity.Property(e => e.UserId).IsRequired();

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserClaims)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserLogin>(entity =>
            {
                entity.HasKey(e => new { e.LoginProvider, e.ProviderKey });

                entity.HasIndex(e => e.UserId, "IX_AspNetUserLogins_UserId");

                entity.Property(e => e.UserId).IsRequired();

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserLogins)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserRole>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.RoleId });

                entity.HasIndex(e => e.RoleId, "IX_AspNetUserRoles_RoleId");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.RoleId);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserToken>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.LoginProvider, e.Name });

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserTokens)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<Department>(entity =>
            {
                entity.ToTable("Department");

                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");

                entity.Property(e => e.DepartmentName).HasMaxLength(40);
            });

            modelBuilder.Entity<DrugAllotment>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("DrugAllotment");

                entity.Property(e => e.Afternoon).HasMaxLength(5);

                entity.Property(e => e.DrugName).HasMaxLength(20);

                entity.Property(e => e.Evenning).HasMaxLength(5);

                entity.Property(e => e.Morning).HasMaxLength(5);

                entity.Property(e => e.Night).HasMaxLength(5);

                entity.Property(e => e.PatientId).HasColumnName("PatientID");

                entity.HasOne(d => d.Patient)
                    .WithMany()
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("FK__DrugAllot__Patie__66603565");
            });

            modelBuilder.Entity<Patient>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.City).HasMaxLength(20);

                entity.Property(e => e.Name).HasMaxLength(40);

                entity.HasOne(d => d.DepartmentNavigation)
                    .WithMany(p => p.Patients)
                    .HasForeignKey(d => d.Department)
                    .HasConstraintName("FK__Patients__Depart__619B8048");
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
                    .HasConstraintName("FK__Treatment__Patie__6383C8BA");

                entity.HasOne(d => d.Staff)
                    .WithMany()
                    .HasForeignKey(d => d.StaffId)
                    .HasConstraintName("FK__Treatment__Staff__6477ECF3");
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

            modelBuilder.Entity<staff>(entity =>
            {
                entity.ToTable("Staff");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Name).HasMaxLength(40);

                entity.Property(e => e.Position).HasMaxLength(20);

                entity.HasOne(d => d.DepartmentNavigation)
                    .WithMany(p => p.staff)
                    .HasForeignKey(d => d.Department)
                    .HasConstraintName("FK__Staff__Departmen__5EBF139D");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
