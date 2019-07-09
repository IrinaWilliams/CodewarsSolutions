*https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
```javascript
let countSheep = function (num){
   let allSheep = '';

   for (let i = 1; i <= num; i++) {
    allSheep = allSheep + (i + ' sheep...')
   }
    return allSheep
}
```
*https://www.codewars.com/kata/third-angle-of-a-triangle/train/javascript
```javascript
function otherAngle(a, b) {
  return 180 - ( a + b);
}
```
*https://www.codewars.com/kata/youre-a-square/train/javascript
```javascript
let isSquare = function(n){
  if (n < 0)
  return false; 
  
  for (let idx = 0; idx*idx <= n; idx++) {
  if (idx*idx === n)
  return true;
  }
  return false; 
}
```
*https://www.codewars.com/kata/palindrome-strings/train/javascript
```javascript
function isPalindrome(line) {
  let line1 = line.toString();
  let backLine = '';
    for(let i = line1.length - 1; i >= 0; i--) {
      backLine += line1[i];
    }
  return backLine === line1 ? true : false;
}
function isPalindrome(line) {
  return (line.toString() == line.toString().split('').reverse().join(''));
}
```
*https://www.codewars.com/kata/switch-slash-case-bug-fixing-number-6/train/javascript
```javascript
function evalObject(value){
  switch(value.operation){
    case'+': return value.a + value.b;
    case'-': return value.a - value.b;
    case'/': return value.a / value.b;
    case'*': return value.a * value.b;
    case'%': return value.a % value.b;
    case'^': return Math.pow(value.a, value.b);
  }
}
```
*https://www.codewars.com/kata/switch-it-up/train/javascript
```javascript
function switchItUp(number){
  switch(number) {
    case 0: return 'Zero';
    case 1: return 'One';
    case 2: return 'Two';
    case 3: return 'Three';
    case 4: return 'Four';
    case 5: return 'Five';
    case 6: return 'Six';
    case 7: return 'Seven';
    case 8: return 'Eight';
    case 9: return 'Nine';
  }
}
  function switchItUp(number){
    let arr = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight','Nine'];
      return arr[number];
  }
```
*https://www.codewars.com/kata/get-list-sum-recursively/train/javascript
```javascript
function sumR(x) {
  if(x.length === 0) {
    return 0;
  } 
  return x.shift() + sumR(x);
}
```
*https://www.codewars.com/kata/reverse-list-order/train/javascript
```javascript
function reverseList(list) {
  let arr = [];
    for(let i = list.length - 1; i >= 0; i--) {
    arr.push(list[i]);
    }
    return arr;
}
```
*https://www.codewars.com/kata/simple-multiplication/train/javascript
```javascript
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}
```
*https://www.codewars.com/kata/convert-boolean-values-to-strings-yes-or-no/train/javascript
```javascript
function boolToWord( bool ){
  return bool === true ? 'Yes' : 'No';
}
```
*https://www.codewars.com/kata/reverse-a-number/train/javascript
```javascript
function reverseNumber(n) {
   if ( n >= 0 ){
   let arr = n.toString().split('').reverse();
    return +(arr.join(''))}
    else {
     n = n * (-1);
    let arr = n.toString().split('').reverse();
    return (-1) * (+(arr.join('')))
    }
}
```
*https://www.codewars.com/kata/find-the-calculation-type/train/javascript
```javascript
function calcType(a, b, res) {
  if(a + b === res) {
  return 'addition';
  }
  if(a - b === res) {
  return 'subtraction';
  }
  if(a * b === res) {
  return 'multiplication';
  }
  if(a / b === res) {
  return 'division';
  }
}
```
*https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
```javascript
function stringToArray(string){
  let s = string.split(' ');
    return s;
}
```
*https://www.codewars.com/kata/simple-beads-count/train/javascript
```javascript
function countRedBeads(n) {
   if (n < 2) {
     return 0;
   }
   return (n - 1) * 2;
}
```
*https://www.codewars.com/kata/numerical-palindrome-number-1/train/javascript
```javascript
function palindrome(num) {
let str = "";
    if (typeof num !== 'number' || num < 0) {
      return "Not valid";
    }
      str = num + '';
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
      if (str[i] !== str[str.length - i - 1]) {
        return false;
      }
    }
    return true;
  }
function palindrome(num) { 
if(typeof num !== 'number' || num < 0){
  return 'Not valid';
  }
  const arr = +(num.toString().split('').reverse().join(''));
  return arr === num;
}
```
*https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript
```javascript
function twoSort(s) {
return s.sort().slice(0,1)[0].split("").reduce((x,y,z) => x + "***" + y);
}   
```
*https://www.codewars.com/kata/the-feast-of-many-beasts/train/javascript
```javascript
function feast(beast, dish) {
return beast[0] === dish[0] && beast[beast.length -1] === dish[dish.length -1];
}
```
*https://www.codewars.com/kata/you-cant-code-under-pressure-number-1/train/javascript
```javascript
function doubleInteger(i) {
  return i * 2;
}
```
*https://www.codewars.com/kata/remove-string-spaces/train/javascript
```javascript
function noSpace(x){
return  x.replace (/\s/g, '');
}
```
*https://www.codewars.com/kata/random-case/train/javascript
```javascript
function randomCase(x) {
  return x.split('').map(function(char) {
    return Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase();
    }).join('');
}
```
*https://www.codewars.com/kata/5a00e05cc374cb34d100000d
```javascript
function reverseSeq(n) {
let backNum = [];
  for(let i = n; i > 0; i--) {
    backNum.push(i);
  } 
  return backNum;
}
```
*practice
```javascript
let str = 'Alice';
function charToCap(str) {
  return str.replace(str[2], str[2].toUpperCase()); 
}
console.log(charToCap(str));
```
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
```
*https://www.codewars.com/kata/convert-a-number-to-a-string/train/javascript
```javascript
function numberToString(num) {
  let str = num.toString();
  return str;
}
```
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
```
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
```
*https://www.codewars.com/kata/514b92a657cdc65150000006
```javascript
function solution(number) {
  let sum = 0;
    for (let i = 3; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) { sum += i; }
  }
  return sum;  
}
```
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
```
*https://www.codewars.com/kata//57e921d8b36340f1fd000059
```javascript
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
return pontoonDistance/youSpeed < (sharkDistance/ (sharkSpeed/2)) ? "Alive!" : "Shark Bait!";
} 
```
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
```
*https://www.codewars.com/kata/friend-or-foe/train/javascript
```javascript
function friend(friends){
  return friends.filter(friends => friends.length === 4);
}
```
*https://www.codewars.com/kata/sleigh-authentication/train/javascript
```javascript
function Sleigh() {
  this.name = 'Santa Claus';
  this.password = 'Ho Ho Ho!';
}

