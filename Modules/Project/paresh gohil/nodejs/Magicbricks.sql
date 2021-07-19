CREATE DATABASE Magicbricks
GO

USE Magicbricks

CREATE TABLE Users
(
	UserID INT CONSTRAINT PK_Userid PRIMARY KEY,
	User_Type VARCHAR(20), -- Buyer , Seller and Builder --
	UserName VARCHAR(20),
	User_Mobile_No BIGINT,
	User_Email VARCHAR(50),
	User_Password VARCHAR(20)
)

CREATE TABLE Addresss
(
	UserID INT CONSTRAINT FK_Address_Userid FOREIGN KEY REFERENCES Users(UserID),
	Names VARCHAR(30),
	Mobile_Number BIGINT,
	Address_1_2 VARCHAR(500),
	Town VARCHAR(20),
	City VARCHAR(20),
	States VARCHAR(20),
	Pincode BIGINT
)
CREATE TABLE PropertyDetails
(
	Property_Type_id INT CONSTRAINT PK_Propertyid PRIMARY KEY,
	Property_Name VARCHAR(50),
	Property_Type_Name VARCHAR(50), -- FLat , Commercial , .... --
	Property_City VARCHAR(20),
	Property_Address VARCHAR(100),
	Property_Explore VARCHAR(10), -- Buy OR Rent --
	Property_Owner_Name VARCHAR(20),
	Property_Marketer VARCHAR(20), 
)

CREATE TABLE Loans
(
	Loan_ID INT CONSTRAINT PK_Loan_id PRIMARY KEY,
	UserID INT CONSTRAINT FK_Loan_Userid FOREIGN KEY REFERENCES Users(UserID),
	Property_Type_id INT CONSTRAINT FK_Loan_Property FOREIGN KEY REFERENCES PropertyDetails(Property_Type_id),
	Loan_Type VARCHAR(20),
	Bank_Partner VARCHAR(50),
	Customized_Loans VARCHAR(30),
	Loan_Amount BIGINT,
)

CREATE TABLE PropertySold
(
	Property_Type_id INT CONSTRAINT FK_Sold_Property FOREIGN KEY REFERENCES PropertyDetails(Property_Type_id),
	UserID  INT CONSTRAINT FK_SoldProperty_Userid FOREIGN KEY REFERENCES Users(UserID), -- Buyer --
	UserID1  INT CONSTRAINT FK_SoldProperty1_Userid FOREIGN KEY REFERENCES Users(UserID), -- Seller --
	Property_Name VARCHAR(50),
	Property_Type VARCHAR(20)
)

CREATE TABLE RateReview
(
	Property_Type_id INT CONSTRAINT FK_RateReview_Property FOREIGN KEY REFERENCES PropertyDetails(Property_Type_id),
	Rating FLOAT,
	Review VARCHAR(500)
)

CREATE TABLE SqftImage
(
	Property_Type_id INT CONSTRAINT FK_Sqft_Property FOREIGN KEY REFERENCES PropertyDetails(Property_Type_id),
	BHK INT,
	Area BIGINT,
	Images VARBINARY(MAX),
	Budget BIGINT
)

CREATE TABLE SellerImage
(
	Property_Type_id INT CONSTRAINT FK_SellerImg_Property FOREIGN KEY REFERENCES PropertyDetails(Property_Type_id),
	Images VARBINARY(MAX)
)

CREATE TABLE PayRent
(
	Rent_id INT CONSTRAINT PK_PayRent_Rentid PRIMARY KEY,
	UserID INT CONSTRAINT FK_PayRent_Userid FOREIGN KEY REFERENCES Users(UserID),
	ServiceName VARCHAR(20),-- Pay Rent --
	Months TINYINT,
	Rent_Amount INT,
	City VARCHAR(20),
	Mobile_Number BIGINT,
	Landlord_Name VARCHAR(20),
	Landlord_Use VARCHAR(20) -- Netbanking OR Wallets OR UPI OR Debit/Credit Card --
)

