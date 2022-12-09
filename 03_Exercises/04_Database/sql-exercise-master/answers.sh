1-
SELECT Name
from students ;
2-
SELECT Age
From students
where Age>30
3-
Select Name
from students
where Gender='F' and Age=30;
4-
SELECT Points
From students
where Name='Alex'
5-
INSERT INTO students (ID,Name,Age,Gender,Points)
VALUES ('7','sarah','29','F','400');
6-
UPDATE students
SET Points = '500'
WHERE Name = 'Basma';
7-
UPDATE students
SET Points = '100'
WHERE Name = 'Alex';   