Sleigh.prototype.authenticate = function(name, password) {
  return this.name == name &&  this.password == password;
};
```
*https://www.codewars.com/kata/type-of-sum/train/javascript
```javascript
function typeOfSum(a, b) {
  return typeof (a + b);
}
```
*https://www.codewars.com/kata/random-case/train/javascript
```javascript
function randomCase(x) {
  return x.split('').map(function(char) {
    return Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase();
  }).join('');
}
```
*https://www.codewars.com/kata/string-average/train/javascript
```javascript
function averageString(str) {
  if (!str) return 'n/a';
  let d = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
  };
  let n = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };
  
  const da = str.split(' ');
  let sum = 0;

  for (let i = 0; i < da.length; i++) {
    if (d[da[i]] !== undefined) {
      sum += d[da[i]];
    } else {
      return 'n/a';
    }
  }
  const avg = Math.floor(sum / da.length);
  return n[avg];
}
```
*https://www.codewars.com/kata/random-case/train/javascript
```javascript
 function randomCase(x) {
  let xNew = '';
  for(let i = 0; i < x.length; i++){
    if(Math.round(Math.random()) > 0){
      xNew = xNew + x[i].toUpperCase();
    } else {
      xNew = xNew + x[i].toLowerCase();
    }
  }
  return xNew;
}
```
*https://www.codewars.com/kata/alphabet-symmetry/train/javascript
```javascript
function solve(arr){  
  let alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let arrN = [];
    for(let i = 0; i < arr.length; i++){
      let count = 0;
        for(let j = 0; j < arr[i].length; j++){
          if( j === alp.indexOf(arr[i][j].toUpperCase()) ){
            count++;
          }
        }
        arrN.push(count);
    }
  return arrN;
};
```
*https://www.codewars.com/kata/arrays-similar/train/javascript
```javascript
function arraysSimilar(arr1, arr2) {
  if(arr1.length !== arr2.length) return false;
    arr1.sort();
    arr2.sort();
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) return false; 
  }
  return true;
}
```
*https://www.codewars.com/kata/arrays-similar/train/javascript
```javascript
function arraysSimilar(arr1, arr2) { 
  return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());
}
```
*https://www.codewars.com/kata/sum-all-the-arrays/train/javascript
```javascript
function arraySum(arr) {
const b = arr.toString().split(',');
let sum = 0;
  for(let i = 0; i < b.length; i++) {
    sum += Number.isNaN(Number(b[i])) ? 0 : Number(b[i]);
  }
  return sum;
}
```
*https://www.codewars.com/kata/remove-duplicates-from-list/train/javascript
```javascript
function distinct(a) {
  return [...new Set(a)];
}
```
*https://www.codewars.com/kata/remove-duplicates-from-list/train/javascript
```javascript
function distinct(a) {
  const items = {};
  const res = [];
  
  for(let i = 0; i < a.length; i++) {
    if(!items[a[i]]) {
    res.push(a[i]);
    items[a[i]] = true;
    } 
  }
  return res;
}
```
*https://www.codewars.com/kata/write-shortest-function-to-calculate-average-number-of-array/train/javascript 
```javascript
const avg=a=>a.reduce((a,b)=>a+b)/a.length;
```
*https://www.codewars.com/kata/valid-parentheses/train/javascript
```javascript
function validParentheses(parens) {
  let arr = parens.split('');
  let cnt = 0;
  
  for (let i = 0; i < parens.length; i++) {
    if (arr[i] === '(') cnt++;
    else if (arr[i] === ')') cnt--;
    if (cnt < 0) return false;
  }
  if (cnt === 0) return true;
  else return false;
}
```
*https://www.codewars.com/kata/spongebob-meme/train/javascript
```javascript
function spongeMeme(sentence) {
  let res = '';
    for(let i = 0; i < sentence.length; i++) {
      res += (i % 2) ? sentence[i].toLowerCase() : sentence[i].toUpperCase();
    }
  return res;
}
```
*https://www.codewars.com/kata//56f6ad906b88de513f000d96
```javascript
function bonusTime(salary, bonus) {
  if(bonus === true){
    return '£' + salary*10;}
  return '£'+salary;
}
```
*https://www.codewars.com/kata//55a70521798b14d4750000a4
```javascript
function greet(name){
  return `Hello, ${name} how are you doing today?`;
}
```
*https://www.codewars.com/kata//51f2d1cafc9c0f745c00037d
```javascript
function solution(str, ending){
  return str.endsWith(ending);
}
```
*https://www.codewars.com/kata/convert-to-binary/train/javascript
```javascript
const toBinary = n => +n.toString(2);
//function toBinary(n){
// return Number(n.toString(2));
//}
```
*https://www.codewars.com/kata/keep-hydrated-1/train/javascript
```javascript
function litres(time) {
  return Math.floor(time * 0.5);
}
```
*https://www.codewars.com/kata/rock-paper-scissors/train/javascript
```javascript
const rps = (p1, p2) => {
  const getMsg = n => `Player ${n} won!`;

  if(p1 === 'scissors' && p2 === 'paper') return getMsg(1);
  if(p1 === 'paper' && p2 === 'scissors') return getMsg(2);

  if(p1 === 'paper' && p2 === 'rock') return getMsg(1);
  if(p1 === 'rock' && p2 === 'paper') return getMsg(2);

  if(p1 === 'rock' && p2 === 'scissors') return getMsg(1);
  if(p1 === 'scissors' && p2 === 'rock') return getMsg(2);

  if (p1 === p2) return 'Draw!';
}
```
*https://www.codewars.com/kata/sentence-smash/train/javascript
```javascript
function smash (words) {
    return words.join(' ');
}
const smash = w => w.join(' ');
```
*https://www.codewars.com/kata/count-odd-numbers-below-n/train/javascript
```javascript
function oddCount(n) {
  let res = 0;
    for (let i = 1; i < n; i = i + 2) {
      res++;
    }
   return res;
}
```
*https://www.codewars.com/kata/string-repeat/train/javascript
```javascript
const repeatStr = (n, s) => s.repeat(n);
```
*https://www.codewars.com/kata/how-good-are-you-really/train/javascript
```javascript
  function betterThanAverage(cP, yP) {
    return cP.reduce((acc, item) => acc + item, 0) / cP.length < yP;
  }
 ```
 *https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
 ```javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let minNum = args[0];
    for(let i = 1; i < args.length; i++) {
      if(args[i] < minNum) minNum = args[i];
    }
    return minNum;
  }
}

