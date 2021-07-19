Create Database BigBasket
Use BigBasket;

--customer informations 
CREATE TABLE Customer
(
Cust_ID Varchar(20) NOT NULL CONSTRAINT PKCustID PRIMARY KEY,
Cust_Name Varchar(50) NOT NULL,
Addr_ID VARCHAR(50) NOT NULL CONSTRAINT FKAddrID FOREIGN KEY REFERENCES Address(Addr_ID),
PhoneNo VARCHAR(50) NOT NULL,
CustPassword VARCHAR(60) NOT NULL,
Conf_Pwd VARCHAR(60) NOT NULL
)

INSERT INTO Customer(Cust_ID,Cust_Name,Addr_ID,PhoneNo) VALUES 
(1,'PARTH',100,910641608,'PARTH','PARTH'),
(2,'KUSH',101,6353018422,'KUSH','KUSH'),
(3,'TARUN',102,8487484905,'TARUN','TARUN'),
(4,'PARAM',103,9106641609,'PARAM','PARAM')


CREATE TABLE Address
(
Addr_ID VARCHAR(50) NOT NULL CONSTRAINT PKAddrID PRIMARY KEY,
Address VARCHAR(50) NOT NULL,
City_ID VARCHAR(20) NOT NULL CONSTRAINT FKCityID FOREIGN KEY REFERENCES City(City_ID),
)

INSERT INTO Address (Addr_ID,Address,City_ID)
VALUES 
(100,'"SHANTI-BHUVAN",NEAR NAVYUG CINEMA',300),
(101,'HIMMAT PALACE',300),
(102,'WHITE HOUSE',401),
(104,'MANNAT',305)

CREATE TABLE City 
(
City_ID VARCHAR(20) NOT NULL CONSTRAINT PKCityID PRIMARY KEY,
Country_ID VARCHAR(30) NOT NULL CONSTRAINT FKCountryID FOREIGN KEY REFERENCES Country(Country_ID),
City_Name VARCHAR(30) NOT NULL
)

INSERT INTO City (City_ID,Country_ID,City_Name) VALUES 
(300,201,'AHEMDABAD'),
(301,201,'BARODA'),
(305,201,'MUMBAI'),
(401,203,'PARIS');
SELECT * FROM CITY

CREATE TABLE Country 
(
Country_ID VARCHAR(30) NOT NULL CONSTRAINT PKCountryID PRIMARY KEY,
CountryName VARCHAR(50) NOT NULL 
)

INSERT INTO Country (Country_ID,CountryName) VALUES
(201,'INDIA'),
(202,'BANGLADESH'),
(203,'ENGLAND'),
(204,'JAPAN'),
(205,'AUSTRALIA')

SELECT * FROM Country
CREATE TABLE Sales 
(
ID VARCHAR(20) NOT NULL CONSTRAINT  PKID PRIMARY KEY,
ProductID VARCHAR(30) NOT NULL CONSTRAINT FKProductID FOREIGN KEY REFERENCES Product(ProductID),
ProductQty INT NOT NULL ,
Discount FLOAT NOT NULL,
GrossAmount MONEY NOT NULL,
InvoiceDate Date NOT NULL,
ProductPrice MONEY NOT NULL,
Cust_ID Varchar(20) NOT NULL CONSTRAINT FKCust_ID FOREIGN KEY REFERENCES Customer(Cust_ID),
ShippedAddress VARCHAR(50) NOT NULL,
Taxes MONEY NOT NULL,
InvoiceAmount MONEY NOT NULL
)


INSERT INTO Sales(ID,ProductID,ProductQty,Discount,GrossAmount,InvoiceDate,
ProductPrice,Cust_ID,ShippedAddress,Taxes,InvoiceAmount)
VALUES 
('S1','P1',2,'12',30,'2018-06-21',15,1,'Malad west',12,25),
('S2','P1',5,'12',75,'2018-06-21',15,2,'kandiwali east',12,70),
('S3','P3',2,'15',56,'2018-06-21',28,3,'navrangpura',12,50),
('S4','P4',1,'18',55,'2018-06-21',55,4,'halvad',12,50);

