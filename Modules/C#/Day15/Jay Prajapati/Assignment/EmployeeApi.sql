USE EmpAssignDB

CREATE TABLE Assignments (
    AssignmentId               INT PRIMARY KEY IDENTITY (1, 1) NOT NULL,
    AssignmentName             NVARCHAR (MAX) NOT NULL,
    AssignmentNumber           NVARCHAR (MAX) NULL,
    EffectiveStartDate         DATETIME2 (7)  NOT NULL,
    EffectiveEndDate           DATETIME2 (7)  NOT NULL,    
);


CREATE TABLE Employees (
    Id            INT  PRIMARY KEY IDENTITY (1, 1) NOT NULL,
    FirstName     NVARCHAR (MAX) NOT NULL,
    MiddleName    NVARCHAR (MAX) NULL,
    LastName      NVARCHAR (MAX) NULL,
    City          NVARCHAR (MAX) NULL,
    Country       NVARCHAR (MAX) NULL,
    DateOfBirth   DATETIME2 (7)  NOT NULL,
    Gender        NVARCHAR (MAX) NULL,
    HireDate      DATETIME2 (7)  NOT NULL,
    MaritalStatus NVARCHAR (MAX) NULL,
);

CREATE TABLE EmpAssign(
	EmpId INT FOREIGN KEY REFERENCES Employees(Id),
	AssignemntID INT FOREIGN KEY REFERENCES Assignments(AssignmentId),
	AssignmentStatus           NVARCHAR (MAX) NULL,
	AssignmentProjectedEndDate NVARCHAR (MAX) NULL
)

ALTER TABLE EmpAssign
ADD Id INT Primary Key identity(1,1);

DELETE from EmpAssign