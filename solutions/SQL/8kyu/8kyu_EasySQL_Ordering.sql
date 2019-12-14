https://www.codewars.com/kata/easy-sql-ordering/train/sql

-- Your task is to sort the information in the provided table 'companies' by number of employees (high to low). Returned table should be in the same format as provided:

-- companies table schema

-- id
-- ceo
-- motto
-- employees
-- Solution should use pure SQL. Ruby is only used in test cases.

/*  SQL  */
SELECT
    id,
    ceo,
    motto,
    employees
FROM companies
ORDER BY employees desc;

SELECT * FROM companies ORDER BY employees DESC;

select id,ceo,motto,employees
from companies
order by 4 desc;