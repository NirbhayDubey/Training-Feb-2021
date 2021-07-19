
SELECT * FROM Employees
SELECT * FROM Departments
SELECT* FROM Locations
SELECT * FROM Employees1
SELECT * FROM INCENTIVES
SELECT * FROM JobHistory
SELECT * FROM Countries

--1. Write a query to find the names (first_name, last_name) and salaries of the employees who have higher salary than the employee whose last_name='Bull'.
SELECT  CONCAT(FirstName,' ',LastName) AS NAMES,Salary FROM Employees
WHERE Salary >
(SELECT Salary FROM Employees WHERE LastName LIKE 'BULL')
GO

--2. Find the names (first_name, last_name) of all employees who works in the IT department.
SELECT CONCAT(FirstName,' ',LastName) AS NAMES FROM Employees
WHERE DepartmentID = 
(SELECT DepartmentID FROM Departments WHERE DepartmentName LIKE 'IT')
GO


--3. Find the names (first_name, last_name) of the employees who have a manager who works for a department based in United States. 
--Hint : Write single-row and multiple-row subqueries
SELECT CONCAT(FirstName,' ',LastName) AS NAMES FROM Employees
WHERE EXISTS
(SELECT DepartmentID FROM Departments WHERE EXISTS
(SELECT LocationID FROM Locations WHERE CountryID LIKE 'US'))
GO


--4. Find the names (first_name, last_name) of the employees who are managers. 
SELECT CONCAT(FirstName,' ',LastName) AS NAMES 
FROM Employees
WHERE (EmployeeID IN (SELECT ManagerID FROM Employees));
GO

--5. Find the names (first_name, last_name), salary of the employees whose salary is greater than the average salary. 
SELECT CONCAT(FirstName,' ',LastName) AS NAMES , Salary
FROM Employees 
WHERE Salary > (SELECT AVG(SALARY) FROM Employees)
GO

--6. Find the names (first_name, last_name), salary of the employees whose salary is equal to the minimum salary for their job grade.
SELECT CONCAT(FirstName,' ',LastName) AS NAMES , Salary
FROM Employees
WHERE Salary IN (SELECT MIN(SALARY) FROM Employees GROUP BY JobId)
GO

--7. Find the names (first_name, last_name), salary of the employees who earn more than the average salary and who works in any of the IT departments.
SELECT CONCAT(FirstName,' ',LastName) AS NAMES , Salary,JobId
FROM Employees
WHERE Salary > (SELECT AVG(SALARY) FROM Employees) AND JobId LIKE '%IT%'
GO

--8. Find the names (first_name, last_name), salary of the employees who earn more than Mr. Bell.
SELECT CONCAT(FirstName,' ',LastName) AS NAMES , Salary
FROM Employees 
WHERE Salary > (SELECT SALARY FROM Employees WHERE LastName LIKE 'BELL')
GO

--9. Find the names (first_name, last_name), salary of the employees who earn the same salary as the minimum salary for all departments.
SELECT CONCAT(FirstName,' ',LastName) AS NAMES , Salary
FROM Employees 
WHERE Salary = (SELECT MIN(SALARY) FROM Employees)
GO

--10. Find the names (first_name, last_name), salary of the employees whose salary greater than average salary of all department.
SELECT CONCAT(FirstName,' ',LastName) AS NAMES , Salary
FROM Employees 
WHERE Salary > (SELECT AVG(SALARY) FROM Employees)
GO

--11. Write a query to find the names (first_name, last_name) and salary of the employees who earn a salary that is higher than the salary of all 
--the Shipping Clerk (JOB_ID = 'SH_CLERK'). Sort the results on salary from the lowest to highest.
SELECT CONCAT(FirstName,' ',LastName) AS NAMES , Salary,JobId
FROM Employees
WHERE Salary > (SELECT MAX(SALARY) FROM Employees WHERE JobId='SH_CLERK')
GO

--12. Write a query to find the names (first_name, last_name) of the employees who are not supervisors.
SELECT CONCAT(FirstName,' ',LastName) AS NAMES , Salary,JobId
FROM Employees
WHERE JobId != 'IT_PROG'
GO

--13. Write a query to display the employee ID, first name, last names, and department names of all employees. 
SELECT EmployeeID, FirstName, LastName, (SELECT DepartmentName FROM Departments D
WHERE E.DepartmentID = D.DepartmentID) AS DepartmentName FROM Employees E;
GO

--14. Write a query to display the employee ID, first name, last names, salary of all employees whose salary is above average 
--for their departments. 
SELECT EmployeeID,FirstName,LastName , Salary
FROM Employees E1
WHERE Salary > (SELECT AVG(SALARY) FROM Employees WHERE DepartmentID=E1.DepartmentID)
GO

--15. Write a query to fetch even numbered records from employees table. 
SELECT * FROM Employees WHERE EmployeeID%2 = 0 ORDER BY EmployeeID
GO

--16. Write a query to find the 5th maximum salary in the employees table.
SELECT * FROM
(SELECT  EmployeeID, FirstName,LastName, Salary, ROW_NUMBER() OVER (ORDER BY SALARY DESC)RANK FROM Employees) 
Employees WHERE RANK=5
GO

--17. Write a query to find the 4th minimum salary in the employees table. 
SELECT * FROM
(SELECT  EmployeeID, FirstName,LastName, Salary, ROW_NUMBER() OVER (ORDER BY SALARY ASC)RANK FROM Employees) 
Employees WHERE RANK=4
GO

--18. Write a query to select last 10 records from a table. 
SELECT * FROM (
SELECT TOP(10) * FROM Employees ORDER BY EmployeeID DESC)v1 
ORDER BY EmployeeID ASC
GO

--19. Write a query to list department number, name for all the departments in which there are no employees 
--in the department. 
SELECT DepartmentID,DepartmentName FROM Departments

--20. Writea query to get 3 maximum salaries. 
SELECT * FROM
(SELECT  EmployeeID, FirstName,LastName, Salary, ROW_NUMBER() OVER (ORDER BY SALARY DESC)RANK FROM Employees) 
Employees WHERE RANK<=3
GO

--21. Write a query to get 3 minimum salaries. 
SELECT * FROM
(SELECT  EmployeeID, FirstName,LastName, Salary, ROW_NUMBER() OVER (ORDER BY SALARY ASC)RANK FROM Employees) 
Employees WHERE RANK<=3
GO

--22. Write a query to get nth max salaries of employees. 
SELECT * FROM
(SELECT TOP(10)  EmployeeID, FirstName,LastName, Salary, ROW_NUMBER() OVER (ORDER BY SALARY DESC)RANK FROM Employees) 
Employees
GO





