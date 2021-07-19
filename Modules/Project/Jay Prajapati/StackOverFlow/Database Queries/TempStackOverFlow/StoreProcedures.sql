
-- Procedure for Give Badge to the perticular User 

CREATE PROCEDURE GiveBadgeToUser @UserId INT, @BadgeId INT
AS
	INSERT INTO BadgesEarnedByUser (UserID,BadgeID,DateOfEarned)
	VALUES(@UserId,@BadgeId,GETDATE())
GO


--	Procedure for Apply Bookmark to question by User

CREATE PROCEDURE ApplyBookmarkByUser @UserId INT, @QuestionId INT
AS
	INSERT INTO Bookmarks(UserId,QuestionID)
	VALUES(@UserId,@QuestionId)
GO


-- Procedure to Give Vote to Question

CREATE PROCEDURE GiveVoteToQuestion @QuestionId INT
AS
	DECLARE @currentVote INT;
	SET @currentVote = (SELECT Vote 
				From Questions
				WHERE QuestionID = @QuestionId);
	Update Questions
	SET Vote = @currentVote + 1
	WHERE QuestionID = @QuestionId;
GO


-- Procedure to Give Vote to Answer

CREATE PROCEDURE GiveVoteToAnswer @AnswerId INT
AS
	DECLARE @currentVote INT;
	SET @currentVote = (SELECT Vote 
				From Answers
				WHERE AnswerID = @AnswerId);
	Update Answers
	SET Vote = @currentVote + 1
	WHERE AnswerID = @AnswerId;
GO

