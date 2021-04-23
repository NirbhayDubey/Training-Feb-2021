-----Basic Select Queries:

--Get all employee details from the Employee table
SELECT * FROM Employees
GO

--Get FirstName, LastName from Employees table
SELECT FirstName , LastName FROM Employees
GO

--Get FirstName from Employees table using alias name �Employee Name�
SELECT FirstName AS Employee_Name FROM Employees
GO

--Get employee details from Employees table whose Employee Name is �Steven�
SELECT * FROM Employees WHERE FirstName LIKE 'Steven'
GO

--Get employee details from Employees table whose Employee Name are �Neena� and �Lex�
SELECT * FROM Employees WHERE FirstName LIKE 'Neena' OR FirstName LIKE 'Lex'
GO

--Get employee details from Employees table whose Employee name are not �Neena� and �Neena�
SELECT * FROM Employees WHERE FirstName NOT LIKE 'Neena'
GO

--Get employee details from Employees table whose Salary between 5000 and 8000
SELECT * FROM Employees WHERE Salary BETWEEN  5000 AND 8000
GO

--Write a query to get the names (FirstName, LastName), Salary, PF of all the Employees (PF is calculated as 12% of salary).
SELECT CONCAT(FirstName,' ' ,LastName) AS NAME, Salary, PF=(Salary * .12) FROM Employees
GO

--Get employee details from Employees table whose FirstName starts with �N�
SELECT * FROM Employees WHERE FirstName LIKE 'N%'
GO

--Write a query to get unique department ID from Employees table
SELECT DISTINCT(DepartmentID) FROM Employees
GO

--Write a query to get all employee details from the employee table order by FirstName, descending.
SELECT * FROM Employees ORDER BY FirstName DESC
GO

--Write a query to get the EmployeeID, names (FirstName, LastName), salary in ascending order of salary.
SELECT EmployeeID, CONCAT(FirstName,' ' ,LastName) AS NAME, Salary FROM Employees ORDER BY Salary
GO

--Select TOP 2 salary from employee table
SELECT * FROM(SELECT  EmployeeID, FirstName, Salary ,
	DENSE_RANK() OVER (ORDER BY SALARY DESC)RANK FROM Employees) Employees WHERE RANK<=2
GO
