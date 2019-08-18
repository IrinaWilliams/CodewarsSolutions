https://www.codewars.com/kata/sum-of-multiples/train/javascript

function sumMul(n,m) {
  if(m <= 0) return 'INVALID';
  let sum = 0;
  for(let i = n; i < m; i = i + n) {
    sum = sum + i;
  }
  return sum;
}