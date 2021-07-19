Create Database HumanResourceLog;
Create Database HumanResourceMain;


--table


CREATE TABLE dbo.Courses
( 
  CourseId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
  CourseName [varchar](50) NOT NULL 
);
CREATE TABLE dbo.Students
(
   StudentId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
   StudentName [varchar](50) NOT NULL,
   RollNumber int NOT NULL,
   Age int NOT NULL,
   Gender [varchar](10) NOT NULL,
   EmailId [varchar](30) NOT NULL,
   CourseId int FOREIGN KEY REFERENCES Courses(CourseId) 
);

--Views


CREATE VIEW [dbo].[vStudents]
AS
SELECT    Students.StudentId, Students.RollNumber, Students.StudentName, Students.EmailId, Courses.CourseName
FROM      Students, Courses
WHERE     Students.CourseId = Courses.CourseId
GO


CREATE VIEW [dbo].[vStudentRecords]
AS
SELECT    Students.StudentId, Students.StudentName, Students.RollNumber, Students.Age, Students.Gender, Students.EmailId, Courses.CourseName
FROM      Students, Courses
WHERE     Students.CourseId = Courses.CourseId
GO



CREATE VIEW [dbo].[vCourseLookups]
AS
SELECT    CourseId, CourseName
FROM      Courses
GO