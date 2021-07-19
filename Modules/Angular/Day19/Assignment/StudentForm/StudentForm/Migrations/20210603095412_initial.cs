using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace StudentForm.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MiddleName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Dob = table.Column<DateTime>(type: "datetime2", nullable: true),
                    PlaceOfBirth = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FirstLanguage = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AddressCity = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AddressState = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AddressCountry = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AddressPin = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FatherFirstname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FatherMiddlename = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FatherLastname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FatherEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FatherEducationQualification = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FatherProfession = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FatherDesignation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FatherPhone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MotherFirstname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MotherMiddlename = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MotherLastname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MotherEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MotherEducationQualification = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MotherProfession = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MotherDesigation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MotherPhone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EemergencyRelation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmergencyNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EemergencyRelation1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmergencyNumber1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmergencyRelation2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmergencyNumber2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ReferenceDetail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ReferenceThrough = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Rcity = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Rstate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Rcountry = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Rpin = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RtelNo = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Students");
        }
    }
}
