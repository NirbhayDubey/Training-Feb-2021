USE SQLDay6
/*1. Write a query to find the names (first_name, last_name)
and salaries of the employees who have higher salary than 
the employee whose last_name='Bull'. */

SELECT (FirstName + ' ' + LastName) AS Name,Salary
FROM Employees
WHERE Salary > (SELECT Salary
				FROM Employees
				Where LastName='Bull');

/*2. Find the names (first_name, last_name) of all employees
who works in the IT department. */

SELECT (FirstName + ' ' + LastName) AS Name
FROM Employees
WHERE DepartmentID = (SELECT DepartmentID
						FROM Departments
						WHERE DepartmentName = 'IT');

/*3. Find the names (first_name, last_name) of the employees
who have a manager who works for a department based in
United States. */

SELECT (FirstName + ' ' + LastName) AS Name
FROM Employees
WHERE ManagerID IN (SELECT ManagerID
				  FROM Departments
				  WHERE LocationID IN(SELECT LocationID
									FROM Locations
									WHERE CountryID =
											(SELECT CountryID
												FROM Countries
												WHERE CountryName = 'United States of America')));

/*Hint : Write single-row and multiple-row subqueries

4. Find the names (first_name, last_name) of the employees 
who are managers. */

SELECT (FirstName + ' ' + LastName) AS Name
FROM Employees
WHERE EmployeeID IN (SELECT ManagerID
					FROM Employees)

/*5. Find the names (first_name, last_name), salary of the 
employees whose salary is greater than the average salary. */

SELECT (FirstName + ' ' + LastName) AS Name,Salary
FROM Employees
WHERE Salary > (SELECT AVG(Salary)
				FROM Employees);

/*6. Find the names (first_name, last_name), salary of the 
employees whose salary is equal to the minimum salary for 
their job grade. */

SELECT (FirstName + ' ' + LastName) AS Name,Salary
FROM Employees
WHERE Salary IN (SELECT MIN(Salary)
				FROM Employees
				GROUP BY JobId);

/*7. Find the names (first_name, last_name), salary of the 
employees who earn more than the average salary and who works 
in any of the IT departments. */

SELECT (FirstName + ' ' + LastName) AS Name, Salary
FROM Employees
WHERE Salary >(SELECT AVG(Salary)
				FROM Employees)
	AND DepartmentID IN (SELECT DepartmentID
							FROM Departments
							WHERE DepartmentName = 'IT')

/* 8. Find the names (first_name, last_name), salary of the 
employees who earn more than Mr. Bell. */

SELECT (FirstName + ' ' + LastName) AS Name,Salary
FROM Employees
WHERE Salary > (SELECT Salary
				FROM Employees
				WHERE LastName = 'Bell')


/* 9. Find the names (first_name, last_name), salary of the 
employees who earn the same salary as the minimum salary 
for all departments. */

SELECT (FirstName + ' ' + LastName) AS Name,Salary
FROM Employees
WHERE Salary IN (SELECT MIN(Salary)
				FROM Employees
				GROUP BY DepartmentID)

/* 10. Find the names (first_name, last_name), salary of the 
employees whose salary greater than average salary of all 
department. */

SELECT (FirstName + ' ' + LastName) AS Name,Salary
FROM Employees
WHERE Salary > ALL(SELECT AVG(Salary)
				FROM Employees
				GROUP BY DepartmentID)

/*11. Write a query to find the names (first_name, last_name) 
and salary of the employees who earn a salary that is higher 
than the salary of all the Shipping Clerk (JOB_ID = 'SH_CLERK*/

SELECT (FirstName + ' ' + LastName) AS Name,Salary
FROM Employees
WHERE Salary > All(SELECT Salary
					FROM Employees
					WHERE JobId = 'SH_CLERK')


/*12. Write a query to find the names (first_name, last_name) 
of the employees who are not supervisors. */

SELECT (FirstName + ' ' + LastName) AS Name,Salary
FROM Employees
WHERE EmployeeID IN (SELECT SupervisorID
FROM Employees);   -- THERE IS NO SUCH COLUMN NAMED SUPERVIESER

/*13. Write a query to display the employee ID, first name, 
last names, and department names of all employees. */

SELECT E.EmployeeID,E.FirstName,E.LastName,D.DepartmentName
FROM Employees AS E
INNER JOIN Departments AS D
ON E.DepartmentID = D.DepartmentID;

/*14. Write a query to display the employee ID, first name, 
last names, salary of all employees whose salary is above 
average for their departments. */

SELECT EmployeeID,FirstName,LastName,Salary
FROM Employees AS E
INNER JOIN Departments AS D
ON E.DepartmentID = D.DepartmentID
WHERE E.Salary > ALL(SELECT AVG(Salary)
FROM Employees 
WHERE DepartmentID = D.DepartmentID
GROUP BY DepartmentID)

/*15. Write a query to fetch even numbered records from 
employees table. */

SELECT *
FROM Employees
WHERE EmployeeID % 2 = 0

/*16. Write a query to find the 5th maximum salary in the 
employees table. */

SELECT Salary
FROM (SELECT ROW_NUMBER() OVER(ORDER BY Salary DESC) AS 'Rank',*
FROM Employees) AS SalaryRank
WHERE Rank = 5;


/*17. Write a query to find the 4th minimum salary in the 
employees table. */

SELECT Salary AS '4THMinSalary'
FROM (SELECT ROW_NUMBER() OVER (ORDER BY Salary) AS SalRank,*
FROM Employees) AS SalaryRank
WHERE SalRank = 4;

/*18. Write a query to select last 10 records from a table. */


SELECT Salary AS Last10Record
FROM (SELECT ROW_NUMBER() OVER (ORDER BY Salary) AS SalRank,*
FROM Employees) AS SalaryRank
WHERE SalRank > (SELECT Count(*)
FROM Employees)-10;

/*19. Write a query to list department number, name for all the 
departments in which there are no employees in the department.*/ 

SELECT DepartmentID,DepartmentName
FROM Departments 
WHERE DepartmentID NOT IN (SELECT DepartmentID
FROM Employees);


/*20. Write a query to get 3 maximum salaries. */

SELECT Salary
FROM (SELECT ROW_NUMBER() OVER (ORDER BY Salary DESC) AS SalRank,*
FROM Employees) AS SalaryRank
WHERE SalRank <=3;

/*21. Write a query to get 3 minimum salaries. */


SELECT Salary
FROM (SELECT ROW_NUMBER() OVER (ORDER BY Salary) AS SalRank,*
FROM Employees) AS SalaryRank
WHERE SalRank <=3;

/*22. Write a query to get nth max salaries of employees. */

SELECT Salary
FROM (SELECT ROW_NUMBER() OVER (ORDER BY Salary DESC) AS SalRank,*
FROM Employees) AS SalaryRank
WHERE SalRank = 4;