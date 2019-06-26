*https://www.codewars.com/kata/random-case/train/javascript
```javascript
function randomCase(x) {
  return x.split('').map(function(char) {
    return Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase();
    }).join('');
}

*https://www.codewars.com/kata/5a00e05cc374cb34d100000d
```javascript
function reverseSeq(n) {
let backNum = [];
  for(let i = n; i > 0; i--) {
    backNum.push(i);
  } 
  return backNum;
}

```javascript
let str = 'Alice';
function charToCap(str) {
  return str.replace(str[2], str[2].toUpperCase()); 
}
console.log(charToCap(str));

*https://www.codewars.com/kata/5168bb5dfe9a00b126000018
```javascript
function solution(str){
  let backWord = '';
    for(let i = str.length-1; i >= 0; i--) {
    backWord += str[i];
    }
    return backWord;
}

function solution(str){
  return str.split('').reverse().join('');  
}

*https://www.codewars.com/kata/convert-a-number-to-a-string/train/javascript
```javascript
function numberToString(num) {
  let str = num.toString();
  return str;
}

*https://www.codewars.com/kata/572b77262bedd351e9000076
```javascript
function first(arr, n =1) {
  let array = [];
    if ( n > arr.length) return arr;
      for (let i=0; i < n; i++){
        array.push(arr[i]);
      }
  return array
}

*https://www.codewars.com/kata/58bf9bd943fadb2a980000a7
```javascript
function whoIsPaying(name){
  let arr = [name];
    if (name.length > 2){
      let str = name.substring (0, 2);
        arr.push(str);
    }
  return arr;
}

*https://www.codewars.com/kata/514b92a657cdc65150000006
```javascript
function solution(number) {
  let sum = 0;
    for (let i = 3; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) { sum += i; }
  }
  return sum;  
}

*https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
```javascript
function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  
  for(let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  
  for(let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum;
}

*https://www.codewars.com/kata//57e921d8b36340f1fd000059
```javascript
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
return pontoonDistance/youSpeed < (sharkDistance/ (sharkSpeed/2)) ? "Alive!" : "Shark Bait!";
} 

* https://www.codewars.com/kata/59dd3ccdded72fc78b000b25

```javascript
function whatday(num) { 
const obj = { 
1: 'Sunday', 
2: 'Monday', 
3: 'Tuesday', 
4: 'Wednesday', 
5: 'Thursday', 
6: 'Friday', 
7: 'Saturday'
};
 return num > 7 || num === 0 ? 'Wrong, please enter a number between 1 and 7' : obj[num];
}