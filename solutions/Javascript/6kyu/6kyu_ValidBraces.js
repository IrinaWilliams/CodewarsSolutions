https://www.codewars.com/kata/valid-braces/train/javascript

function validBraces(braces){
  const arr = [];
  for(let i = 0; i < braces.length; i++) {

    if(braces[i] === '(') arr.unshift(')');
    else if (braces[i] === '{') arr.unshift('}');
    else if (braces[i] === '[') arr.unshift(']');
    else if (braces[i] !== arr[0]) return false;
    else arr.shift();
  }
return arr.length === 0;
}