
	-------sqldb2--------

/* Get all employee details from the Employee table */
	SELECT * FROM Employees

/* Get FirstName, LastName from Employees table */
	SELECT FirstName,LastName FROM Employees

/* Get FirstName from Employees table using alias name �Employee Name� */
	SELECT FirstName AS 'Employee Name' FROM Employees

/* Get employee details from Employees table whose Employee Name is �Steven� */
	SELECT * FROM Employees WHERE FirstName='Steven'

/* Get employee details from Employees table whose Employee Name are �Neena� and �Lex� */
	SELECT * FROM Employees WHERE FirstName IN ('Neena','Lex')

/* Get employee details from Employees table whose Employee name are not �Neena� and �Neena� */
	SELECT * FROM Employees WHERE FirstName NOT IN ('Neena','Lex')

/* Get employee details from Employees table whose Salary between 5000 and 8000 */
	SELECT * FROM Employees WHERE Salary BETWEEN 5000 AND 8000;

/* Write a query to get the names (FirstName, LastName), Salary, PF of all the Employees (PF is calculated as 12% of salary). */
	SELECT FirstName+' '+LastName AS 'Employee Name',Salary,'PF'=Salary*0.12 FROM Employees

/* Get employee details from Employees table whose FirstName starts with �N� */
	SELECT * FROM Employees WHERE FirstName LIKE 'N%'

/* Write a query to get unique department ID from Employees table */
	SELECT DISTINCT DepartmentID FROM Employees

/* Write a query to get all employee details from the employee table order by FirstName, descending. */
	SELECT * FROM Employees ORDER BY FirstName DESC

/* Write a query to get the EmployeeID, names (FirstName, LastName), salary in ascending order of salary. */
	SELECT EmployeeID,FirstName+' '+LastName AS 'Employee Name',Salary FROM Employees ORDER BY Salary DESC

/* Select TOP 2 salary from employee table */
	SELECT TOP 2 Salary AS 'MaxSalaries' FROM Employees ORDER BY Salary DESC