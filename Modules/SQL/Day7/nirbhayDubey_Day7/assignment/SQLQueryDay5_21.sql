--------------DAY5 TASK with 'WITH' Clause and Derived Table--------------

----------Assignment 1 Day5----------

--using 'WITH'
WITH EmpIncentive(EmpId,FirstName,LastName,IncentiveAmount,JoiningDate,IncentiveDate) AS
(
	SELECT 
		e.EMPLOYEE_ID,
		e.FIRST_NAME,
		e.LAST_NAME,
		i.INCENTIVE_AMOUNT,
		e.JOINING_DATE,
		i.INCENTIVE_DATE
	FROM Day5.Employees e JOIN Day5.Incentive i 
	ON e.EMPLOYEE_ID=i.EMPLOYEE_REF_ID
)
--1. Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table
SELECT 
	EmpId,
	FirstName+' '+LastName AS 'Employee Name',
	DATEDIFF(DD,JoiningDate,IncentiveDate) AS 'Days' 
FROM EmpIncentive;
GO
--2. Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000
SELECT 
	EmpId,
	FirstName,
	IncentiveAmount 
FROM EmpIncentive
WHERE IncentiveAmount>3000;
GO


--using 'WITH'
WITH EmpIncentiveLeft(EmpId,FirstName,IncentiveAmount) AS
(
	SELECT 
		e.EMPLOYEE_ID,
		e.FIRST_NAME,
		i.INCENTIVE_AMOUNT
	FROM Day5.Employees e LEFT OUTER JOIN Day5.Incentive i 
	ON e.EMPLOYEE_ID=i.EMPLOYEE_REF_ID
)
--3. Select first_name, incentive amount from employee and incentives table for all employees even if they didn�t get incentives.
SELECT * FROM EmpIncentiveLeft;
GO
--5. Select first_name, incentive amount from employee and incentives table for all employees even if they didn�t get incentives and set incentive amount as 0 for those employees who didn�t get incentives.
SELECT
	FirstName,
	CASE WHEN IncentiveAmount IS NULL THEN 0
		 ELSE IncentiveAmount 
	END AS 'IncentiveAmount'
FROM EmpIncentiveLeft;
GO


--4. Select EmployeeName, ManagerName from the employee table.
SELECT 
	e.FIRST_NAME+' '+e.LAST_NAME AS 'Employee Name',
	m.FIRST_NAME+' '+m.LAST_NAME AS 'Manager Name' 
FROM Day5.Employees e, Day5.Employees m 
WHERE e.MANAGER_ID=m.EMPLOYEE_ID;
GO







----------Assignment 2 Day5----------

----using 'WITH'
WITH CarInventDealer(Cvin,Make,Model,Mileage,Year,DealerName,DealerCity,DealerState) AS 
(
	SELECT
		c.Vin,
		c.Make,
		c.Model,
		c.Mileage,
		c.Year,
		d.Name,
		d.City,
		d.State
	FROM Dealer.Cars c,Dealer.Inventory i,Dealer.Dealerships d
	WHERE c.Vin=i.Vin AND i.DealerShipId=d.DealerShipId
)
--3. List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership named "Chirag Moters".
SELECT 
	CVin,
	Make,
	Model,
	Year,
	Mileage
FROM CarInventDealer
WHERE DealerName='Chirag Moters';
GO
--5. For each car in the inventory of any dealership, list the VIN, make, model, and year of the car, along with the name, city, and state of the dealership whose inventory contains the car.
SELECT 
	Cvin,
	Make,
	Model,
	Year,
	DealerName,
	DealerCity,
	DealerState
