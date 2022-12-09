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
----CREATE TABLE---
CREATE TABLE GRADUATES(
   ID INT AUTO_INCREMENT,
   NAME TEXT NOT NULL UNIQUE,
   AGE  INT,
   Gender TEXT,
   Points INT,   
   Graduations TEXT,
   PRIMARY KEY (ID)
);
10-
INSERT INTO GRADUATES (ID, NAME, AGE,Gender,Points)
SELECT ID, Name,Age,Gender,Points
FROM students
Where Name='Layal'
11-
UPDATE GRADUATES
SET Graduations='08/09/2018'
WHERE Name='Layal'
12-
DELETE FROM students
WHERE Name='Layal';