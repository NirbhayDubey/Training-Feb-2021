using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectBigBasket.Migrations
{
    public partial class first : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            //migrationBuilder.CreateTable(
            //    name: "Cart",
            //    columns: table => new
            //    {
            //        CartID = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        Time = table.Column<TimeSpan>(type: "time", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Cart", x => x.CartID);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Category",
            //    columns: table => new
            //    {
            //        CategoryId = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false),
            //        CategoryName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Category", x => x.CategoryId);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Country",
            //    columns: table => new
            //    {
            //        Country_ID = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false),
            //        CountryName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Country", x => x.Country_ID);
            //    });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderKey = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            //migrationBuilder.CreateTable(
            //    name: "Brand",
            //    columns: table => new
            //    {
            //        BrandID = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false),
            //        BrandName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        CategoryID = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Brand", x => x.BrandID);
            //        table.ForeignKey(
            //            name: "FKCatID",
            //            column: x => x.CategoryID,
            //            principalTable: "Category",
            //            principalColumn: "CategoryId",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "City",
            //    columns: table => new
            //    {
            //        City_ID = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
            //        Country_ID = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false),
            //        City_Name = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_City", x => x.City_ID);
            //        table.ForeignKey(
            //            name: "FKCountryID",
            //            column: x => x.Country_ID,
            //            principalTable: "Country",
            //            principalColumn: "Country_ID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Product",
            //    columns: table => new
            //    {
            //        ProductID = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false),
            //        ProductName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        BrandID = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false),
            //        CartID = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        ProductPrice = table.Column<decimal>(type: "money", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Product", x => x.ProductID);
            //        table.ForeignKey(
            //            name: "FKBrandID",
            //            column: x => x.BrandID,
            //            principalTable: "Brand",
            //            principalColumn: "BrandID",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "FKCartID",
            //            column: x => x.CartID,
            //            principalTable: "Cart",
            //            principalColumn: "CartID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Address",
            //    columns: table => new
            //    {
            //        Addr_ID = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        Address = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        City_ID = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PKAddrID", x => x.Addr_ID);
            //        table.ForeignKey(
            //            name: "FKCityID",
            //            column: x => x.City_ID,
            //            principalTable: "City",
            //            principalColumn: "City_ID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Customer",
            //    columns: table => new
            //    {
            //        Cust_ID = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
            //        Cust_Name = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        Addr_ID = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        PhoneNo = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PKCustID", x => x.Cust_ID);
            //        table.ForeignKey(
            //            name: "FKAddrID",
            //            column: x => x.Addr_ID,
            //            principalTable: "Address",
            //            principalColumn: "Addr_ID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Sales",
            //    columns: table => new
            //    {
            //        ID = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
            //        ProductID = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false),
            //        ProductQty = table.Column<int>(type: "int", nullable: false),
            //        Discount = table.Column<double>(type: "float", nullable: false),
            //        GrossAmount = table.Column<decimal>(type: "money", nullable: false),
            //        InvoiceDate = table.Column<DateTime>(type: "date", nullable: false),
            //        ProductPrice = table.Column<decimal>(type: "money", nullable: false),
            //        Cust_ID = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
            //        ShippedAddress = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        Taxes = table.Column<decimal>(type: "money", nullable: false),
            //        InvoiceAmount = table.Column<decimal>(type: "money", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Sales", x => x.ID);
            //        table.ForeignKey(
            //            name: "FKCust_ID",
            //            column: x => x.Cust_ID,
            //            principalTable: "Customer",
            //            principalColumn: "Cust_ID",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "FKProductID",
            //            column: x => x.ProductID,
            //            principalTable: "Product",
            //            principalColumn: "ProductID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateIndex(
            //    name: "IX_Address_City_ID",
            //    table: "Address",
            //    column: "City_ID");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Brand_CategoryID",
            //    table: "Brand",
            //    column: "CategoryID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_City_Country_ID",
            //    table: "City",
            //    column: "Country_ID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Customer_Addr_ID",
            //    table: "Customer",
            //    column: "Addr_ID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Product_BrandID",
            //    table: "Product",
            //    column: "BrandID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Product_CartID",
            //    table: "Product",
            //    column: "CartID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Sales_Cust_ID",
            //    table: "Sales",
            //    column: "Cust_ID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Sales_ProductID",
            //    table: "Sales",
            //    column: "ProductID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            //migrationBuilder.DropTable(
            //    name: "Sales");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            //migrationBuilder.DropTable(
            //    name: "Customer");

            //migrationBuilder.DropTable(
            //    name: "Product");

            //migrationBuilder.DropTable(
            //    name: "Address");

            //migrationBuilder.DropTable(
            //    name: "Brand");

            //migrationBuilder.DropTable(
            //    name: "Cart");

            //migrationBuilder.DropTable(
            //    name: "City");

            //migrationBuilder.DropTable(
            //    name: "Category");

            //migrationBuilder.DropTable(
            //    name: "Country");
        }
    }
}