FROM CarInventDealer;
GO
--9. List the VIN, year, and mileage of all "Toyota Camrys" in the inventory of the dealership named "Honda Sales". (Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".)
SELECT 
	Cvin,
	Year,
	Mileage
FROM CarInventDealer
WHERE Make='Toyota' AND Model='Camry' AND DealerName='Honda Sales';
GO


----using 'WITH'
WITH CustSaleDealer(Cid,Cname,Caddress,Ccity,Cstate,Did,Dname,Dstate,Sdate) AS
(
	SELECT 
		c.CustomerId,
		c.Name,
		c.Address,
		c.City,
		c.State,
		d.DealerShipId,
		d.Name,
		d.State,
		s.SaleDate
	FROM Dealer.Customers c,Dealer.Sales s,Dealer.Dealerships d
	WHERE c.CustomerId=s.CustomerId AND s.DealerShipId=d.DealerShipId
)
--4. List names of all customers who have ever bought cars from the dealership named "Concept Hyundai".
SELECT Cname
FROM CustSaleDealer
WHERE Dname='Concept Hyundai';
GO
--10. Find the name of all customers who bought a car at a dealership located in a state other than the state in which they live.
SELECT Cname
FROM CustSaleDealer
WHERE Dstate<>Cstate;
GO
--12. List the name, street address, city, and state of any customer who has bought more than two cars from all dealerships combined since January 1, 2010.
SELECT 
	*
FROM Dealer.Customers c
WHERE (SELECT COUNT(Cid) FROM CustSaleDealer WHERE Cid=c.CustomerId)>=(SELECT COUNT(DealerShipId) FROM Dealer.Dealerships)*2
AND (SELECT COUNT(DISTINCT Did) FROM CustSaleDealer WHERE Cid=c.CustomerId)>=(SELECT COUNT(DealerShipId) FROM Dealer.Dealerships)
AND (SELECT MIN(Sdate) FROM CustSaleDealer WHERE Cid=c.CustomerId)>'2010-01-01';
GO


----using 'WITH'
WITH SpersonReportsto(Sname,ManagerId) AS
(
	SELECT 
		sp.Name,
		rt.ManagingSalesPersonId
	FROM Dealer.SalesPersons sp, Dealer.ReportsTo rt
	WHERE sp.SalesPersonId=rt.SalesPersonId
)
--6. Find the names of all salespeople who are managed by a salesperson named "Nitish Sharma".
SELECT Sname
FROM SpersonReportsto
WHERE ManagerId=(SELECT SalesPersonId FROM Dealer.SalesPersons WHERE Name='Nitish Sharma');
GO


----using 'WITH'
WITH SpersonWorksDealer(Spname,Salary,Wmonth,Dname) AS
(
	SELECT 
		s.Name,
		w.BaseSalaryForMonth,
		w.MonthWorked,
		d.Name
	FROM Dealer.SalesPersons s,Dealer.Dealerships d,Dealer.WorksAt w
	WHERE s.SalesPersonId=w.SalesPersonId AND w.DealerShipId=d.DealerShipId
)
--11. Find the name of the salesperson that made the largest base salary working at the dealership named "Honda Sales" during January 2020.
SELECT 
	TOP 1 spname,
	Salary
FROM SpersonWorksDealer
WHERE Dname='Honda Sales' AND Wmonth='Jan'
ORDER BY Salary DESC;
GO


----using 'WITH'
WITH SpersonSaleSum(Spname,SpId,SsalePrice) AS
(
	SELECT 
		sp.Name,
		sp.SalesPersonId,
		sl.SalePrice
	FROM Dealer.SalesPersons sp,Dealer.Sales sl 
	WHERE sp.SalesPersonId=sl.SalesPersonId
)
--13. List the name, salesperson ID, and total sales amount for each salesperson who has ever sold at least one car. The total sales amount for a salesperson is the sum of the sale prices of all cars ever sold by that salesperson.
SELECT 
	Spname,
	SpId,
	SUM(SsalePrice) AS 'Total Sales Amount'
FROM SpersonSaleSum GROUP BY Spname,SpId;
GO



--1. Find the names of all salespeople who have ever worked for the company at any dealership.
SELECT sp.Name
FROM Dealer.SalesPersons sp
WHERE SalesPersonId IN (SELECT DISTINCT SalesPersonId FROM Dealer.WorksAt);
GO

--2. List the Name, Street Address, and City of each customer who lives in Ahmedabad.
SELECT 
	c.Name,
	c.Address,
	c.City
FROM Dealer.Customers c 
WHERE City='Ahmedabad';
GO

--7. Find the names of all salespeople who do not have a manager.
SELECT sp.Name AS 'SalesPerson Name'
FROM 
	Dealer.SalesPersons sp
WHERE 
	sp.SalesPersonId NOT IN (SELECT DISTINCT SalesPersonId FROM Dealer.ReportsTo WHERE ManagingSalesPersonId IS NOT NULL);
GO

--8. Find the total number of dealerships.
SELECT COUNT(DealerShipId) AS 'Total Dealerships.'
FROM Dealer.Dealerships;
GO

--14. Find the names of all customers who bought cars during 2010 who were also salespeople during 2010. For the purpose of this query, assume that no two people have the same name.


--15. Find the name and salesperson ID of the salesperson who sold the most cars for the company at dealerships located in Gujarat between March 1, 2010 and March 31, 2010.


/*16. Calculate the payroll for the month of March 2010.
	* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.
        * The gross pay is calculated as the base salary at each dealership employing the salesperson that month, along with the total commission for the salesperson that month.
        * The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold by the salesperson that month.
        * The profit made on a car is the difference between the sale price and the invoice price of the car. (Assume, that cars are never sold for less than the invoice price.) */








