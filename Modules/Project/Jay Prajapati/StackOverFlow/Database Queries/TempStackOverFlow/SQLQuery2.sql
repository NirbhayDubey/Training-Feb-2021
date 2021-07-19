USE StackOverFlow;
GO;

--Veiws
--1.	(QuestionID,Question,NumberOfAnswers,Views,VotesForQuestion)

Create VIEW VwQuestionDetails
AS
SELECT Q.QuestionID,Q.Question,
	COUNT(AnswerID) AS NumberOfAnswers,
	Q.TotalViews,
	Q.Vote AS 'VotesForQuestion'
FROM Questions AS Q
LEFT OUTER JOIN Answers AS A
ON Q.QuestionID = A.QuestionID
GROUP BY Q.QuestionID,Q.Question,Q.TotalViews,Q.Vote




/*2.	(UserID,NumberOfQuestionSAsk,NumberOfAnswersGive,NumberOfBadgesEarned)*/

CREATE VIEW VwUserQADetails
AS
 SELECT U.UserID,U.FullName,NumberOfQuestionsAsked,NumberOfAnwersGive,NumberOfBadgesEarned
 FROM AppUsers AS U
 LEFT OUTER JOIN (SELECT U.UserID AS 'UID', COUNT(QuestionID) AS 'NumberOfQuestionsAsked'
 FROM AppUsers AS U
 LEFT OUTER JOIN Questions AS Q
 ON U.UserID = Q.UserID
 GROUP BY U.UserID)As CntQue
 ON U.UserID = CntQue.UID
 LEFT OUTER JOIN ( SELECT U.UserID AS 'UID', COUNT(AnswerID) AS 'NumberOfAnwersGive'
 FROM AppUsers AS U
 LEFT OUTER JOIN Answers AS A
 ON U.UserID = A.USERID
 GROUP BY U.UserID) AS CntAns
 ON U.UserID = CntAns.UID
 LEFT OUTER JOIN ( SELECT U.UserID AS 'UID', COUNT(BEU.BadgeID) AS 'NumberOfBadgesEarned'
 FROM AppUsers AS U
 LEFT OUTER JOIN BadgesEarnedByUser AS BEU
 ON U.UserID = BEU.UserID
 GROUP BY U.UserID) AS CntBgs
 ON U.UserID = CntBgs.UID




/*3.	(UserID,NumberOfGoldBadgesEarned, NumberOfSilverBadgesEarned ,
NumberOfBronzeBadgesEarned,Reputation)*/

CREATE VIEW VwBadgesDetails
AS
SELECT U.UserID,U.FullName,NumberOfBronzeBadges,NumberOfSilverBadges,NumberOfGoldBadges
FROM AppUsers AS U
INNER JOIN(SELECT U.UserID, COUNT(BEU.BadgeID) AS 'NumberOfBronzeBadges'
FROM AppUsers AS U
LEFT OUTER JOIN (BadgesEarnedByUser AS BEU
INNER JOIN Badges AS B
ON BEU.BadgeID = B.BadgeID)
ON U.UserID = BEU.UserID
WHERE B.BadgeType = 'Bronze'
GROUP BY U.UserID
) AS CntBronze
ON U.UserID = CntBronze.UserID
INNER JOIN(SELECT U.UserID, COUNT(BEU.BadgeID) AS 'NumberOfSilverBadges'
FROM AppUsers AS U
LEFT OUTER JOIN (BadgesEarnedByUser AS BEU
INNER JOIN Badges AS B
ON BEU.BadgeID = B.BadgeID)
ON U.UserID = BEU.UserID
WHERE B.BadgeType = 'Silver'
GROUP BY U.UserID
) AS CntSilver
ON U.UserID = CntSilver.UserID
INNER JOIN(SELECT U.UserID, COUNT(BEU.BadgeID) AS 'NumberOfGoldBadges'
FROM AppUsers AS U
LEFT OUTER JOIN (BadgesEarnedByUser AS BEU
INNER JOIN Badges AS B
ON BEU.BadgeID = B.BadgeID)
ON U.UserID = BEU.UserID
WHERE B.BadgeType = 'Gold'
GROUP BY U.UserID
) AS CntGold
ON U.UserID = CntGold.UserID












