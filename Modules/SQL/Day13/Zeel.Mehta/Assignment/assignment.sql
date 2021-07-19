--Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF. PF is 12% of the basic salary.

CREATE FUNCTION HumanResources.pf(@SALARY FLOAT)
RETURNS FLOAT
AS
BEGIN
RETURN (@SALARY * 0.12)
END

------------------------PRINT------------------------
DECLARE @SALARY FLOAT
DECLARE @MSG VARCHAR(20) = 'PF of SALARY : '
SET @SALARY = HumanResources.pf(1000)
PRINT @MSG
PRINT @SALARY

--Create a scaler Function which will compute PT which will accept MontlyEarning. Criteria as below.
CREATE FUNCTION HumanResources.pf1(@EARNING INT)
RETURNS INT
AS
BEGIN
	IF(@EARNING <5999)
		BEGIN
		RETURN(@EARNING)
		END
	ELSE IF(@EARNING BETWEEN 6000 AND 8999)
		BEGIN
		RETURN(@EARNING - 80)
		END
	ELSE IF(@EARNING BETWEEN 9000 AND 11999)
		BEGIN
		RETURN(@EARNING - 150)
		END
	ELSE IF(@EARNING > 11999)
		BEGIN
		RETURN(@EARNING - 200)
		END
RETURN ''
END

------------------------PRINT------------------------

DECLARE @EARNING INT
DECLARE @MSG VARCHAR(20) = 'MonthlyEarning : '
SET @EARNING = HumanResources.pf1(7000)
PRINT @MSG
PRINT @EARNING


--------------------------SELF STUDY--------------------------

CREATE FUNCTION HumanResources.FULLNAME1(@FNAME VARCHAR(10),@SNAME VARCHAR(10))
RETURNS VARCHAR(10)
AS
BEGIN 
	DECLARE @CC VARCHAR(20)
	SET @CC=@FNAME+' '+@SNAME
	RETURN(@CC)
END

DECLARE @NAME VARCHAR(10)
SET @NAME = HumanResources.FULLNAME1('ZEEL','MEHTA')
PRINT @NAME




