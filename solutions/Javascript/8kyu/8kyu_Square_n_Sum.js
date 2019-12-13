https://www.codewars.com/kata/square-n-sum/train/javascript

// 8kyu - Square(n) Sum

// Complete the squareSum/square_sum/SquareSum method so that it squares each
// number passed into it and then sums the results together.

// For example:

// squareSum([1, 2, 2]); // should return 9

function squareSum(numbers){
  let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 2;
    }
  return sum;
}

const squareSum = n => n.reduce((a, c) => a + (c ** 2));

//Test.assertEquals(squareSum([1,2]), 5)
//Test.assertEquals(squareSum([0, 3, 4, 5]), 50)
