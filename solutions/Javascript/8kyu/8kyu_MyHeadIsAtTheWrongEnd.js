https://www.codewars.com/kata/my-head-is-at-the-wrong-end/train/javascript

function fixTheMeerkat(arr) {
    let temp = arr[0];
    arr[0] = arr[2];
    arr[2] = temp;
 return arr;
}

function fixTheMeerkat(arr) {
  return arr.reverse();
}
const fixTheMeerkat = ([tail, body, head]) => [head, body, tail]