https://www.codewars.com/kata/find-the-divisors/train/javascript
/*
```javascript
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
*/

function divisors(integer) {
let res = [];
  for(let i = 2; i < integer; i++) {
    let j = integer/i;
      if(Number.isInteger(j)) {
        res.push(i);
      }
  }
      if(res.length === 0) {
        return `${integer} is prime`;
      }
  return res;
}
/*new solution*/
function divisors(integer) {
  const res = [];
  for (let i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime';
}
Test.assertDeepEquals(divisors(15), [3, 5]);
Test.assertDeepEquals(divisors(12), [2, 3, 4, 6]);
Test.assertDeepEquals(divisors(13), "13 is prime");
