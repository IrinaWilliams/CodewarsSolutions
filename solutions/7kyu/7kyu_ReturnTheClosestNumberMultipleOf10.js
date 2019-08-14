https://www.codewars.com/kata/return-the-closest-number-multiple-of-10/train/javascript

const closestMultiple10 = num => {
  let a = Math.floor(num/10) * 10;
  let b = a + 10;
  return (num - a < b - num) ? a : b;
};

const closestMultiple10 = num => Math.round(num / 10) * 10;