CREATE TABLE RentAgreement
(
	UserID INT CONSTRAINT FK_RentAgreement_Userid FOREIGN KEY REFERENCES Users(UserID),
	Bd_id INT CONSTRAINT FK_RentAgreement_Bdid FOREIGN KEY REFERENCES BasicDetails(Bd_ID),
	Pd_id INT CONSTRAINT FK_RentAgreement_Pdid FOREIGN KEY REFERENCES PropertyDetails1(Pd_ID),
	Ag_id INT CONSTRAINT FK_RentAgreement_Agid FOREIGN KEY REFERENCES AgreementDetails(Ag_ID),
	Dates DATE 
)

CREATE TABLE BasicDetails
(
	Bd_id INT CONSTRAINT PK_BasicDetails_Bdid PRIMARY KEY,
	L_Title VARCHAR(20),
	L_Name VARCHAR(20),
	L_Address VARCHAR(50),
	L_Address1 VARCHAR(50),
	L_Pincode BIGINT,
	L_City VARCHAR(20),
	L_State VARCHAR(20),
	T_Title VARCHAR(20),
	T_Name VARCHAR(20),
	T_Address VARCHAR(50),
	T_Address1 VARCHAR(50),
	T_Pincode BIGINT,
	T_City VARCHAR(20),
	T_State VARCHAR(20)
)

CREATE TABLE PropertyDetails1
(
	Pd_ID INT CONSTRAINT PK_PropertyDetails_Pdid PRIMARY KEY,
	P_Address VARCHAR(50),
	P_Pincode BIGINT,
	P_City VARCHAR(20),
	P_State VARCHAR(20)
)
-- Table pdetails and otherdetails include in Propertydetails table --
CREATE TABLE PDetails
(
	Pd_ID INT CONSTRAINT FK_PDetails_Pdid FOREIGN KEY REFERENCES PropertyDetails1(Pd_ID),
	P_Area INT,
	P_Bedrooms INT,
	P_Living_Rooms INT,
	P_Bathrooms INT,
	P_Parking INT,
	P_Kitchen INT,
	P_Servantrooms INT
)

CREATE TABLE OtherDetails
(
	Pd_ID INT CONSTRAINT FK_OtherDetails_Pdid FOREIGN KEY REFERENCES PropertyDetails1(Pd_ID),
	P_Fan INT,
	P_Tube INT,
	P_Bed INT,
	P_Sofa INT,
	P_Table INT,
	P_Chair INT,
	P_AC INT,
	P_Geyser INT,
	P_Oven INT,
	P_Fridge INT,
	P_Washing_M INT,
	P_Others INT,
)

CREATE TABLE AgreementDetails
(
	Ag_ID INT CONSTRAINT PK_AgreementDetails PRIMARY KEY,
	Stamp BIGINT,
	A_Start_date DATE,
	A_duration VARCHAR(10),
	Rent_Paid VARCHAR(20),
	Rent_Amount BIGINT,
	Maintenance_Paid VARCHAR(20),
	Maintenance_Amount BIGINT,
	Security_Amount BIGINT,
	Security_Paid VARCHAR(20),
	Cheque_No BIGINT,
	Transaction_id VARCHAR(20),
	Notice_Period INT,
	Lock_in_Period INT,
	Appointed_By VARCHAR(20)
)

CREATE TABLE RentReceipts
(
	Rent_id INT CONSTRAINT FK_PayRent_Rentid FOREIGN KEY REFERENCES PayRent(Rent_id),
	UserID INT CONSTRAINT FK_RentReceipt_Userid FOREIGN KEY REFERENCES Users(UserID),
	Rent_Amount INT,
	City VARCHAR(20),
	L_Name VARCHAR(20),
	L_Pan VARCHAR(20),
	Receipt_Start_date DATE,
	Receipt_End_date DATE,
	T_Name VARCHAR(20),
	T_Mobile_No BIGINT,
	T_Email VARCHAR(50)
)

