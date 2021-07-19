using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Project_Hotstar.Models.Authentication;

#nullable disable

namespace ProjectHotstar.Models
{
    public partial class HotstarContext : IdentityDbContext<ApplicationUser>
    {
        public HotstarContext()
        {
        }

        public HotstarContext(DbContextOptions<HotstarContext> options)
            : base(options)
        {
        }
        public virtual DbSet<Content> Contents { get; set; }
        public virtual DbSet<Movie> Movies { get; set; }
        public virtual DbSet<News> News { get; set; }
        public virtual DbSet<Plan> Plans { get; set; }
        public virtual DbSet<PlanFeature> PlanFeatures { get; set; }
        public virtual DbSet<Sport> Sports { get; set; }
        public virtual DbSet<Subscription> Subscriptions { get; set; }
        public virtual DbSet<Tv> Tvs { get; set; }
        public virtual DbSet<UserAccount> UserAccounts { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
            //optionsBuilder.UseSqlServer("Server=VIRALGUJARATI\\SQLEXPRESS01;Database=Hotstar;Trusted_Connection=True;");

//            if (!optionsBuilder.IsConfigured)
//            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//            }
        //}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AI");

            
           
            modelBuilder.Entity<Content>(entity =>
            {
                entity.ToTable("Content");

                entity.Property(e => e.ContentId).HasColumnName("ContentID");

                entity.Property(e => e.Episode).HasMaxLength(50);

                entity.Property(e => e.Genre).HasMaxLength(50);

                entity.Property(e => e.ReleaseDate).HasColumnType("datetime");

                entity.Property(e => e.Title).HasMaxLength(50);
            });

            modelBuilder.Entity<Movie>(entity =>
            {
                entity.Property(e => e.MovieId).HasColumnName("MovieID");

                entity.Property(e => e.ContentId).HasColumnName("ContentID");

                entity.Property(e => e.MovieLanguage)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.MovieTitle)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.HasOne(d => d.Content)
                    .WithMany(p => p.Movies)
                    .HasForeignKey(d => d.ContentId)
                    .HasConstraintName("FK__Movies__ContentI__34C8D9D1");
            });

            modelBuilder.Entity<News>(entity =>
            {
                entity.Property(e => e.NewsId).HasColumnName("NewsID");

                entity.Property(e => e.ContentId).HasColumnName("ContentID");

                entity.Property(e => e.MovieLanguage)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.NewsTitle)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.HasOne(d => d.Content)
                    .WithMany(p => p.News)
                    .HasForeignKey(d => d.ContentId)
                    .HasConstraintName("FK__News__ContentID__3A81B327");
            });

            modelBuilder.Entity<Plan>(entity =>
            {
                entity.ToTable("Plan");

                entity.Property(e => e.PlanId).HasColumnName("PlanID");

                entity.Property(e => e.PlanName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Price).HasColumnType("money");

                entity.Property(e => e.SubscriptionPlan)
                    .IsRequired()
                    .HasMaxLength(30);
            });

            modelBuilder.Entity<PlanFeature>(entity =>
            {
                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("ID");

                entity.Property(e => e.Free)
                    .HasMaxLength(1)
                    .HasColumnName("FREE")
                    .IsFixedLength(true);

                entity.Property(e => e.PlanId).HasColumnName("PlanID");

                entity.Property(e => e.Premium)
                    .HasMaxLength(1)
                    .HasColumnName("PREMIUM")
                    .IsFixedLength(true);

                entity.Property(e => e.Vip)
                    .HasMaxLength(1)
                    .HasColumnName("VIP")
                    .IsFixedLength(true);

                entity.HasOne(d => d.Plan)
                    .WithMany(p => p.PlanFeatures)
                    .HasForeignKey(d => d.PlanId)
                    .HasConstraintName("FK__PlanFeatu__PlanI__2C3393D0");
            });

            modelBuilder.Entity<Sport>(entity =>
            {
                entity.HasKey(e => e.SportsId)
                    .HasName("PK__Sports__E1741EE10B303054");

                entity.Property(e => e.SportsId).HasColumnName("SportsID");

                entity.Property(e => e.ContentId).HasColumnName("ContentID");

                entity.Property(e => e.SportsTitle)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.SportsType)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.HasOne(d => d.Content)
                    .WithMany(p => p.Sports)
                    .HasForeignKey(d => d.ContentId)
                    .HasConstraintName("FK__Sports__ContentI__37A5467C");
            });

            modelBuilder.Entity<Subscription>(entity =>
            {
                entity.ToTable("SUBSCRIPTION");

                entity.Property(e => e.SubscriptionId).HasColumnName("SubscriptionID");

                entity.Property(e => e.CustomerId).HasColumnName("CustomerID");

                entity.Property(e => e.DateOfSubscription).HasColumnType("datetime");

                entity.Property(e => e.PlanId).HasColumnName("PlanID");

                entity.Property(e => e.ValidThrough).HasColumnType("datetime");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Subscriptions)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("FK__SUBSCRIPT__Custo__2F10007B");

                entity.HasOne(d => d.Plan)
                    .WithMany(p => p.Subscriptions)
                    .HasForeignKey(d => d.PlanId)
                    .HasConstraintName("FK__SUBSCRIPT__PlanI__300424B4");
            });

            modelBuilder.Entity<Tv>(entity =>
            {
                entity.ToTable("TV");

                entity.Property(e => e.Tvid).HasColumnName("TVID");

                entity.Property(e => e.ChannelLanguage)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.ChannelName)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.ContentId).HasColumnName("ContentID");

                entity.Property(e => e.Title).HasMaxLength(50);

                entity.HasOne(d => d.Content)
                    .WithMany(p => p.Tvs)
                    .HasForeignKey(d => d.ContentId)
                    .HasConstraintName("FK__TV__ContentID__3D5E1FD2");
            });

            modelBuilder.Entity<UserAccount>(entity =>
            {
                entity.HasKey(e => e.CustomerId)
                    .HasName("PK__UserAcco__A4AE64B8ADB0F632");

                entity.ToTable("UserAccount");

                entity.HasIndex(e => e.ApplicationUserId, "IX_UserAccount_ApplicationUserId");

                entity.HasIndex(e => e.Email, "UQ__UserAcco__A9D105342E192F09")
                    .IsUnique();

                entity.Property(e => e.CustomerId).HasColumnName("CustomerID");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.Dob)
                    .HasColumnType("date")
                    .HasColumnName("DOB");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.HasOne(d => d.ApplicationUser)
                    .WithOne(p => p.UserAccount);
                    //.HasForeignKey(d => d.ApplicationUserId);
            });

        }

    }
}
