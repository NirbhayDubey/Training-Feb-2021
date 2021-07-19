--DIRTY READ 
UPDATE Person.Person
SET LastName='Bartex'
WHERE BusinessEntityID=42;

SELECT LastName FROM Person.Person
WHERE BusinessEntityID=42;

BEGIN TRANSACTION

UPDATE Person.Person
SET LastName='Harrison'
WHERE BusinessEntityID=1;