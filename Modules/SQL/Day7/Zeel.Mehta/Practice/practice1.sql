SELECT * FROM Sales.SalesOrderHeader
GO

WITH SALES_CTE(SalesPersonID, SalesOrderID, SalesYear)
AS
(
	SELECT SalesPersonID,SalesOrderID, YEAR(OrderDate) AS SalesYear
	FROM Sales.SalesOrderHeader
	WHERE SalesPersonID IS NOT NULL
)
SELECT SalesPersonID, COUNT(SalesOrderID) AS TotalSales, SalesYear
FROM SALES_CTE
GROUP BY SalesYear,SalesPersonID
ORDER BY SalesPersonID, SalesYear;
GO

WITH SALES_CTE(SalesPersonID, NumberOfOrders)
AS
(
	SELECT SalesPersonID, COUNT(*)
	FROM Sales.SalesOrderHeader
	WHERE SalesPersonID IS NOT NULL
	GROUP BY SalesPersonID
)
SELECT AVG(NumberOfOrders) AS "Average Sales Per Person" 
FROM SALES_CTE
GO

WITH SALES_CTE (SalesPersonID, TotalSales, SalesYear)
AS
(
	SELECT SalesPersonID,SUM(TotalDue) AS TotalSales, YEAR(OrderDate) AS SalesYear
	FROM Sales.SalesOrderHeader
	WHERE SalesPersonID IS NOT NULL
	GROUP BY SalesPersonID, YEAR(OrderDate)
)
,
SALES_QUOTA_CTE(BusinessEntityID, SalesQuota, SalesQuotaYear)
AS
(
	SELECT BusinessEntityID, SUM(SalesQuota) AS SalesQuota, YEAR(QuotaDate) AS SalesQuotaYear 
	FROM Sales.SalesPersonQuotaHistory
	GROUP BY BusinessEntityID, YEAR(QuotaDate)
)
SELECT SalesPersonID, SalesYear, 
	FORMAT(TotalSales,'C','en-us') AS TotalSales, SalesQuotaYear,
	FORMAT(SalesQuota,'C','en-us') AS SalesQuota,
	FORMAT(TotalSales - SalesQuota, 'C', 'en-us') AS Amt_Above_or_Below_Quota
FROM SALES_CTE JOIN SALES_QUOTA_CTE 
ON SALES_QUOTA_CTE.BusinessEntityID=SALES_CTE.SalesPersonID
AND SALES_CTE.SalesYear=SALES_QUOTA_CTE.SalesQuotaYear
GO
 
CREATE TABLE dbo.MyEmployees  
(  
EmployeeID SMALLINT NOT NULL,  
FirstName NVARCHAR(30)  NOT NULL,  
LastName  NVARCHAR(40) NOT NULL,  
Title NVARCHAR(50) NOT NULL,  
DeptID SMALLINT NOT NULL,  
ManagerID INT NULL,  
 CONSTRAINT PK_EmployeeID PRIMARY KEY CLUSTERED (EmployeeID ASC)   
);  
  
INSERT INTO dbo.MyEmployees VALUES   
 (1, N'Ken', N'Sánchez', N'Chief Executive Officer',16,NULL)  
,(273, N'Brian', N'Welcker', N'Vice President of Sales',3,1)  
,(274, N'Stephen', N'Jiang', N'North American Sales Manager',3,273)  
,(275, N'Michael', N'Blythe', N'Sales Representative',3,274)  
,(276, N'Linda', N'Mitchell', N'Sales Representative',3,274)  
,(285, N'Syed', N'Abbas', N'Pacific Sales Manager',3,273)  
,(286, N'Lynn', N'Tsoflias', N'Sales Representative',3,285)  
,(16,  N'David',N'Bradley', N'Marketing Manager', 4, 273)  
,(23,  N'Mary', N'Gibson', N'Marketing Specialist', 4, 16);
GO

WITH DirectReports(ManagerID, EmployeeID, Title, EmployeeLevel) AS   
(  
    SELECT ManagerID, EmployeeID, Title, 0 AS EmployeeLevel  
    FROM dbo.MyEmployees   
    WHERE ManagerID IS NULL  
    UNION ALL  
    SELECT e.ManagerID, e.EmployeeID, e.Title, EmployeeLevel + 1  
    FROM dbo.MyEmployees AS e  
        INNER JOIN DirectReports AS d  
        ON e.ManagerID = d.EmployeeID   
)  
SELECT ManagerID, EmployeeID, Title, EmployeeLevel   
FROM DirectReports  
ORDER BY ManagerID;
GO

WITH DirectReports(ManagerID, EmployeeID, Title, EmployeeLevel) AS   
(  
    SELECT ManagerID, EmployeeID, Title, 0 AS EmployeeLevel  
    FROM dbo.MyEmployees   
    WHERE ManagerID IS NULL  
    UNION ALL  
    SELECT e.ManagerID, e.EmployeeID, e.Title, EmployeeLevel + 1  
    FROM dbo.MyEmployees AS e  
        INNER JOIN DirectReports AS d  
        ON e.ManagerID = d.EmployeeID   
)  
SELECT ManagerID, EmployeeID, Title, EmployeeLevel   
FROM DirectReports  
WHERE EmployeeLevel <= 2 ;
GO

