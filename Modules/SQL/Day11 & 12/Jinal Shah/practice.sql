
---------------------	AdventureWorks2012    -------------

----------STORE PROCEDURE------------

	USE AdventureWorks2012;  
	GO  
	CREATE PROCEDURE HumanResources.uspGetEmployeesTest2   
		@LastName nvarchar(50),   
		@FirstName nvarchar(50)   
	AS   

		SET NOCOUNT ON;  
		SELECT FirstName, LastName, Department  
		FROM HumanResources.vEmployeeDepartmentHistory  
		WHERE FirstName = @FirstName AND LastName = @LastName  
		AND EndDate IS NULL;  
	GO


-----------------EXECUTE------------------------

	EXECUTE HumanResources.uspGetEmployeesTest2 N'Ackerman', N'Pilar'; 

------------ Or -------------

	EXEC HumanResources.uspGetEmployeesTest2 @LastName = N'Ackerman', @FirstName = N'Pilar';  
	GO

------------ Or --------------

	EXECUTE HumanResources.uspGetEmployeesTest2 @FirstName = N'Pilar', @LastName = N'Ackerman';  
	GO



--------------------------- MODIFY STORED PROCEDURE -------------------------

	IF OBJECT_ID ( 'Purchasing.uspVendorAllInfo', 'P' ) IS NOT NULL   
		DROP PROCEDURE Purchasing.uspVendorAllInfo;  
	GO  
	CREATE PROCEDURE Purchasing.uspVendorAllInfo  
	WITH EXECUTE AS CALLER  
	AS  
		SET NOCOUNT ON;  
		SELECT v.Name AS Vendor, p.Name AS 'Product name',   
		  v.CreditRating AS 'Rating',   
		  v.ActiveFlag AS Availability  
		FROM Purchasing.Vendor v   
		INNER JOIN Purchasing.ProductVendor pv  
		  ON v.BusinessEntityID = pv.BusinessEntityID   
		INNER JOIN Production.Product p  
		  ON pv.ProductID = p.ProductID   
		ORDER BY v.Name ASC;  
	GO

	--------  MODIFY --------

	ALTER PROCEDURE Purchasing.uspVendorAllInfo  
		@Product varchar(25)   
	AS  
		SET NOCOUNT ON;  
		SELECT LEFT(v.Name, 25) AS Vendor, LEFT(p.Name, 25) AS 'Product name',   
		'Rating' = CASE v.CreditRating   
			WHEN 1 THEN 'Superior'  
			WHEN 2 THEN 'Excellent'  
			WHEN 3 THEN 'Above average'  
			WHEN 4 THEN 'Average'  
			WHEN 5 THEN 'Below average'  
			ELSE 'No rating'  
			END  
		, Availability = CASE v.ActiveFlag  
			WHEN 1 THEN 'Yes'  
			ELSE 'No'  
			END  
		FROM Purchasing.Vendor AS v   
		INNER JOIN Purchasing.ProductVendor AS pv  
		  ON v.BusinessEntityID = pv.BusinessEntityID   
		INNER JOIN Production.Product AS p   
		  ON pv.ProductID = p.ProductID   
		WHERE p.Name LIKE @Product  
		ORDER BY v.Name ASC;  
	GO

	----- EXECUTE ----

	EXEC Purchasing.uspVendorAllInfo N'LL Crankarm';  
	GO