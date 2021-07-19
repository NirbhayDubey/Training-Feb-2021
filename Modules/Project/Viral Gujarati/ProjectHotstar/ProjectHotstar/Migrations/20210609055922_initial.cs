using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectHotstar.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {



            //migrationBuilder.CreateTable(
            //    name: "AspNetRoles",
            //    columns: table => new
            //    {
            //        Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
            //        Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
            //        NormalizedName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
            //        ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_AspNetRoles", x => x.Id);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "AspNetUsers",
            //    columns: table => new
            //    {
            //        Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
            //        UserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
            //        NormalizedUserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
            //        Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
            //        NormalizedEmail = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
            //        EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
            //        PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
            //        TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
            //        LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
            //        LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
            //        AccessFailedCount = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_AspNetUsers", x => x.Id);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Content",
            //    columns: table => new
            //    {
            //        ContentID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Title = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
            //        Episode = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
            //        Genre = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
            //        ReleaseDate = table.Column<DateTime>(type: "datetime", nullable: true),
            //        SuitableAge = table.Column<int>(type: "int", nullable: true),
            //        Description = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Content", x => x.ContentID);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Plan",
            //    columns: table => new
            //    {
            //        PlanID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        PlanName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
            //        SubscriptionPlan = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
            //        Price = table.Column<decimal>(type: "money", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Plan", x => x.PlanID);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "UserAccount",
            //    columns: table => new
            //    {
            //        CustomerID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Name = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
            //        PhoneNumber = table.Column<int>(type: "int", nullable: false),
            //        Email = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
            //        Address = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
            //        DOB = table.Column<DateTime>(type: "date", nullable: true),
            //        ApplicationUserId = table.Column<string>(type: "nvarchar(450)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK__UserAcco__A4AE64B8ADB0F632", x => x.CustomerID);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "AspNetRoleClaims",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false),
            //        ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
            //        table.ForeignKey(
            //            name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
            //            column: x => x.RoleId,
            //            principalTable: "AspNetRoles",
            //            principalColumn: "Id",
            //            onDelete: ReferentialAction.Cascade);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "AspNetUserClaims",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
            //        ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
            //        table.ForeignKey(
            //            name: "FK_AspNetUserClaims_AspNetUsers_UserId",
            //            column: x => x.UserId,
            //            principalTable: "AspNetUsers",
            //            principalColumn: "Id",
            //            onDelete: ReferentialAction.Cascade);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "AspNetUserLogins",
            //    columns: table => new
            //    {
            //        LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
            //        ProviderKey = table.Column<string>(type: "nvarchar(450)", nullable: false),
            //        ProviderDisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
            //        table.ForeignKey(
            //            name: "FK_AspNetUserLogins_AspNetUsers_UserId",
            //            column: x => x.UserId,
            //            principalTable: "AspNetUsers",
            //            principalColumn: "Id",
            //            onDelete: ReferentialAction.Cascade);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "AspNetUserRoles",
            //    columns: table => new
            //    {
            //        UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
            //        RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
            //        table.ForeignKey(
            //            name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
            //            column: x => x.RoleId,
            //            principalTable: "AspNetRoles",
            //            principalColumn: "Id",
            //            onDelete: ReferentialAction.Cascade);
            //        table.ForeignKey(
            //            name: "FK_AspNetUserRoles_AspNetUsers_UserId",
            //            column: x => x.UserId,
            //            principalTable: "AspNetUsers",
            //            principalColumn: "Id",
            //            onDelete: ReferentialAction.Cascade);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "AspNetUserTokens",
            //    columns: table => new
            //    {
            //        UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
            //        LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
            //        Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
            //        Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
            //        table.ForeignKey(
            //            name: "FK_AspNetUserTokens_AspNetUsers_UserId",
            //            column: x => x.UserId,
            //            principalTable: "AspNetUsers",
            //            principalColumn: "Id",
            //            onDelete: ReferentialAction.Cascade);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Movies",
            //    columns: table => new
            //    {
            //        MovieID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        ContentID = table.Column<int>(type: "int", nullable: true),
            //        MovieTitle = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
            //        MovieLanguage = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Movies", x => x.MovieID);
            //        table.ForeignKey(
            //            name: "FK__Movies__ContentI__34C8D9D1",
            //            column: x => x.ContentID,
            //            principalTable: "Content",
            //            principalColumn: "ContentID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "News",
            //    columns: table => new
            //    {
            //        NewsID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        ContentID = table.Column<int>(type: "int", nullable: true),
            //        NewsTitle = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
            //        MovieLanguage = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_News", x => x.NewsID);
            //        table.ForeignKey(
            //            name: "FK__News__ContentID__3A81B327",
            //            column: x => x.ContentID,
            //            principalTable: "Content",
            //            principalColumn: "ContentID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Sports",
            //    columns: table => new
            //    {
            //        SportsID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        ContentID = table.Column<int>(type: "int", nullable: true),
            //        SportsType = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
            //        SportsTitle = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK__Sports__E1741EE10B303054", x => x.SportsID);
            //        table.ForeignKey(
            //            name: "FK__Sports__ContentI__37A5467C",
            //            column: x => x.ContentID,
            //            principalTable: "Content",
            //            principalColumn: "ContentID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "TV",
            //    columns: table => new
            //    {
            //        TVID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        ContentID = table.Column<int>(type: "int", nullable: true),
            //        Title = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
            //        ChannelName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
            //        ChannelLanguage = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_TV", x => x.TVID);
            //        table.ForeignKey(
            //            name: "FK__TV__ContentID__3D5E1FD2",
            //            column: x => x.ContentID,
            //            principalTable: "Content",
            //            principalColumn: "ContentID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "PlanFeatures",
            //    columns: table => new
            //    {
            //        ID = table.Column<int>(type: "int", nullable: false),
            //        Features = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        FREE = table.Column<byte[]>(type: "binary(1)", fixedLength: true, maxLength: 1, nullable: true),
            //        VIP = table.Column<byte[]>(type: "binary(1)", fixedLength: true, maxLength: 1, nullable: true),
            //        PREMIUM = table.Column<byte[]>(type: "binary(1)", fixedLength: true, maxLength: 1, nullable: true),
            //        PlanID = table.Column<int>(type: "int", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_PlanFeatures", x => x.ID);
            //        table.ForeignKey(
            //            name: "FK__PlanFeatu__PlanI__2C3393D0",
            //            column: x => x.PlanID,
            //            principalTable: "Plan",
            //            principalColumn: "PlanID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "SUBSCRIPTION",
            //    columns: table => new
            //    {
            //        SubscriptionID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        CustomerID = table.Column<int>(type: "int", nullable: true),
            //        PlanID = table.Column<int>(type: "int", nullable: true),
            //        DateOfSubscription = table.Column<DateTime>(type: "datetime", nullable: true),
            //        ValidThrough = table.Column<DateTime>(type: "datetime", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_SUBSCRIPTION", x => x.SubscriptionID);
            //        table.ForeignKey(
            //            name: "FK__SUBSCRIPT__Custo__2F10007B",
            //            column: x => x.CustomerID,
            //            principalTable: "UserAccount",
            //            principalColumn: "CustomerID",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "FK__SUBSCRIPT__PlanI__300424B4",
            //            column: x => x.PlanID,
            //            principalTable: "Plan",
            //            principalColumn: "PlanID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateIndex(
            //    name: "IX_AspNetRoleClaims_RoleId",
            //    table: "AspNetRoleClaims",
            //    column: "RoleId");

            //migrationBuilder.CreateIndex(
            //    name: "RoleNameIndex",
            //    table: "AspNetRoles",
            //    column: "NormalizedName",
            //    unique: true,
            //    filter: "[NormalizedName] IS NOT NULL");

            //migrationBuilder.CreateIndex(
            //    name: "IX_AspNetUserClaims_UserId",
            //    table: "AspNetUserClaims",
            //    column: "UserId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_AspNetUserLogins_UserId",
            //    table: "AspNetUserLogins",
            //    column: "UserId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_AspNetUserRoles_RoleId",
            //    table: "AspNetUserRoles",
            //    column: "RoleId");

            //migrationBuilder.CreateIndex(
            //    name: "EmailIndex",
            //    table: "AspNetUsers",
            //    column: "NormalizedEmail");

            //migrationBuilder.CreateIndex(
            //    name: "UserNameIndex",
            //    table: "AspNetUsers",
            //    column: "NormalizedUserName",
            //    unique: true,
            //    filter: "[NormalizedUserName] IS NOT NULL");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Movies_ContentID",
            //    table: "Movies",
            //    column: "ContentID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_News_ContentID",
            //    table: "News",
            //    column: "ContentID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_PlanFeatures_PlanID",
            //    table: "PlanFeatures",
            //    column: "PlanID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Sports_ContentID",
            //    table: "Sports",
            //    column: "ContentID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_SUBSCRIPTION_CustomerID",
            //    table: "SUBSCRIPTION",
            //    column: "CustomerID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_SUBSCRIPTION_PlanID",
            //    table: "SUBSCRIPTION",
            //    column: "PlanID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_TV_ContentID",
            //    table: "TV",
            //    column: "ContentID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_UserAccount_ApplicationUserId",
            //    table: "UserAccount",
            //    column: "ApplicationUserId");

            //migrationBuilder.CreateIndex(
            //    name: "UQ__UserAcco__A9D105342E192F09",
            //    table: "UserAccount",
            //    column: "Email",
            //    unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.DropTable(
            //    name: "AspNetRoleClaims");

            //migrationBuilder.DropTable(
            //    name: "AspNetUserClaims");

            //migrationBuilder.DropTable(
            //    name: "AspNetUserLogins");

            //migrationBuilder.DropTable(
            //    name: "AspNetUserRoles");

            //migrationBuilder.DropTable(
            //    name: "AspNetUserTokens");

            //migrationBuilder.DropTable(
            //    name: "Movies");

            //migrationBuilder.DropTable(
            //    name: "News");

            //migrationBuilder.DropTable(
            //    name: "PlanFeatures");

            //migrationBuilder.DropTable(
            //    name: "Sports");

            //migrationBuilder.DropTable(
            //    name: "SUBSCRIPTION");

            //migrationBuilder.DropTable(
            //    name: "TV");

            //migrationBuilder.DropTable(
            //    name: "AspNetRoles");

            //migrationBuilder.DropTable(
            //    name: "AspNetUsers");

            //migrationBuilder.DropTable(
            //    name: "UserAccount");

            //migrationBuilder.DropTable(
            //    name: "Plan");

            //migrationBuilder.DropTable(
            //    name: "Content");
        }
    }
}
