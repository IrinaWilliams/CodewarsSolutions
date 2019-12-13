https://www.codewars.com/kata/sum-of-array-averages/train/javascript
  
   let sumAverage = a => Math.floor(a.map(e => e.reduce(sum) / e.length).reduce(sum));

   let sum = (a, b) => a + b;