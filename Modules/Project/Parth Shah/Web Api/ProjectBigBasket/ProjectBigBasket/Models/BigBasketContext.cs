using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ProjectBigBasket.Models
{
    public partial class BigBasketContext : IdentityDbContext<BigBasketUser>
    {
        public BigBasketContext()
        {
        }

        public BigBasketContext(DbContextOptions<BigBasketContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Address> Addresses { get; set; }
        public virtual DbSet<BbBrandCategory> BbBrandCategories { get; set; }
        public virtual DbSet<BbCategoryView> BbCategoryViews { get; set; }
        public virtual DbSet<BbCustomerAddress> BbCustomerAddresses { get; set; }
        public virtual DbSet<BbCustomerDeatil> BbCustomerDeatils { get; set; }
        public virtual DbSet<BbCustomerProduct> BbCustomerProducts { get; set; }
        public virtual DbSet<BbProductPurchased> BbProductPurchaseds { get; set; }
        public virtual DbSet<BbProductSold> BbProductSolds { get; set; }
        public virtual DbSet<BbproductDetail> BbproductDetails { get; set; }
        public virtual DbSet<Brand> Brands { get; set; }
        public virtual DbSet<Cart> Carts { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<City> Cities { get; set; }
        public virtual DbSet<Country> Countries { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Sale> Sales { get; set; }

        public virtual DbSet<BbBrandCat> BbBrandCats { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
                  optionsBuilder.UseSqlServer("Data Source=DESKTOP-VBU96E5\\SQLEXPRESS01;Initial Catalog=BigBasket;Integrated Security=True;");

            //            if (!optionsBuilder.IsConfigured)
            //            {
            //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
            //            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Address>(entity =>
            {
                entity.HasKey(e => e.AddrId)
                    .HasName("PKAddrID");

                entity.ToTable("Address");

                entity.Property(e => e.AddrId)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Addr_ID");

                entity.Property(e => e.Address1)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Address");

                entity.Property(e => e.CityId)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("City_ID");

                entity.HasOne(d => d.City)
                    .WithMany(p => p.Addresses)
                    .HasForeignKey(d => d.CityId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKCityID");
            });

            modelBuilder.Entity<BbBrandCategory>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("bbBrandCategory");

                entity.Property(e => e.BrandName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ProductName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<BbCategoryView>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("bbCategoryViews");

                entity.Property(e => e.CategoryId)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("CategoryID");

                entity.Property(e => e.CategoryName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<BbCustomerAddress>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("bbCustomerAddress");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CityName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("City_Name");

                entity.Property(e => e.CountryName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CustName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Cust_Name");
            });

            modelBuilder.Entity<BbCustomerDeatil>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("bbCustomerDeatils");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("ADDRESS");

                entity.Property(e => e.CustId)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("Cust_ID");
            });

            modelBuilder.Entity<BbCustomerProduct>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("bbCustomerProduct");

                entity.Property(e => e.CustId)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("Cust_ID");

                entity.Property(e => e.ProductId)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("ProductID");
            });

            modelBuilder.Entity<BbProductPurchased>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("bbProductPurchased");

                entity.Property(e => e.ProductId)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("ProductID");
            });

            modelBuilder.Entity<BbProductSold>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("bbProductSold");

                entity.Property(e => e.InvoiceDate).HasColumnType("date");
            });

            modelBuilder.Entity<BbproductDetail>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("BbproductDetail");

                entity.Property(e => e.BrandName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ProductId)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("ProductID");

                entity.Property(e => e.ProductName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<BbBrandCat>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("BbBrandCats");

                entity.Property(e => e.BrandName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BrandId)
                 .HasMaxLength(30)
                 .IsUnicode(false)
                 .HasColumnName("BrandID");

                entity.Property(e => e.CategoryId)
                   .IsRequired()
                   .HasMaxLength(30)
                   .IsUnicode(false)
                   .HasColumnName("CategoryID");


            });

            modelBuilder.Entity<Brand>(entity =>
            {
                entity.ToTable("Brand");

                entity.Property(e => e.BrandId)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("BrandID");

                entity.Property(e => e.BrandName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryId)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("CategoryID");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Brands)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKCatID");
            });

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.ToTable("Cart");

                entity.Property(e => e.CartId)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("CartID");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("Category");

                entity.Property(e => e.CategoryId)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<City>(entity =>
            {
                entity.ToTable("City");

                entity.Property(e => e.CityId)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("City_ID");

                entity.Property(e => e.CityName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("City_Name");

                entity.Property(e => e.CountryId)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("Country_ID");

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.Cities)
                    .HasForeignKey(d => d.CountryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKCountryID");
            });

            modelBuilder.Entity<Country>(entity =>
            {
                entity.ToTable("Country");

                entity.Property(e => e.CountryId)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("Country_ID");

                entity.Property(e => e.CountryName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.CustId)
                    .HasName("PKCustID");

                entity.ToTable("Customer");

                entity.Property(e => e.CustId)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("Cust_ID");

                entity.Property(e => e.AddrId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Addr_ID");

                entity.Property(e => e.CustName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Cust_Name");

                entity.HasOne(d => d.Addr)
                    .WithMany(p => p.Customers)
                    .HasForeignKey(d => d.AddrId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKAddrID");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("Product");

                entity.Property(e => e.ProductId)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("ProductID");

                entity.Property(e => e.BrandId)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("BrandID");

                entity.Property(e => e.CartId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("CartID");

                entity.Property(e => e.ProductName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ProductPrice).HasColumnType("money");

                entity.HasOne(d => d.Brand)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.BrandId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKBrandID");

                entity.HasOne(d => d.Cart)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.CartId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKCartID");
            });

            modelBuilder.Entity<Sale>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("ID");

                entity.Property(e => e.CustId)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("Cust_ID");

                entity.Property(e => e.GrossAmount).HasColumnType("money");

                entity.Property(e => e.InvoiceAmount).HasColumnType("money");

                entity.Property(e => e.InvoiceDate).HasColumnType("date");

                entity.Property(e => e.ProductId)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("ProductID");

                entity.Property(e => e.ProductPrice).HasColumnType("money");

                entity.Property(e => e.ShippedAddress)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Taxes).HasColumnType("money");

                entity.HasOne(d => d.Cust)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.CustId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKCust_ID");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKProductID");
            });

            base.OnModelCreating(modelBuilder);
            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
