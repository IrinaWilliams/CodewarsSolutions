https://www.codewars.com/kata/invert-values/train/javascript

function invert(array) {
  const arr = [];
    for(let i = 0; i < array.length; i++) {
      arr.push(-array[i]);
    }
   return arr;
}