CREATE TABLE TenantVerfication
(
	UserID INT CONSTRAINT FK_TenantVerfication_UID FOREIGN KEY REFERENCES Users(UserID),
	ServiceName VARCHAR(20),
	Package BIGINT,
	Identity_Verification VARCHAR(5),
	Criminal_court_check VARCHAR(5),
	Civil_litigation_check VARCHAR(5),
	Permanent_Address VARCHAR(5),
	Reference_check VARCHAR(5),
	Price BIGINT,
	Payment_Option VARCHAR(20),
	GST_Number VARCHAR(40)
)

CREATE TABLE RentalFurniture
(
	UserID INT CONSTRAINT FK_RentalFurniture_UID FOREIGN KEY REFERENCES Users(UserID),
	Register_Name VARCHAR(20),
	Register_Email VARCHAR(50),
	Register_Mobile BIGINT,
	Register_City VARCHAR(20),
	R_Name VARCHAR(20),
	F_Name VARCHAR(20),
	C_Name VARCHAR(20),
	Dates DATE
)

CREATE TABLE LegalServices
(
	UserID INT CONSTRAINT FK_LegalServices_UID FOREIGN KEY REFERENCES Users(UserID),
	ServiceName VARCHAR(20),
	Register_Name VARCHAR(20),
	Package_Name VARCHAR(20),
	Package_Description VARCHAR(500),
	Package_Price BIGINT,
	Service_Partner VARCHAR(20),
	Payment_Option VARCHAR(20)
)

CREATE TABLE DecorDesign
(
	UserID INT CONSTRAINT FK_DecorDesign_UID FOREIGN KEY REFERENCES Users(UserID),
	Register_Name VARCHAR(20),
	Register_Email VARCHAR(50),
	Register_Mobile BIGINT,
	City VARCHAR(20),
	Livspace VARCHAR(5),
	ST_Gloobain_glass VARCHAR(5),
	Bonito_design VARCHAR(5),
	Godrel_interior VARCHAR(5),
	Homelane_interior VARCHAR(5),
	Berger_painting VARCHAR(5),
	Amplus_Solar VARCHAR(5),
	Dates DATE
)

CREATE TABLE HomeServices
(
	UserID INT CONSTRAINT FK_HomeServices_UID FOREIGN KEY REFERENCES Users(UserID),
	ServiceFor VARCHAR(20),
	Register_Name VARCHAR(20),
	Servicess VARCHAR(50),
	ServiceName VARCHAR(50),
	Service_description VARCHAR(500),
	Service_Price BIGINT,
	Service_Partner VARCHAR(50),
	Dates DATE,
	Times Time,
	Payment_Option VARCHAR(50)
)

CREATE TABLE Vastu
(
	UserID INT CONSTRAINT FK_Vastu_UID FOREIGN KEY REFERENCES Users(UserID),
	Register_Name VARCHAR(20),
	ServiceName VARCHAR(50),
	Vastu_Consultants_Name VARCHAR(50),
	Package VARCHAR(20),
	Price BIGINT,
	Payment_Option VARCHAR(30)
)

CREATE TABLE CardDetails
(
	UserID INT CONSTRAINT FK_CardDetails_UID FOREIGN KEY REFERENCES Users(UserID),
	ServiceName VARCHAR(50),
	Card_Number BIGINT,
	MONTHs INT,
	Years INT,
	CVV INT,
	Card_HolderName VARCHAR(50)
)

CREATE TABLE Netbanking
(
	UserID INT CONSTRAINT FK_Neetbanking_UID FOREIGN KEY REFERENCES Users(UserID),
	ServiceNmae VARCHAR(50),
	Bank_Name VARCHAR(50),
	Account_No VARCHAR(50),
	IFSC_Code VARCHAR(50),
	Landlord_pan VARCHAR(50)
)

CREATE TABLE Wallets
(
	UserID INT CONSTRAINT FK_Wallets_UID FOREIGN KEY REFERENCES Users(UserID),
	ServiceName VARCHAR(50),
	Options VARCHAR(50) -- paytm , googlepay etc. --
)

CREATE TABLE UPI
(
	UserID INT CONSTRAINT FK_UPI_UID FOREIGN KEY REFERENCES Users(UserID),
	ServiceName VARCHAR(50),
	UPI_id VARCHAR(50),
	Landlord_pan VARCHAR(50)
)