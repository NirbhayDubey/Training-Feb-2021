----------------------- CREATION OF TRIGGER ---------------------------

CREATE TRIGGER  trgInsertShift ON HumanResources.Shift
FOR INSERT 
AS
DECLARE @ModifiedDate datetime
SELECT @ModifiedDate = ModifiedDate FROM Inserted
IF (@ModifiedDate != getdate())
BEGIN
PRINT 'The modified date should be the currenrt  date. Hence, cannot insert.'
ROLLBACK TRANSACTION
END


------------------------ CREATING A DELETE TRIGGER --------------------------

CREATE TRIGGER trgDeleteDepartment
ON HumanResources.Department
FOR DELETE
PRINT 'Deletion of Department is not  allowed'
ROLLBACK TRANSACTION
RETURN

----------------------------- CREATING AN UPDATE TRIGGER ----------------------------

CREATE TRIGGER trgUpadteEmployeePayHistory
ON HumanResources.EmployeePayHistory
FOR UPDATE
AS
IF UPDATE (Rate)
BEGIN 
DECLARE @AvgRate float
SELECT @AvgRate = AVG(Rate)
FROM HumanResources.EmployeePayHistory
IF (@AvgRate > 20)
BEGIN
PRINT 'The average value of rate cannot be  more than 20'
ROLLBACK TRANSACTION
END
END


-------------------------------- CREATING AN AFTER TRIGGER ------------------------------

CREATE TRIGGER trgDeleteShift
ON HumanResources.Shift
AFTER DELETE
AS
PRINT 'Deletion Successful'

--------------------------------- CREATING AN INSTEAD OF TRIGGER ------------------------------

CREATE TRIGGER trgDelete
ON HumanResources.Project
INSTEAD OF DELETE
AS
PRINT 'Project records cannot be deleted'

--------------------------------- CREATING A DDL TRIGGER -------------------------------------

CREATE TRIGGER safety
ON DATABASE
FOR DROP_TABLE , ALTER_TABLE
AS
PRINT 'You must disable trigger "safety" to drop or alter tables!'
ROLLBACK

----------------------------------- ALTER TRIGGER ------------------------------------

ALTER TRIGGER HumanResources.trgInsertShift
ON HumanResources.Shift
FOR INSERT
AS
DECLARE @Modifieddate datetime
SELECT @Modifieddate = ModifiedDate 
FROM Inserted
IF (@Modifieddate != getdate())
BEGIN
RAISERROR ('The modified date is not the  current date. The transaction cannot be  processed.',10,1)
ROLLBACK TRANSACTION
END
RETURN