CREATE TABLE Product
(
ProductID VARCHAR(30) NOT NULL CONSTRAINT PKProductID PRIMARY KEY,
ProductName VARCHAR(50) NOT NULL,
BrandID VARCHAR(30) NOT NULL CONSTRAINT FKBrandID FOREIGN KEY REFERENCES Brand(BrandID),
CartID VARCHAR(50) NOT NULL CONSTRAINT FKCartID FOREIGN KEY REFERENCES Cart(CartID),
ProductPrice MONEY NOT NULL 
)

INSERT INTO Product(ProductID,ProductName,BrandID,CartID,ProductPrice) VALUES 
('P1','PENCIL','B1','CA1',15),
('P2','PENCIL','B2','CA1',20),
('P3','MILK','B3','CA4',28),
('P4','TEA','B4','CA4',55)

CREATE TABLE Brand 
(
BrandID VARCHAR(30) NOT NULL CONSTRAINT PKBrandID PRIMARY KEY,
BrandName VARCHAR(50) NOT NULL ,
CategoryID VARCHAR(30) NOT NULL CONSTRAINT FKCatID FOREIGN KEY REFERENCES Category(CategoryID),
)

INSERT INTO Brand(BrandID,BrandName,CategoryID) VALUES
('B1','Apsara','C3'),
('B2','NATARAJ','C3'),
('B3','AMUL','C4'),
('B4','TAAZA','C4');

CREATE TABLE Category
(
CategoryId VARCHAR(30) NOT NULL CONSTRAINT PKCatID PRIMARY KEY,
CategoryName VARCHAR(50) NOT NULL,
)

INSERT INTO Category(CategoryId,CategoryName) VALUES
('C1','FRUITS'),
('C2','VEGETABLES'),
('C3','STATIONARY'),
('C4','DAILY ESSENTIALS'),
('C5','ICECREAMS');

CREATE TABLE Cart
(
CartID VARCHAR(50) NOT NULL CONSTRAINT PKCartID PRIMARY KEY,
Time TIME NOT NULL
)

INSERT INTO Cart
(CartID,Time) values 
('CA1','13:30'),
('CA2','2:50'),
('CA3','11:19'),
('CA4','14:30')

SELECT * FROM Cart

CREATE TABLE Payment 

(
PayID VARCHAR(30) NOT NULL CONSTRAINT PKPayID PRIMARY KEY,
ID VARCHAR(20) NOT NULL CONSTRAINT FKID FOREIGN KEY REFERENCES Sales(ID),
Cust_ID Varchar(20) NOT NULL CONSTRAINT FKCustomer FOREIGN KEY REFERENCES Customer(Cust_ID),
Type VARCHAR(30) NOT NULL 

)



										----create Procedures :-----

---Display customer record which include name Address and phone no:
CREATE PROCEDURE bbCustomerDetails 
@Cust_ID VARCHAR(20)

AS
SET NOCOUNT ON
SELECT C.Cust_ID,A.ADDRESS FROM Customer AS C JOIN Address AS A ON C.Addr_ID = A.Addr_ID 
WHERE C.Cust_ID = @Cust_ID 



---Category  list stored procedure 

CREATE PROCEDURE bbCategory
AS
SET NOCOUNT ON 

SELECT CategoryID ,CategoryName FROM Category 
WHERE CategoryId = 1 
ORDER BY CategoryName


---SALES STORE PROCEDURES 

CREATE PROCEDURE bbSaleSearch 

--Name : Parth
--Product: Pencil
--InvoiceDate : 2021-23-3
--RETURNS THE SALES ID BASED ON CUSTOMERID AND INVOICE DATE 

