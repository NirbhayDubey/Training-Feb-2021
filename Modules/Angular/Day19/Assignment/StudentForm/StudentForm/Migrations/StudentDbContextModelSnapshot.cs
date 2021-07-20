﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using StudentForm.Models;

namespace StudentForm.Migrations
{
    [DbContext(typeof(StudentDbContext))]
    partial class StudentDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.6")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("StudentForm.Models.Student", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AddressCity")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AddressCountry")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AddressPin")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AddressState")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("Dob")
                        .HasColumnType("datetime2");

                    b.Property<string>("EemergencyRelation")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EemergencyRelation1")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EmergencyNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EmergencyNumber1")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EmergencyNumber2")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EmergencyRelation2")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FatherDesignation")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FatherEducationQualification")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FatherEmail")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FatherFirstname")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FatherLastname")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FatherMiddlename")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FatherPhone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FatherProfession")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstLanguage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MiddleName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MotherDesigation")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MotherEducationQualification")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MotherEmail")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MotherFirstname")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MotherLastname")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MotherMiddlename")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MotherPhone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MotherProfession")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PlaceOfBirth")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Rcity")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Rcountry")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ReferenceDetail")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ReferenceThrough")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Rpin")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Rstate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RtelNo")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Students");
                });
#pragma warning restore 612, 618
        }
    }
}