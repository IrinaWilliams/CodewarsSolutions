https://www.codewars.com/kata/balanced-number-special-numbers-series-number-1/train/javascript

function balancedNum(number) {

  let numArr = number.toString().split('').map((d) => +d);
  console.log(numArr);
  let sumF = 0,
    sumB = 0;
  if (numArr.length <= 2) return 'Balanced';
  console.log(numArr, Math.floor(numArr.length / 2));

  if (numArr.length % 2 === 0) {
    for (let i = 0; i < Math.floor(numArr.length / 2) - 1; i++) {
      sumF += numArr[i];
      sumB += numArr[numArr.length - 1 - i];
      console.log(sumF, sumB);
    }
  } else {
    for (let i = 0; i < Math.floor(numArr.length / 2); i++) {
      sumF += numArr[i];
      sumB += numArr[numArr.length - 1 - i];
      console.log(sumF, sumB);
    }
  }

  return (sumF === sumB) ? 'Balanced' : 'Not Balanced';
}
   console.log(balancedNum(7)); // "Balanced")
   console.log(balancedNum(959)); //"Balanced")
   console.log(balancedNum(13)); // "Balanced")
   console.log(balancedNum(432)); // "Not Balanced")
   console.log(balancedNum(424));  // "Balanced")

unction balancedNum(number) {

  let str = `${number}`
  ,   len = (str.length - (str.length % 2 ? -1 : -2)) / 2
  ,   sum = digits => [ ...digits ].reduce((a, b) => a + +b, 0);

  return sum(str.slice(0, len)) === sum(str.slice(-len))
  ? 'Balanced'
  : 'Not Balanced';
}