USE [AdventureWorks2019]
GO

/****** Object:  Index [ClusteredIndex-20210313-151718]    Script Date: 13-03-2021 15:17:36 ******/
CREATE CLUSTERED INDEX [ClusteredIndex-20210313-151718] ON [dbo].[Person]
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO


