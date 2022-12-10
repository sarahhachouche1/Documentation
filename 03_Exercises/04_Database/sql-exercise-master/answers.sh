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
14-
SELECT e.Name,e.Company,c.Date
From  employees as e
INNER JOIN companies as c
ON e.Company=c.Name;
15-
SELECT e.Name
From  employees as e
INNER JOIN companies as c
ON e.Company=c.Name
where c.Date<'2000';
16-
select Company
from employees
where Role='Graphic Designer'
18-
SELECT  Name
FROM students
where Points = (SELECT MAX(Points) FROM students);
19-
SELECT AVG(Points)
FROM students
20-
Select count(ID)
FROM students
where Points='500';
21-
SELECT Name
FROM students
where Name like '%s%'
22-
SELECT * 
FROM students
ORDER BY Points DESC;