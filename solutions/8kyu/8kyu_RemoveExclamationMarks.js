https://www.codewars.com/kata/remove-exclamation-marks/train/javascript

function removeExclamationMarks(s) {
let newS = '';
  for(let i = 0; i < s.length; i++) {
    if(s[i] !== '!') {
    newS += s[i];
    }
  }
  return newS;
}

//function removeExclamationMarks(s) {
//  return s.replace(/!/g, '');
//}

//function removeExclamationMarks(s) {
//  return s.split('!').join('');
//}
