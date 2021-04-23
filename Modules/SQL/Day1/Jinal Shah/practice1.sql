
-----------sqldb1-----------

CREATE TABLE Countries ( 
COUNTRY_ID varchar(2),
COUNTRY_NAME varchar(40)
CHECK(COUNTRY_NAME IN('Italy','India','China')) ,
REGION_ID decimal(10,0),
Constraint Coun_And_Reg_Id Unique(COUNTRY_ID,REGION_ID)
);

Select * From dbo.Countries;

INSERT INTO Countries (COUNTRY_ID, COUNTRY_NAME, REGION_ID)
VALUES ('A1', 'India', 2876456);

INSERT INTO Countries (COUNTRY_ID, COUNTRY_NAME, REGION_ID)
VALUES ('A2', 'USA', 2876426);

INSERT INTO Countries (COUNTRY_ID, COUNTRY_NAME, REGION_ID)
VALUES ('', 'china', 28426);

INSERT INTO Countries (COUNTRY_ID, COUNTRY_NAME)
VALUES ('v3', 'china' );

INSERT INTO Countries (COUNTRY_NAME, REGION_ID)
VALUES ('india', 1328426);

INSERT INTO Countries ( COUNTRY_NAME)
VALUES ( 'china');

INSERT INTO Countries ( COUNTRY_NAME)
VALUES ( 'italy');

INSERT INTO Countries (COUNTRY_NAME, REGION_ID)
VALUES ('italy', 1328456);

INSERT INTO Countries (COUNTRY_ID, COUNTRY_NAME, REGION_ID)
VALUES ('A5', 'italy', 2116426);

