https://www.codewars.com/kata/count-the-divisible-numbers/train/javascript
// Complete the function that takes 3 numbers x, y and k (where x ≤ y), and returns the number of integers within the range [x..y] (both ends included) that are divisible by k.
// More scientifically: { i : x ≤ i ≤ y, i mod k = 0 }
// Example
// Given x = 6, y = 11, k = 2 the function should return 3, because there are three numbers divisible by 2 between 6 and 11: 6, 8, 10

//too slow code
/*
function divisibleCount(x, y, k) {
    let count = 0;
    for(let i = x; i <= y; i++) {
      if(i%k == 0) {
      count++;
      }
    }
    return count;
 }
*/

const divisibleCount = (x, y, k) => Math.floor(y/k) - Math.floor((x-1)/k);

divisibleCount(6,11,2);

// Math.floor((x-1) / k) is the number of numbers divisible by k before the interval.
// Math.floor((y-1) / k) is the number of numbers divisible by k up to the end of the interval.
// Should be right for positive numbers and k > 0. Hopefully ;)