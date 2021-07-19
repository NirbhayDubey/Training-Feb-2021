USE Hotstar

-- PLAN Information

CREATE TABLE "Plan"(
	PlanID INT PRIMARY KEY Identity(1,1),   
	PlanName NVARCHAR(50) NOT NULL,
	SubscriptionPlan NVARCHAR(30) NOT NULL,
	Price money NOT NULL
)
	

CREATE TABLE PlanFeatures(
	ID INT Primary Key,
	Features NVARCHAR(MAX),
	FREE BINARY,
	VIP BINARY,
	PREMIUM BINARY,
	PlanID INT Foreign Key references "Plan"(PlanID)
	)



CREATE TABLE UserAccount(
	 CustomerID INT PRIMARY KEY Identity(1,1),
	 Name NVARCHAR(30)  NOT NULL,
	 PhoneNumber int  NOT NULL,
	 Email NVARCHAR(30) UNIQUE NOT NULL,
	 Address NVARCHAR(30) NOT NULL,
	 DOB Date  
)


CREATE TABLE SUBSCRIPTION(
	SubscriptionID INT PRIMARY KEY Identity(1,1),
	CustomerID INT FOREIGN KEY References UserAccount(CustomerID),
	PlanID INT Foreign Key references "Plan"(PlanID),
	DateOfSubscription Datetime,
	ValidThrough Datetime
)

CREATE TABLE Content(
ContentID Int Primary key Identity(1,1),
Title NVARCHAR(50),
Episode NVARCHAR(50),
Genre NVARCHAR(50),
ReleaseDate datetime,
SuitableAge int,
Description NVARCHAR(MAX)
)

-- Shows and movies

CREATE TABLE Movies
 (
	 MovieID INT PRIMARY KEY Identity(1,1),
	 ContentID Int Foreign key references Content(ContentID),
	 MovieTitle NVARCHAR(30)  NOT NULL,
	 MovieLanguage NVARCHAR(30) NOT NULL,
)

CREATE TABLE Sports
 (
	 SportsID INT PRIMARY KEY Identity(1,1),
	 ContentID Int Foreign key references Content(ContentID),
	 SportsType NVARCHAR(30)  NOT NULL,
	 SportsTitle NVARCHAR(30) NOT NULL,

)

CREATE TABLE News
 (
	 NewsID INT PRIMARY KEY Identity(1,1),
	 ContentID Int Foreign key references Content(ContentID),
	 NewsTitle NVARCHAR(30)  NOT NULL,
	 MovieLanguage NVARCHAR(30) NOT NULL,
)


CREATE TABLE TV
 (
	 TVID INT PRIMARY KEY Identity(1,1),
	 ContentID Int Foreign key references Content(ContentID),
	 Title NVARCHAR(50),
	 ChannelName NVARCHAR(30)  NOT NULL,
	 ChannelLanguage NVARCHAR(30) NOT NULL,

)
