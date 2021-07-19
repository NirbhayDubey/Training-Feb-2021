-- Creating Database named StackOverflow

CREATE DATABASE TempStackOverFlow
GO

USE TempStackOverFlow
GO
-- Create Tables

---- Login Details
--CREATE TABLE UserLoginHistory(
--	ID INT PRIMARY KEY IDENTITY(1,1),
--	Email NVARCHAR(50) UNIQUE NOT NULL,

--	CurrentPassword NVARCHAR(20),
--	PreviousPassword NVARCHAR(20),
--	LastLogin DATETIME
--)
--GO

-- Users Information
CREATE TABLE Users(
	UserID INT PRIMARY KEY IDENTITY(1,1),
	UserName NVARCHAR(25) NOT NULL,
	FullName NVARCHAR(30) NOT NULL,
	Title NVARCHAR(20),
	VisitedDays INT,
	GitHub NVARCHAR(100),
	Twitter NVARCHAR(100),
	Location NVARCHAR(50),
	LastSeen DATETIME,
	ProfileViews INT,
	AboutUser NVARCHAR(200),
	PhoneNumber NVARCHAR(10),
	EmailID NVARCHAR(50) UNIQUE NOT NULL,
	
)
GO
-- Badges details
CREATE TABLE Badges(
	BadgeID INT PRIMARY KEY IDENTITY(1,1),
	BadgeName NVARCHAR(30),
	BadgeCategory NVARCHAR(30),
	BadgeDescription NVARCHAR(200),
	BadgeType NVARCHAR(20)
)
GO


-- Badges Eearned By User
CREATE TABLE BadgesEarnedByUser(
	ID INT PRIMARY KEY  IDENTITY(1,1),
	UserID INT,
	BadgeID INT,
	DateOfEarned DATE,
	CONSTRAINT Fk_UserIDBadge FOREIGN KEY(UserID) REFERENCES Users(UserID),
	CONSTRAINT Fk_BadgeIDBadge FOREIGN KEY(BadgeID) REFERENCES Badges(BadgeID)
)
GO


-- User's Educational Details
CREATE TABLE Education(
	ID INT PRIMARY KEY  IDENTITY(1,1),
	UserID INT,
	Degree NVARCHAR(30),
	University NVARCHAR(50),
	FromYear INT,
	ToYear INT,
	Summary NVARCHAR(200),
	CONSTRAINT Fk_UserIDEducation FOREIGN KEY(UserID) REFERENCES Users(UserID)
)
GO
-- Table for Technologies Used As Student
CREATE TABLE TechnologiesUsedAsStudent(
	ID INT PRIMARY KEY  IDENTITY(1,1),
	UserID INT,
	Technology NVARCHAR(20),
	CONSTRAINT Fk_UserIDTech FOREIGN KEY(UserID) REFERENCES Users(UserID)

)
GO


-- Work Profile Information
CREATE TABLE WorkExperience(
	ID INT PRIMARY KEY  IDENTITY(1,1),
	UserID INT,
	JobTitle NVARCHAR(30),
	CompanyName NVARCHAR(30),
	YearOfJoinning int,
	Responsibilities NVARCHAR(200),
	CONSTRAINT Fk_UserIDWork FOREIGN KEY(UserID) REFERENCES Users(UserID)
)
GO
-- Technologies Used By User In Job
CREATE TABLE TechnologiesUsedByUserInJob(
	UserID INT,
	Technologies NVARCHAR(20),
	CONSTRAINT Fk_UserIDTechInJob FOREIGN KEY(UserID) REFERENCES Users(UserID)
)
GO


-- Table of Questions with UserID
CREATE TABLE Questions(
	QuestionID INT PRIMARY KEY IDENTITY(1,1),
	UserID INT,
	Question NVARCHAR(500),
	TotalViews INT,
	Vote INT,
	TimeOfAsk DATETIME,
	CONSTRAINT Fk_UserIDQuestion FOREIGN KEY(UserID) REFERENCES Users(UserID)
)
GO


-- Table for Bookmarks
CREATE TABLE Bookmarks(
ID Int primary key Identity(1,1),
UserID INT FOREIGN KEY REFERENCES Users(UserID),
QuestionID INT FOREIGN KEY REFERENCES Questions(QuestionID),
)
GO

--ALTER table Bookmarks
--Add ID Int primary key Identity(1,1)

-- information of Tag of Questions
CREATE TABLE Tags(
	ID INT PRIMARY KEY  IDENTITY(1,1),
	QuestionID INT FOREIGN KEY REFERENCES Questions,
	TagName NVARCHAR(30)
)
GO

-- Table For Answers of Questions
CREATE TABLE Answers(
	AnswerID INT PRIMARY KEY IDENTITY(1,1),
	QuestionID INT FOREIGN KEY REFERENCES Questions,
	UserID INT,
	Answer NVARCHAR(MAX),
	Vote INT,
	CONSTRAINT Fk_UserIDAnswers FOREIGN KEY(UserID) REFERENCES Users(UserID)
)
GO






-- FOR JOB APPLY


-- Job Profile Information
CREATE TABLE JobProfile(
	ID INT PRIMARY KEY  IDENTITY(1,1),
	UserID INT FOREIGN KEY REFERENCES Users(UserID),
	JobType NVARCHAR(30),
	Role NVARCHAR(30),
	JobSearchStatus NVARCHAR(50),
	Industry NVARCHAR(30),
	MinAnnualSalary MONEY,
	MinExperience INT,
	MaxExperience INT,
)
GO

-- industries are exclude while apply for job
CREATE TABLE IndustriesToExclude(
	ID INT PRIMARY KEY  IDENTITY(1,1),
	UserID INT FOREIGN KEY REFERENCES Users(UserID),
	IndustryToExclude NVARCHAR(30)
)
GO

-- technologies which are not prefer to work with
CREATE TABLE TechPreferNotToWorkWith(
	ID INT PRIMARY KEY  IDENTITY(1,1),
	UserID INT FOREIGN KEY REFERENCES Users(UserID),
	TechPeferNotToWorkWith NVARCHAR(30)
)
GO

-- technologies which are prefer to work with
CREATE TABLE TechWantToWorkWith(
	ID INT PRIMARY KEY  IDENTITY(1,1),
	UserID INT FOREIGN KEY REFERENCES Users(UserID),
	TechYouWantToWorkWith NVARCHAR(30)
)
GO

-- Location where like to work
CREATE TABLE WhereUserLikeToWork(
	ID INT PRIMARY KEY  IDENTITY(1,1),
	UserID int FOREIGN KEY REFERENCES Users(UserID),
	Location NVARCHAR(30)
)
GO

-- Companies which are Eccluded to work
CREATE TABLE CompaniesToExclude(
	ID INT PRIMARY KEY  IDENTITY(1,1),
	UserID INT FOREIGN KEY REFERENCES Users(UserID),
	CompanyToExclude NVARCHAR(30)
)
GO