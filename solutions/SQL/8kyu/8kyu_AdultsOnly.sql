https://www.codewars.com/kata/adults-only-sql-for-beginners-number-1/train/sql

-- In your application, there is a section for adults only. You need to get a list of names and ages of users from the users table, who are 18 years old or older.

-- users table schema

-- name
-- age
-- NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.

SELECT name, age
FROM users
WHERE age >= 18;

SELECT * 
FROM users 
WHERE age >= 18;

SELECT u.name, u.age 
FROM users AS u 
WHERE age >= 18;