@Cust_ID varchar(20),
@InvoiceDate  Date

AS

SET NOCOUNT ON 

SELECT Cust_ID , InvoiceDate FROM Sales
WHERE Cust_ID = @Cust_ID
AND InvoiceDate = @InvoiceDate 
RETURN


--PROCEDURE TO CREATE SALES TOTAL

CREATE PROCEDURE bbSaleTotals
@SaleID VARCHAR(20)

AS

SELECT ID, SUM(ProductPrice * ProductQty) AS Total , Discount,Taxes, InvoiceAmount ,
SUM(ProductPrice * ProductQty) + Discount + Taxes + InvoiceAmount FROM Sales
WHERE ID = @SaleID

GROUP BY ID,Taxes,InvoiceAmount,Discount RETURN



----procedure of getting customer with its respective product :
CREATE PROCEDURE getProductCustomerRelation
AS
BEGIN
SET NOCOUNT ON;

SELECT C.Cust_ID ,S.ProductID FROM Customer AS C 
JOIN Sales AS S ON C.Cust_ID = S.Cust_ID 

END 


---PROCEDURE OF GETTING PRODUCT WITH ITS BRAND AND CATEGORY :

ALTER PROCEDURE bbProductDescription
@ProductID VARCHAR(50)
AS
BEGIN
SET NOCOUNT ON;

SELECT P.ProductName , B.BrandName , C.CategoryName FROM Product AS P JOIN Brand AS B ON P.BrandID =B.BrandID
JOIN Category AS C ON C.CategoryId = B.CategoryID 
WHERE P.ProductID = @ProductID

END 

/*Procedure which will accept input in JSON parameter Cust_ID,CustomerName,Addr_ID,PhoneNo  
And insert these record in the Deposit table*/

CREATE PROCEDURE InsertJSON
@insJSON nvarchar(max)
AS
SET NOCOUNT ON ;

DECLARE @Cust_ID VARCHAR(20)
DECLARE @Cust_Name VARCHAR(50)
DECLARE @Addr_ID VARCHAR(50)
DECLARE @PhoneNo VARCHAR(50)
DECLARE @CustPassword VARCHAR(60)
DECLARE @Conf_Pwd VARCHAR(60)


INSERT INTO Customer
VALUES (@Cust_ID,@Cust_Name,@Addr_ID,@PhoneNo,@CustPassword,@Conf_Pwd)


DECLARE @JSONData NVARCHAR(MAX) 
SET @JSONData = N'
[{
"Cust_ID":6 , "Cust_Name":"Anil","Addr_ID":104,"PhoneNo":8798784565,"CustPassword"="ANIL","Conf_Pwd"="ANIL"},
{"Cust_ID":7 , "Cust_Name":"Sunil","Addr_ID":105,"PhoneNo":9875464656,"CustPassword"="SUNIL","Conf_Pwd"="SUNIL"
}]
'
EXECUTE InsertJSON @JSONData;
SELECT * FROM Customer


--PROCEDURE THAT WILL DISPLAY THE CUSTOMER NAME AND PAYMENT 

CREATE PROCEDURE bbCustomerPayment
@CustId VARCHAR(50)
AS
BEGIN 
SELECT C.Cust_Name,P.Type,S.InvoiceAmount FROM Customer AS C JOIN Sales AS S ON C.Cust_ID = S.Cust_ID
JOIN Payment AS P ON S.ID = P.ID WHERE C.Cust_ID = @CustId
END 

--WANT TO SEE THE DETAILS OF PRODUCT IN THE CART 

CREATE PROCEDURE bbCustomerCartDetails 
AS 
SET NOCOUNT ON 
BEGIN

SELECT * FROM Product WHERE ProductID IN (SELECT ProductID FROM Sales WHERE (ID IN (
SELECT ID FROM Cart)))
END


---IF CUSTOMER WANTS TO MODIFY THE PRODUCT 