WITH DirectReports(Name, Title, EmployeeID, EmployeeLevel, Sort)  
AS (SELECT CONVERT(VARCHAR(255), e.FirstName + ' ' + e.LastName),  
        e.Title,  
        e.EmployeeID,  
        1,  
        CONVERT(VARCHAR(255), e.FirstName + ' ' + e.LastName)  
    FROM dbo.MyEmployees AS e  
    WHERE e.ManagerID IS NULL  
    UNION ALL  
    SELECT CONVERT(VARCHAR(255), REPLICATE ('|    ' , EmployeeLevel) +  
        e.FirstName + ' ' + e.LastName),  
        e.Title,  
        e.EmployeeID,  
        EmployeeLevel + 1,  
        CONVERT (VARCHAR(255), RTRIM(Sort) + '|    ' + FirstName + ' ' +   
                 LastName)  
    FROM dbo.MyEmployees AS e  
    JOIN DirectReports AS d ON e.ManagerID = d.EmployeeID  
    )  
SELECT EmployeeID, Name, Title, EmployeeLevel  
FROM DirectReports   
ORDER BY Sort; 
GO

WITH CTE (EmployeeID, ManagerID, Title) AS  
(  
    SELECT EmployeeID, ManagerID, Title  
    FROM dbo.MyEmployees  
    WHERE ManagerID IS NOT NULL  
  UNION ALL  
    SELECT cte.EmployeeID, cte.ManagerID, cte.Title  
    FROM cte   
    JOIN  dbo.MyEmployees AS e   
        ON cte.ManagerID = e.EmployeeID  
)  
SELECT EmployeeID, ManagerID, Title  
FROM CTE 
OPTION (MAXRECURSION 2); 
GO

WITH CTE (EmployeeID, ManagerID, Title)  
AS  
(  
    SELECT EmployeeID, ManagerID, Title  
    FROM dbo.MyEmployees  
    WHERE ManagerID IS NOT NULL  
  UNION ALL  
    SELECT  e.EmployeeID, e.ManagerID, e.Title  
    FROM dbo.MyEmployees AS e  
    JOIN cte ON e.ManagerID = cte.EmployeeID  
)  
SELECT EmployeeID, ManagerID, Title  
FROM CTE;
GO

USE AdventureWorks2012;  
GO  
WITH Parts(AssemblyID, ComponentID, PerAssemblyQty, EndDate, ComponentLevel) AS  
(  
    SELECT b.ProductAssemblyID, b.ComponentID, b.PerAssemblyQty,  
        b.EndDate, 0 AS ComponentLevel  
    FROM Production.BillOfMaterials AS b  
    WHERE b.ProductAssemblyID = 800  
          AND b.EndDate IS NULL  
    UNION ALL  
    SELECT bom.ProductAssemblyID, bom.ComponentID, p.PerAssemblyQty,  
        bom.EndDate, ComponentLevel + 1  
    FROM Production.BillOfMaterials AS bom   
        INNER JOIN Parts AS p  
        ON bom.ProductAssemblyID = p.ComponentID  
        AND bom.EndDate IS NULL  
)  
SELECT AssemblyID, ComponentID, Name, PerAssemblyQty, EndDate,  
        ComponentLevel   
FROM Parts AS p  
    INNER JOIN Production.Product AS pr  
    ON p.ComponentID = pr.ProductID  
ORDER BY ComponentLevel, AssemblyID, ComponentID;
GO

USE AdventureWorks2012;  
GO  
WITH Parts(AssemblyID, ComponentID, PerAssemblyQty, EndDate, ComponentLevel) AS  
(  
    SELECT b.ProductAssemblyID, b.ComponentID, b.PerAssemblyQty,  
        b.EndDate, 0 AS ComponentLevel  
    FROM Production.BillOfMaterials AS b  
    WHERE b.ProductAssemblyID = 800  
          AND b.EndDate IS NULL  
    UNION ALL  
    SELECT bom.ProductAssemblyID, bom.ComponentID, p.PerAssemblyQty,  
        bom.EndDate, ComponentLevel + 1  
    FROM Production.BillOfMaterials AS bom   
        INNER JOIN Parts AS p  
        ON bom.ProductAssemblyID = p.ComponentID  
        AND bom.EndDate IS NULL  
)  
UPDATE Production.BillOfMaterials  
SET PerAssemblyQty = c.PerAssemblyQty * 2  
FROM Production.BillOfMaterials AS c  
JOIN Parts AS d ON c.ProductAssemblyID = d.AssemblyID  
WHERE d.ComponentLevel = 0;  
GO

IF OBJECT_ID('dbo.Person','U') IS NOT NULL DROP TABLE dbo.Person;  
GO  
CREATE TABLE dbo.Person(ID int, Name VARCHAR(30), Mother INT, Father INT);  
GO  
INSERT dbo.Person   
VALUES(1, 'Sue', NULL, NULL)  
      ,(2, 'Ed', NULL, NULL)  
      ,(3, 'Emma', 1, 2)  
      ,(4, 'Jack', 1, 2)  
      ,(5, 'Jane', NULL, NULL)  
      ,(6, 'Bonnie', 5, 4)  
      ,(7, 'Bill', 5, 4);  
GO  
WITH Generation (ID) AS  
(  
    SELECT Mother   
    FROM dbo.Person  
    WHERE Name = 'Bonnie'  
UNION  
    SELECT Father   
    FROM dbo.Person  
    WHERE Name = 'Bonnie'  
UNION ALL  
    SELECT Person.Father  
    FROM Generation, Person  
    WHERE Generation.ID=Person.ID  
UNION ALL  
    SELECT Person.Mother  
    FROM Generation, dbo.Person  
    WHERE Generation.ID=Person.ID  
)  
SELECT Person.ID, Person.Name, Person.Mother, Person.Father  
FROM Generation, dbo.Person  
WHERE Generation.ID = Person.ID;  
GO







