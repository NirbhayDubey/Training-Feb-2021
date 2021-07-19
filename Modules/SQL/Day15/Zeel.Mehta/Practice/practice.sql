--------------------------TRANSACTION--------------------------

BEGIN TRANSACTION

UPDATE Person.Person
SET LastName='Harrison'

ROLLBACK TRANSACTION
SELECT FirstName,LastName FROM Person.Person

--------------------------CONCURRENCY--------------------------

BEGIN TRANSACTION

UPDATE Person.Person
SET LastName='Harrison'
WHERE BusinessEntityID=42;

SELECT LastName FROM Person.Person
WHERE BusinessEntityID=42;

ROLLBACK TRANSACTION

--------------------------NON-COMMITTED--------------------------

SET TRANSACTION ISOLATION LEVEL READ
COMMITTED

SELECT LastName from Person.Person
WHERE BusinessEntityID=1;
