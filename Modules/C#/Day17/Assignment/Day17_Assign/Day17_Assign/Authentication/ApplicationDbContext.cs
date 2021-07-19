using Day17_Assign.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Day17_Assign.Authentication
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
        {
        }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }


        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<DrugAllotment> DrugAllotments { get; set; }
        public virtual DbSet<Patient> Patients { get; set; }
        public virtual DbSet<Treatment> Treatments { get; set; }
        public virtual DbSet<staff> staff { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AI");

            modelBuilder.Entity<Department>(entity =>
            {
                entity.ToTable("Department");

                entity.Property(e => e.DepartmentId)
                    .ValueGeneratedNever()
                    .HasColumnName("DepartmentID");

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
                    .HasConstraintName("FK__DrugAllot__Patie__403A8C7D");
            });

            modelBuilder.Entity<Patient>(entity =>
            {
                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("ID");

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

            modelBuilder.Entity<staff>(entity =>
            {
                entity.ToTable("Staff");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("ID");

                entity.Property(e => e.Name).HasMaxLength(40);

                entity.Property(e => e.Position).HasMaxLength(20);

                entity.HasOne(d => d.DepartmentNavigation)
                    .WithMany(p => p.staff)
                    .HasForeignKey(d => d.Department)
                    .HasConstraintName("FK__Staff__Departmen__38996AB5");
            });
            base.OnModelCreating(modelBuilder);

        }
    }
}
