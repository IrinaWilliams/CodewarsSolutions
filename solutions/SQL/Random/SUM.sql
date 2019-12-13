**ORACLE SQL**

SELECT SUM(price)
FROM book
WHERE bookcode IN(107, 108, 109, 110)
UNION
SELECT price
FROM book
WHERE bookcode BETWEEN 107 AND 110;

--WHERE bookcode = 107 or bookcode = 108 or bookcode = 109 or bookcode = 110
--same as WHERE bookcode IN(107, 108, 109, 110);
--same as WHERE bookcode BETWEEN 107 AND 110;