//return Math.min(...args);
```
*https://www.codewars.com/kata/get-the-mean-of-an-array/train/javascript
 ```javascript
function getAverage(marks){
  let average = marks.reduce((acc, item) => acc + item) / marks.length;
  return Math.floor(average);
}
```
*https://www.codewars.com/kata/sum-without-highest-and-lowest-number/train/javascript
```javascript
 function sumArray(array) {
   if(!array || array.length < 2) return 0;
  
   let min = array[0], max = array[0], sum = 0;
   array.forEach(el => {
     if(el < min) min = el;
     if(el > max) max = el;
     sum += el;
   });
  return sum - min - max;
 }
 function sumArray(array) {
 if( !array || array.length < 2) return 0;
 let min = array[0], max = array[0], sum = 0;
 
 array.forEach(el => {
 if(el < min) min = el;
 if(el > max) max = el;
 sum += el;
 })
 return sum - min- max
 }
```
*https://www.codewars.com/kata/merge-two-sorted-arrays-into-one/train/javascript
```javascript
function mergeArrays(arr1, arr2) {
  let newArr = [];
  
  for(let i = 0; i < arr1.length; i++) {
    if(!newArr.includes(arr1[i]))
    newArr.push(arr1[i]);
  }
   for(let i = 0; i < arr2.length; i++) {
    if(!newArr.includes(arr2[i]))
    newArr.push(arr2[i]);
  }
  return newArr.sort((a,b) => a-b);
}
```
*https://www.codewars.com/kata/58ba6fece3614ba7c200017f
```javascript
function palindrome(num) {
let str = "";
    if (typeof num !== 'number' || num < 0) {
      return "Not valid";
    }
      str = num + '';
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
```
*https://www.codewars.com/kata/multiple-of-index/train/javascript
```javascript
function multipleOfIndex(array) {
 let arrNew = [];
   for(let i = 0; i < array.length; i++) {
     if(array[i] % i === 0) {
       arrNew.push(array[i]);
     }
   }
 return arrNew;
}

function multipleOfIndex(array) {
  return array.filter((el, i) => el % i === 0);
}
```
*https://www.codewars.com/kata/print-a-rectangle-using-asterisks/train/javascript
```javascript
function getRectangleString(width, height) {
  const rn = '\r\n';
  const tb = '*'.repeat(width) + rn;
  const center = (width > 1) ? ('*' + ' '.repeat(width - 2) + '*' + rn).repeat(height - 2) : '';
  return (height > 1) ? (tb + center + tb) : tb.repeat(height);
}
```
*https://www.codewars.com/kata/5a5915b8d39ec5aa18000030/solutions/javascript
```javascript
function findMissing(arr1, arr2) {
  let index;
  for(let i = 0; i < arr1.length; i++){
    index = arr2.indexOf(arr1[i]);
    if(index > -1){
      arr2.splice(index, 1);
    } else {
    return arr1[i];
    }
  }
}
*https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits/train/javascript
```javascript
function digitize(n) {
 return n.toString().split('').reverse().map(el => +el);
}
```
*https://www.codewars.com/kata/difference-of-volumes-of-cuboids/train/javascript
```javascript
function findDifference(a, b) {
  a = a.reduce((acc, cur) => acc * cur);
  b = b.reduce((acc, cur) => acc * cur);
   if(a >= b) return (a - b);
   if(b >= a) return (b - a);
}
function find_difference(a, b) {
  return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2]);
}
```
*https://www.codewars.com/kata/can-we-divide-it/train/javascript
```javascript
function isDivideBy(number, a, b) {
 return number % a === 0 && number % b === 0;
}
```
*https://www.codewars.com/kata/can-we-divide-it/train/javascript
```javascript
const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;
```
*https://www.codewars.com/kata/find-out-whether-the-shape-is-a-cube/train/javascript
```javascript
var cubeChecker = function(volume, side){
 if(volume <= 0 || side <= 0) return false;
   return Math.cbrt(volume) === side;
}; 
```
*https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/solutions/javascript
```javascript
function sumOfDifferences(arr) {
  const sorted = arr.sort((a, b) => b - a);
  let sum = 0;
  
  for (let i = 1; i < sorted.length; i++){
  sum += sorted[i - 1] - sorted[i];
  }
  return sum;
}
```
https://www.codewars.com/kata/5a523566b3bfa84c2e00010b
```javascript
function minSum(arr) {
let sum = 0;
   arr.sort(function(a, b){return a - b});;
   for(let i = 0; i < arr.length/2; i++){
    sum = sum  + arr[i] * arr[arr.length - (i + 1)];
    }
   return sum;
}
```
*https://www.codewars.com/kata/will-there-be-enough-space/train/javascript
```javascript
function enough(cap, on, wait) {
  return cap >= on + wait ? 0 : (on + wait) - cap;
}
```
*https://www.codewars.com/kata/convert-a-boolean-to-a-string/train/javascript
```javascript
function booleanToString(b){
  return b === true ? 'true' : 'false';
}
```
*https://www.codewars.com/kata/multiplication-table-for-number/train/javascript
```javascript
function multiTable(number) {
  let res = '';
    for(let i = 1; i <= 10; i++) {
      res += `${i} * ${number} = ${i * number}`;
      if(i < 10) res += '\n';
    }
  return res;
}
```
*https://www.codewars.com/kata/numerical-palindrome-number-5-1/train/javascript
```javascript
function palindrome(num) {
  if (typeof num !== 'number' || num < 0) return 'Not valid';
  let cnt = 0;
  let str = num.toString().split('').sort();
  if (str.length <= 1) return false;
  for (let i = 0; i < str.length - 1 ; i++) {
   if (str[i] === str[i + 1]) {
     cnt+=2;
     i++;
     }  
  }
  return (str.length - cnt) <= 1 ? true : false; 
}
```
[Welcome!](https://www.codewars.com/kata/welcome/train/javascript) /*object*/
```javascript
function greet(language) {
switch (language) {
  case 'english': 
    return'Welcome';
  case 'czech': 
    return 'Vitejte';
  case 'danish': 
    return 'Velkomst';
  case 'dutch': 
    return 'Welkom';
  case 'estonian': 
    return 'Tere tulemast';
  case 'finnish': 
    return 'Tervetuloa';
  case 'flemish': 
    return 'Welgekomen';
  case 'french': 
    return 'Bienvenue';
  case 'german': 
    return 'Willkommen';
  case 'irish': 
    return 'Failte';
  case 'italian': 
    return 'Benvenuto';
  case 'latvian': 
    return 'Gaidits';
  case 'lithuanian': 
    return 'Laukiamas';
  case 'polish': 
    return 'Witamy';
  case 'spanish': 
    return 'Bienvenido';
  case 'swedish': 
    return 'Valkommen';
  case 'welsh': 
    return 'Croeso';
};
    return 'Welcome';
}
function greet(language) {
  let dictionary = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
  };
  for(let key in dictionary){
    if(key === language)
     return dictionary[key];
  }
  return 'Welcome'
}
```
[Welcome to the City](https://www.codewars.com/kata/welcome-to-the-city/train/javascript) /*object*/
 ```javascript
 function sayHello( name, city, state ) {
 let fullName = '';
   for(let i = 0; i < name.length; i++) {
     fullName = fullName + ' ' + name[i];
   }
 return `Hello,${fullName}! Welcome to ${city}, ${state}!`;
 }
 function sayHello( name, city, state ) {
 return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
 }
 const sayHello = ( name, city, state ) => `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
 ```
 [Get Nth Even Number](https://www.codewars.com/kata/get-nth-even-number/train/javascript) 
```javascript
function nthEven(n){
  return n * 2 - 2;
}
```
[Enumerable Magic #2 - True for Any?](https://www.codewars.com/kata/enumerable-magic-number-2-true-for-any/train/javascript) /*arr.some*/
```javascript
function any(arr, fun){
  return arr.some(fun);
}
```
[Total amount of points](https://www.codewars.com/kata/total-amount-of-points/train/javascript) /*g.forEach(item =>*/
```javascript
function points(g) {
  let count = 0;
  g.forEach(item => {
    if(item[0] > item[2]) count += 3;
      if(item[0] === item[2]) count += 1;
    })
  return count;
}
function points(games) {
  var sum=0;
  for (var i=0; i<games.length; ++i)
  {
    if (games[i][0]>games[i][2])
      sum+=3;
    if (games[i][0]==games[i][2])
      sum+=1;
  }
  return sum;
}
```
[Enumerable Magic #25 - Take the First N Elements](https://www.codewars.com/kata/enumerable-magic-number-25-take-the-first-n-elements/train/javascript) /*arr.slice*/
```javascript
function take(arr, n) {
  return arr.slice(0, n);
}
```