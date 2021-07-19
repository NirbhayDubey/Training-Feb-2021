/*1. Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all the departments. */
SELECT * FROM Countries
SELECT * FROM Departments
SELECT * FROM Employees
SELECT * FROM Employees1
SELECT * FROM INCENTIVES
SELECT * FROM JobHistory
SELECT * FROM Locations
SELECT L.LocationID,L.StreetAddress,L.City,L.StateProvince,C.CountryName ,D.DepartmentID,D.DepartmentName
FROM Locations L JOIN Countries C ON L.CountryID=C.CountryID
JOIN Departments D ON D.LocationID=L.LocationID 
GO

/*2. Write a query to find the names (first_name, last name), department ID and name of all the employees. */
SELECT CONCAT(E.FirstName,' ',E.LastName),D.DepartmentID,D.DepartmentName AS NAMES 
FROM Employees E JOIN Departments D ON E.DepartmentID=D.DepartmentID
GO

/*3. Find the names (first_name, last_name), job, department number, and department name of the employees who work in London. */
SELECT CONCAT(E.FirstName,' ',E.LastName),E.JobId,D.DepartmentID,D.DepartmentName,L.City FROM Employees E 
JOIN Departments D ON E.DepartmentID=D.DepartmentID 
JOIN Locations L ON D.LocationID=L.LocationID
WHERE L.City='LONDON'
GO

/*4. Write a query to find the employee id, name (last_name) along with their manager_id, manager name (last_name). */
SELECT E2.EmployeeID,E2.LastName,E2.ManagerID,E1.LastName AS ManagerName 
FROM Employees E1 Right join Employees E2 ON E1.EmployeeID=E2.ManagerID
GO

/*5. Find the names (first_name, last_name) and hire date of the employees who were hired after 'Jones'. */
SELECT CONCAT(FirstName,' ',LastName) AS NAMES,HireDate FROM Employees WHERE HireDate > 
(SELECT HireDate FROM Employees WHERE LastName='JONES')
GO

/*6. Write a query to get the department name and number of employees in the department. */

/*7. Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history. */

/*8. Write a query to display the department ID, department name and manager first name. */

/*9. Write a query to display the department name, manager name, and city. */

/*10. Write a query to display the job title and average salary of employees. */

/*11. Display job title, employee name, and the difference between salary of the employee and minimum salary for the job. */

/*12. Write a query to display the job history that were done by any employee who is currently drawing more than 10000 of salary. */

/*13. Write a query to display department name, name (first_name, last_name), hire date, salary of the manager for all managers 
whose experience is more than 15 years. */
