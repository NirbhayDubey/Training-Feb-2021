using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace StackOverFlow.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.CreateTable(
            //    name: "AppUsers",
            //    columns: table => new
            //    {
            //        UserID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        FullName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
            //        Title = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
            //        VisitedDays = table.Column<int>(type: "int", nullable: true),
            //        GitHub = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
            //        Twitter = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
            //        Location = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
            //        LastSeen = table.Column<DateTime>(type: "datetime", nullable: true),
            //        ProfileViews = table.Column<int>(type: "int", nullable: true),
            //        AboutUser = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_AppUsers", x => x.UserID);
            //    });

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
            //    name: "Badges",
            //    columns: table => new
            //    {
            //        BadgeID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        BadgeName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
            //        BadgeCategory = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
            //        BadgeDescription = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
            //        BadgeType = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Badges", x => x.BadgeID);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "CompaniesToExclude",
            //    columns: table => new
            //    {
            //        ID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        UserID = table.Column<int>(type: "int", nullable: true),
            //        CompanyToExclude = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_CompaniesToExclude", x => x.ID);
            //        table.ForeignKey(
            //            name: "FK__Companies__UserI__7755B73D",
            //            column: x => x.UserID,
            //            principalTable: "AppUsers",
            //            principalColumn: "UserID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Education",
            //    columns: table => new
            //    {
            //        ID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        UserID = table.Column<int>(type: "int", nullable: true),
            //        Degree = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
            //        University = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
            //        FromYear = table.Column<int>(type: "int", nullable: true),
            //        ToYear = table.Column<int>(type: "int", nullable: true),
            //        Summary = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Education", x => x.ID);
            //        table.ForeignKey(
            //            name: "Fk_UserIDEducation",
            //            column: x => x.UserID,
            //            principalTable: "AppUsers",
            //            principalColumn: "UserID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "IndustriesToExclude",
            //    columns: table => new
            //    {
            //        ID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        UserID = table.Column<int>(type: "int", nullable: true),
            //        IndustryToExclude = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_IndustriesToExclude", x => x.ID);
            //        table.ForeignKey(
            //            name: "FK__Industrie__UserI__6BE40491",
            //            column: x => x.UserID,
            //            principalTable: "AppUsers",
            //            principalColumn: "UserID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "JobProfile",
            //    columns: table => new
            //    {
            //        ID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        UserID = table.Column<int>(type: "int", nullable: true),
            //        JobType = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
            //        Role = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
            //        JobSearchStatus = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
            //        Industry = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
            //        MinAnnualSalary = table.Column<decimal>(type: "money", nullable: true),
            //        MinExperience = table.Column<int>(type: "int", nullable: true),
            //        MaxExperience = table.Column<int>(type: "int", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_JobProfile", x => x.ID);
            //        table.ForeignKey(
            //            name: "FK__JobProfil__UserI__690797E6",
            //            column: x => x.UserID,
            //            principalTable: "AppUsers",
            //            principalColumn: "UserID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Questions",
            //    columns: table => new
            //    {
            //        QuestionID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        UserID = table.Column<int>(type: "int", nullable: true),
            //        Question = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
            //        TotalViews = table.Column<int>(type: "int", nullable: true),
            //        Vote = table.Column<int>(type: "int", nullable: true),
            //        TimeOfAsk = table.Column<DateTime>(type: "datetime", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Questions", x => x.QuestionID);
            //        table.ForeignKey(
            //            name: "Fk_UserIDQuestion",
            //            column: x => x.UserID,
            //            principalTable: "AppUsers",
            //            principalColumn: "UserID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "TechnologiesUsedAsStudent",
            //    columns: table => new
            //    {
            //        ID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        UserID = table.Column<int>(type: "int", nullable: true),
            //        Technology = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_TechnologiesUsedAsStudent", x => x.ID);
            //        table.ForeignKey(
            //            name: "Fk_UserIDTech",
            //            column: x => x.UserID,
            //            principalTable: "AppUsers",
            //            principalColumn: "UserID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "TechnologiesUsedByUserInJob",
            //    columns: table => new
            //    {
            //        UserID = table.Column<int>(type: "int", nullable: true),
            //        Technologies = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.ForeignKey(
            //            name: "Fk_UserIDTechInJob",
            //            column: x => x.UserID,
            //            principalTable: "AppUsers",
            //            principalColumn: "UserID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "TechPreferNotToWorkWith",
            //    columns: table => new
            //    {
            //        ID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        UserID = table.Column<int>(type: "int", nullable: true),
            //        TechPeferNotToWorkWith = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_TechPreferNotToWorkWith", x => x.ID);
            //        table.ForeignKey(
            //            name: "FK__TechPrefe__UserI__6EC0713C",
            //            column: x => x.UserID,
            //            principalTable: "AppUsers",
            //            principalColumn: "UserID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "TechWantToWorkWith",
            //    columns: table => new
            //    {
            //        ID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        UserID = table.Column<int>(type: "int", nullable: true),
            //        TechYouWantToWorkWith = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_TechWantToWorkWith", x => x.ID);
            //        table.ForeignKey(
            //            name: "FK__TechWantT__UserI__719CDDE7",
            //            column: x => x.UserID,
            //            principalTable: "AppUsers",
            //            principalColumn: "UserID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "WhereUserLikeToWork",
            //    columns: table => new
            //    {
            //        ID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        UserID = table.Column<int>(type: "int", nullable: true),
            //        Location = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_WhereUserLikeToWork", x => x.ID);
            //        table.ForeignKey(
            //            name: "FK__WhereUser__UserI__74794A92",
            //            column: x => x.UserID,
            //            principalTable: "AppUsers",
            //            principalColumn: "UserID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "WorkExperience",
            //    columns: table => new
            //    {
            //        ID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        UserID = table.Column<int>(type: "int", nullable: true),
            //        JobTitle = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
            //        CompanyName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
            //        YearOfJoinning = table.Column<int>(type: "int", nullable: true),
            //        Responsibilities = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_WorkExperience", x => x.ID);
            //        table.ForeignKey(
            //            name: "Fk_UserIDWork",
            //            column: x => x.UserID,
            //            principalTable: "AppUsers",
            //            principalColumn: "UserID",
            //            onDelete: ReferentialAction.Restrict);
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
            //    name: "BadgesEarnedByUser",
            //    columns: table => new
            //    {
            //        ID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        UserID = table.Column<int>(type: "int", nullable: true),
            //        BadgeID = table.Column<int>(type: "int", nullable: true),
            //        DateOfEarned = table.Column<DateTime>(type: "date", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_BadgesEarnedByUser", x => x.ID);
            //        table.ForeignKey(
            //            name: "Fk_BadgeIDBadge",
            //            column: x => x.BadgeID,
            //            principalTable: "Badges",
            //            principalColumn: "BadgeID",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "Fk_UserIDBadge",
            //            column: x => x.UserID,
            //            principalTable: "AppUsers",
            //            principalColumn: "UserID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Answers",
            //    columns: table => new
            //    {
            //        AnswerID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        QuestionID = table.Column<int>(type: "int", nullable: true),
            //        UserID = table.Column<int>(type: "int", nullable: true),
            //        Answer = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Vote = table.Column<int>(type: "int", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Answers", x => x.AnswerID);
            //        table.ForeignKey(
            //            name: "FK__Answers__Questio__65370702",
            //            column: x => x.QuestionID,
            //            principalTable: "Questions",
            //            principalColumn: "QuestionID",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "Fk_UserIDAnswers",
            //            column: x => x.UserID,
            //            principalTable: "AppUsers",
            //            principalColumn: "UserID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Bookmarks",
            //    columns: table => new
            //    {
            //        ID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        UserID = table.Column<int>(type: "int", nullable: true),
            //        QuestionID = table.Column<int>(type: "int", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Bookmarks", x => x.ID);
            //        table.ForeignKey(
            //            name: "FK__Bookmarks__Quest__5F7E2DAC",
            //            column: x => x.QuestionID,
            //            principalTable: "Questions",
            //            principalColumn: "QuestionID",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "FK__Bookmarks__UserI__5E8A0973",
            //            column: x => x.UserID,
            //            principalTable: "AppUsers",
            //            principalColumn: "UserID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Tags",
            //    columns: table => new
            //    {
            //        ID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        QuestionID = table.Column<int>(type: "int", nullable: true),
            //        TagName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Tags", x => x.ID);
            //        table.ForeignKey(
            //            name: "FK__Tags__QuestionID__625A9A57",
            //            column: x => x.QuestionID,
            //            principalTable: "Questions",
            //            principalColumn: "QuestionID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateIndex(
            //    name: "IX_Answers_QuestionID",
            //    table: "Answers",
            //    column: "QuestionID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Answers_UserID",
            //    table: "Answers",
            //    column: "UserID");

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
            //    name: "IX_BadgesEarnedByUser_BadgeID",
            //    table: "BadgesEarnedByUser",
            //    column: "BadgeID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_BadgesEarnedByUser_UserID",
            //    table: "BadgesEarnedByUser",
            //    column: "UserID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Bookmarks_QuestionID",
            //    table: "Bookmarks",
            //    column: "QuestionID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Bookmarks_UserID",
            //    table: "Bookmarks",
            //    column: "UserID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_CompaniesToExclude_UserID",
            //    table: "CompaniesToExclude",
            //    column: "UserID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Education_UserID",
            //    table: "Education",
            //    column: "UserID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_IndustriesToExclude_UserID",
            //    table: "IndustriesToExclude",
            //    column: "UserID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_JobProfile_UserID",
            //    table: "JobProfile",
            //    column: "UserID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Questions_UserID",
            //    table: "Questions",
            //    column: "UserID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Tags_QuestionID",
            //    table: "Tags",
            //    column: "QuestionID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_TechnologiesUsedAsStudent_UserID",
            //    table: "TechnologiesUsedAsStudent",
            //    column: "UserID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_TechnologiesUsedByUserInJob_UserID",
            //    table: "TechnologiesUsedByUserInJob",
            //    column: "UserID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_TechPreferNotToWorkWith_UserID",
            //    table: "TechPreferNotToWorkWith",
            //    column: "UserID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_TechWantToWorkWith_UserID",
            //    table: "TechWantToWorkWith",
            //    column: "UserID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_WhereUserLikeToWork_UserID",
            //    table: "WhereUserLikeToWork",
            //    column: "UserID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_WorkExperience_UserID",
            //    table: "WorkExperience",
            //    column: "UserID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.DropTable(
            //    name: "Answers");

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
            //    name: "BadgesEarnedByUser");

            //migrationBuilder.DropTable(
            //    name: "Bookmarks");

            //migrationBuilder.DropTable(
            //    name: "CompaniesToExclude");

            //migrationBuilder.DropTable(
            //    name: "Education");

            //migrationBuilder.DropTable(
            //    name: "IndustriesToExclude");

            //migrationBuilder.DropTable(
            //    name: "JobProfile");

            //migrationBuilder.DropTable(
            //    name: "Tags");

            //migrationBuilder.DropTable(
            //    name: "TechnologiesUsedAsStudent");

            //migrationBuilder.DropTable(
            //    name: "TechnologiesUsedByUserInJob");

            //migrationBuilder.DropTable(
            //    name: "TechPreferNotToWorkWith");

            //migrationBuilder.DropTable(
            //    name: "TechWantToWorkWith");

            //migrationBuilder.DropTable(
            //    name: "WhereUserLikeToWork");

            //migrationBuilder.DropTable(
            //    name: "WorkExperience");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            //migrationBuilder.DropTable(
            //    name: "Badges");

            //migrationBuilder.DropTable(
            //    name: "Questions");

            //migrationBuilder.DropTable(
            //    name: "AppUsers");
        }
    }
}
