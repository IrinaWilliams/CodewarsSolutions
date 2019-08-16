https://www.codewars.com/kata/maximum-multiple/train/javascript

function maxMultiple(divisor, bound){
let res = 0;
  for(let i = divisor; i <= bound; i += divisor){
    res = i;
  }
  return res;
}