DELETE FROM Sales WHERE (ProductID = 'P1' and Cust_ID IN (
SELECT Cust_ID FROM Customer WHERE Cust_ID = 1));



--if admin wants to see what are the products purchased on particular date 
CREATE PROCEDURE bbAdminCheck
AS 
SET NOCOUNT ON 
BEGIN
SELECT ProductID FROM Sales WHERE InvoiceDate = '2021-03-01'
END 

--create procedure to find how much product sold on a particular date 

CREATE PROCEDURE bbCountProduct
AS
SET NOCOUNT ON 
BEGIN 

SELECT COUNT(P.ProductID) AS Pid , S.InvoiceDate FROM Sales AS S JOIN Product AS P 
ON S.ProductID = P.ProductID 
GROUP BY (S.InvoiceDate)
END 

---SHOW THE DETAILS OF THE CUSTOMER WHO HAS NOT PURCHASED ANYTING 
CREATE PROCEDURE bbCustomerPayment 
AS 
SET NOCOUNT ON 
BEGIN
SELECT * FROM Customer WHERE Cust_ID NOT IN (SELECT Cust_ID FROM Payment);
END 

---CREATE A PROCEDURE OF NAME OF CUSTOMER WITH THEIR PAYMENT TYPE:

CREATE PROCEDURE bbCustomerPaymentType 
@CustID VARCHAR(20)
AS

SET NOCOUNT ON 
BEGIN 
SELECT C.Cust_Name ,P.Type FROM Customer AS C JOIN Payment AS P ON C.Cust_ID = P.Cust_ID 
WHERE C.Cust_ID = @CustID
END




											----CREATING VIEWS -----

	   
--creating a view of which brand has which category 
CREATE VIEW bbBrandCategory AS
SELECT P.ProductName , B.BrandName , C.CategoryName FROM Product AS P JOIN Brand AS B ON P.BrandID =B.BrandID
JOIN Category AS C ON C.CategoryId = B.CategoryID 


---creating a view of what are the products purchased on particular date 
CREATE VIEW bbProductPurchased AS
SELECT ProductID FROM Sales WHERE InvoiceDate = '2021-03-01'

--CREATING A VIEW how much product sold on a particular date 

CREATE VIEW bbProductSold
AS SELECT COUNT(P.ProductID) AS Pid , S.InvoiceDate FROM Sales AS S JOIN Product AS P 
ON S.ProductID = P.ProductID 
GROUP BY (S.InvoiceDate)

---Creating a view of getting customer with its respective product :

CREATE VIEW bbCustomerProduct
AS 
SELECT C.Cust_ID ,S.ProductID FROM Customer AS C 
JOIN Sales AS S ON C.Cust_ID = S.Cust_ID 


--Creating  a view of getting customer details with its respective address 

CREATE VIEW bbCustomerDeatils 
As
SELECT C.Cust_ID,A.ADDRESS FROM Customer AS C JOIN Address AS A ON C.Addr_ID = A.Addr_ID 


--creating a view of getting customer name with its city name and country name 

CREATE VIEW bbCustomerAddress
AS
SELECT C.Cust_Name ,A.Address,Ci.City_Name, Co.CountryName FROM Customer AS C JOIN 
Address AS A ON C.Addr_ID = A.Addr_ID JOIN City AS Ci ON A.City_ID = Ci.City_ID JOIN
Country AS Co ON Ci.Country_ID = Co.Country_ID 


---Create a view of getting Category  list 
CREATE VIEW bbCategoryViews AS
SELECT CategoryID ,CategoryName FROM Category 
WHERE CategoryId = 1 

--create view of getting product name ,and brand name and category name :
CREATE VIEW BbproductDetail
AS
Select P.ProductID, P.ProductName , B.BrandName ,C.CategoryName FROM Product AS P Join Brand AS B on P.BrandID = B.BrandID 
Join Category as C On B.CategoryID = C.CategoryId; 


							


