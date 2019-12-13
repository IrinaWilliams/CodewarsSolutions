https://www.codewars.com/kata/sql-basics-mod/train/sql

-- Given the following table 'decimals':

-- ** decimals table schema **

-- id
-- number1
-- number2
-- Return a table with one column (mod) which is the output of number1 modulus number2.

SELECT
  NUMBER1 % NUMBER2 AS MOD
FROM
  DECIMALS

  SELECT MOD(number1, number2)
FROM decimals