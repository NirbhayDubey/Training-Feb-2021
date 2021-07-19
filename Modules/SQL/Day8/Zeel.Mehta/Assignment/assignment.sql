IF EXISTS (SELECT * FROM sys.objects
WHERE object_id = OBJECT_ID(N’[dbo] . [PlanetsID]
AND type in (N’U’))
USE AdventureWorks2012
DROP TABLE [dbo].[PlanetsID]
GO
USE [AdventureWorks2012]
GO
CREATE TABLE [dbo].[PlanetsID](
[ID] [int] NOT NULL,
[Item] [int] NOT NULL,
[Value] [int] NOT NULL
) ON [PRIMARY]
GO
INSERT INTO PlanetsID VALUES (4, 23, 66)
INSERT INTO PlanetsID VALUES (1, 12, 59)
INSERT INTO PlanetsID VALUES (3, 66, 24)
SELECT * FROM PlanetsID
GO