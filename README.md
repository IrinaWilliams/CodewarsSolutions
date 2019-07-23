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
function take(arr, n) {

  return  arr.length<n ? arr.slice(): arr.slice(0,n)
}
```
[A Gift Well Spent](https://www.codewars.com/kata/a-gift-well-spent/train/javascript)
```javascript
const buy = function(x, arr){
  let res = [];
    for(let i = 0; i < arr.length - 1; i++) {
      for(let j = i + 1; j < arr.length; j++) {
       if(arr[i] + arr[j] === x) {
         return [i, j];
       }
      }
    }
  return null;
};
```
[Maximum Triplet Sum (Array Series #7](https://www.codewars.com/kata/maximum-triplet-sum-array-series-number-7/train/javascript)/*arr.includes*/
```javascript
function maxTriSum(numbers){
  let sum = 0;
    let res = numbers.sort((a, b) => b - a);
      let arr = [];
        for (let i = 0; i < res.length; i++) {
          if (arr.length >= 3) {
            break;
          }
          if (!arr.includes(res[i])) {
            arr.push(res[i]);
            sum += res[i];
         }
       }
   return sum;
}
const maxTriSum = numbers => {
  const [a,b,c,...rest] = [...new Set([...numbers])].sort((a,b)=>b-a)
  return a+b+c
}
function maxTriSum(numbers){
  return numbers.filter((el, i )=> i === numbers.lastIndexOf(el))
  .sort((a, b) => a - b).slice(-3).reduce((a, b) => a + b, 0);
}
```
[Sort the odd](https://www.codewars.com/kata/sort-the-odd/train/javascript)/*array.filter.sort.map.shift*/
```javascript
function sortArray(array) {
  let odd = array.filter(a => a % 2 !== 0).sort((a,b) => a - b);
  let res = array.map(a => a % 2 !== 0 ? odd.shift() : a);
  return res;
}
```
[Numerical Palindrome #2]https://www.codewars.com/kata/numerical-palindrome-number-2/train/javascript
```javascript
function palindrome(num){
 if(typeof num !== 'number' || num < 0 || num % 1 != 0){
   return "Not valid";
 }
   if(num < 10){
    return false;
   }
      let str = num + '';
        for(let i = 0; i < str.length; i++){
          if(str[i] === str[i + 1]  || str[i] === str[i + 2]) return true;
       }
    return false;
}
```
[Grasshopper - Personalized Message](https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript)
```javascript
function greet (name, owner) {
return name === owner ? 'Hello boss' : 'Hello guest';
}
```
[Clean up after your dog](https://www.codewars.com/kata/clean-up-after-your-dog/train/javascript)
```javascript
function crap(x, bags, cap) {
let arr = x.toString();
let count = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].includes('D')) {
       return 'Dog!!';
    }
    if(arr[i].includes('@')) {
       count++;
    }
    
  }
    return (bags * cap) >= count ? "Clean" : "Cr@p";
}
function crap(x, bags, cap){ 
 let crapCount = 0;
 const totalCap = bags * cap;
 for(let i = 0; i < x.length; i++){
   for(let j = 0; j < x[i].length; j++){
     if(x[i][j] === '@') crapCount++;
     if(x[i][j] === 'D') return 'Dog!!';
   }
 }
 return crapCount > totalCap ? 'Cr@p' : 'Clean'; 
}
```
[Reversed Words](https://www.codewars.com/kata/reversed-words/train/javascript) /*split.join*/
```javascript
function reverseWords(str){
  let arr = str.split(' ');
  let newArr = [];
    for(let i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i]);
    }
  return newArr.join(' '); 
}
function reverseWords(str){
  let arr = str.split(' ');
  let newArr = [];
    for(let i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i]);
    }
  return newArr.join(' '); 
}
```
[Sum The Strings](https://www.codewars.com/kata/sum-the-strings/train/javascript)
```javascript
function sumStr(a,b) {
  return +a + +b + '';
}
``` 
[No Loops 2 - You only need one](https://www.codewars.com/kata/no-loops-2-you-only-need-one/train/javascript)
```javascript
const check = (a, x) => a.includes(x);
```
[isReallyNaN](https://www.codewars.com/kata/isreallynan/train/javascript) /*isNaN*/
```javascript
const isReallyNaN = (val) => Number.isNaN(val);
```
[u
 For Twins: 1. Types](https://www.codewars.com/kata/for-twins-1-types/train/javascript)
 ```javascript
function typeValidation(variable, type) {
  return (typeof variable === type);
}
 ```
[Beginner Series #1 School Paperwork](https://www.codewars.com/kata/beginner-series-number-1-school-paperwork/train/javascript)
 ```javascript
function paperwork(n, m) {
  if(n <= 0 || m <= 0) return 0;
  return n * m;
}
 ```
 [Sum of positive](https://www.codewars.com/kata/sum-of-positive/train/javascript)
```javascript
 function positiveSum(arr) {
   return arr.reduce((a, b) => {return (b > 0 ) ? (a + b) : (a + 0)}, 0);
 }
```
[Removing Elements](https://www.codewars.com/kata/removing-elements/train/javascript)
```javascript
function removeEveryOther(arr){
  let newArr = [];
    for(let i = 0; i < arr.length; i += 2) {
      newArr.push(arr[i]);
    }
  return newArr;
}
```
[Beginner Series #2 Clock](https://www.codewars.com/kata/beginner-series-number-2-clock/train/javascript)
```javascript
function past(h, m, s){
  return ((h * 60 + m) * 60 + s) * 1000;
}
```
[Filter out the geese](https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/solutions/javascript)
```javascript
function gooseFilter (birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(item => !geese.includes(item))
};
```
[The Office IV - Find a Meeting Room](https://www.codewars.com/kata/the-office-iv-find-a-meeting-room/train/javascript)
```javascript
function meeting(x){
let c = x.indexOf('O')
  return c > -1 ? c : 'None available!';
}

function meeting(x){
  for (var i=0; i<x.length; ++i)
    if (x[i]=='O')
      return i;
  return 'None available!';
}
```
[The Office I - Outed](https://www.codewars.com/kata/the-office-i-outed/train/javascript)
```javascript
function outed(meet, boss){
let sum = 0;
let count = 0;
for (let name in meet) {
  count++;
  sum += meet[name];
}
return (sum + meet[boss])/count <= 5 ?  'Get Out Now!' : 'Nice Work Champ!';
}
```
[Who likes it?](https://www.codewars.com/kata/who-likes-it/train/javascript)
```javascript
function likes(names) {
  if(names.length === 0) return 'no one likes this';
    if(names.length === 1) return `${names} likes this`;
      if(names.length === 2) return `${names[0]} and ${names[1]} like this`;
        if(names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
let count = 0;
  for(let i = 2; i < names.length; i++) {
  count++;
}

 return `${names[0]}, ${names[1]} and ${count} others like this`;
}

```
[Sum of the first nth term of Series](https://www.codewars.com/kata/sum-of-the-first-nth-term-of-series/train/javascript)
```javascript
function SeriesSum(n) {
    if(!n) return '0.00';
  let sum = 1, j = 4;
    for(let i = 1; i < n; i++) {
     sum += 1/j;
     j += 3;
    }
  return sum.toFixed(2);
}
```
[Reversing Words in a String](https://www.codewars.com/kata/reversing-words-in-a-string/train/javascript)
```javascript
function reverse(string){
return string.split(' ').reverse().join(' ');
}
```
[Flatten and sort an array](https://www.codewars.com/kata/flatten-and-sort-an-array/train/javascript)
```javascript
function flattenAndSort(array) { 
 if(array.length === 0) return [];
 let str = array.toString();
 let newArr = str.split(',').filter(el => el !== '');
 let newArray = newArr.sort((a, b) => a - b).map(Number);
  return newArray;
}
function flattenAndSort(array) {
  let newArr = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++ ) {
         newArr.push(array[i][j]);   
      }
    }   
  return newArr.sort((a,b) => a - b);
}
```
[Sum of two lowest positive integers](https://www.codewars.com/kata/sum-of-two-lowest-positive-integers/train/javascript)
```javascript
function sumTwoSmallestNumbers(n) {  
n.sort((a, b) => a - b);
  return n[0] + n[1];
}
```
[Is the string uppercase?](https://www.codewars.com/kata/is-the-string-uppercase/train/javascript)
```javascript
String.prototype.isUpperCase = function() {
  return this.toUpperCase() === this.toString();
}
```
[Reverse every other word in the string](https://www.codewars.com/kata/reverse-every-other-word-in-the-string/train/javascript) 
```javascript
function reverse(str) {
 return str
         .trim()
         .split(' ')
         .map((el, i) => {
         return i % 2
           ? el.split('').reverse().join('')
           : el;
         }) 
         .join(' ');
}
```
[Find Maximum and Minimum Values of a List](https://www.codewars.com/kata/find-maximum-and-minimum-values-of-a-list/train/javascript)
```javascript
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);
```
[Filter the number](https://www.codewars.com/kata/filter-the-number/train/javascript)
```javascript
const FilterString = function(v) {
let res = '';
  for(let i = 0; i < v.length; i++) {
    if(v[i] >= 0){
      res += v[i];
    }
  }
  return +res;
}
const FilterString = function(value) {
  return parseInt(value.replace(/[^\d]/g, ""))
}
const FilterString = value => +value.replace(/\D/g, '');
const FilterString = function(value) {
  return +value.split('').filter(n => !isNaN(n)).join('');
}
```
[Power](https://www.codewars.com/kata/power/train/javascript)
```javascript
function numberToPower(number, power){
  let sum = 1;
  let i = 1;
    while (i <= power) {
      sum = number * sum;
      i++;
    } 
  return sum;
}
```
[Filter Coffee](https://www.codewars.com/kata/filter-coffee/train/javascript) /*filter.sort.join*/
```javascript
function search(budget, prices) {
 return prices.filter((el) => el <= budget).sort((a,b) => a-b).join(',');
}
```
[Dollars and Cents](https://www.codewars.com/kata/dollars-and-cents/train/javascript) /*toFixed(2)*/
```javascript
function formatMoney(amount){
let total = amount.toFixed(2);
  return `$${total}`;
}
```
[Multiply](https://www.codewars.com/kata/multiply/train/javascript)
```javascript
function multiply(a, b){
  return (a * b);
}
```
[Find numbers which are divisible by given number](https://www.codewars.com/kata/find-numbers-which-are-divisible-by-given-number/train/javascript)
```javascript
function divisibleBy(n, d){
const res = [];
  for(let i = 0; i < n.length; i++) {
    if(n[i] % d === 0) {
      res.push(n[i]);
    }
  }
  return res;
}
function divisibleBy(numbers, divisor) {
  return numbers.filter(n => n % divisor === 0)
}
```
[The Office III - Broken Photocopier](https://www.codewars.com/kata/the-office-iii-broken-photocopier/train/javascript) /*replace(regex)*/
```javascript
function broken(x){
  return x.replace(/[01]/g, (a) => {
  return a === '0' ? '1' : '0';
  })
}
function broken(x){
  let res = '';
    for(let i = 0; i < x.length; i++) {
      res += x[i] === '0' ? '1' : '0';
    }
  return res;
}
```
[Last](https://www.codewars.com/kata/last/train/javascript)
```javascript
function last(...list){
  let  str = list.join();
    if(str.includes(',')) str = str.split(',');
  return !isNaN(+str[str.length-1]) ? +str[str.length-1] : str[str.length-1];
}
function last(list){
  var last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}
```
[The Office II - Boredom Score](https://www.codewars.com/kata/the-office-ii-boredom-score/train/javascript)
```javascript
function boredom(staff){
 let dep = {
    'accounts': 1,
    'finance': 2,
    'canteen': 10,
    'regulation': 3,
    'trading': 6,
    'change': 6,
    'IS': 8,
    'retail': 5,
    'cleaning': 4,
    'pissing about': 25
  }
 let sum = Object.values(staff).map(el => obj[el]).reduce((a, b) => a + b);
}
```
[To square(root) or not to square(root)](https://www.codewars.com/kata/to-square-root-or-not-to-square-root/train/javascript) /*Number.isInteger(j)*/
```javascript
function squareOrSquareRoot(array) {
const newArr = [];
  for(let i = 0; i < array.length; i++) {
    let j = array[i] ** 0.5; 
      if(Number.isInteger(j) ) {
        newArr.push(j);
      } else {
        newArr.push(array[i] ** 2);
      }
    }
  return newArr;  
}
```
[Shortest Word](https://www.codewars.com/kata/shortest-word/train/javascript)
```javascript
function findShort(s){
let shortesWord = s.split(' ').sort((a, b) => a.length - b.length);
 return shortesWord[0].length;
}
function findShort(s){
  let arr = s.split(' ');
  let shortW = arr[0];
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].length < shortW.length) {
        shortW = arr[i];
      }
    }
  return shortW.length;  
}
```
[Player Contact Manager](https://www.codewars.com/kata/player-contact-manager/train/javascript)
```javascript
/*You are the Dungeon Master for a public DnD game at your local comic shop and recently you've had some trouble keeping your players' info neat and organized so you've decided to write a bit of code to help keep them sorted!
  
  The goal of this code is to create an array of objects that stores a player's name and contact number from a given string.
  
  The method should return an empty array if the argument passed is an empty string or nil/None/null.*/
  
function playerManager(players) {
if(players === null || players.length === 0) return [];
let res = [];
  let arr = players.split(', ');
    for(let i = 0; i < arr.length; i += 2) {
      let obj = {
        player: arr[i], 
        contact: +arr[i + 1]
      };
        res.push(obj);  
    }
  return res;
}
/*console.log(playerManager("John Doe, 8167238327, Jane Doe, 8163723827"));
[{player: "John Doe", contact: 8167238327}, {player: "Jane Doe", contact: 8163723827}]
*/
```
[Who's Online](https://www.codewars.com/kata/whos-online/train/javascript)
```javascript
/*You have a group chat application, but who is online!?
  
  You want to show your users which of their friends are online and available to chat!
  
  Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.
  
  If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.*/
  
const whosOnline = (friends) => {

  let obj = {};
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].status == 'online' && friends[i].lastActivity <= 10) {
        if (!obj.online) {
          obj.online = [];
        };
        obj.online.push(friends[i].username);
      };
      if (friends[i].status == 'offline') {
        if (!obj.offline) {
          obj.offline = [];
        };
        obj.offline.push(friends[i].username);
      };
      if (friends[i].status == 'online' && friends[i].lastActivity > 10) {
        if (!obj.away) {
          obj.away = [];
        };
        obj.away.push(friends[i].username);
      };
    }
  return obj;
}
/*
it('Example test one of each', function () {
    friends = [{
      username: 'David',
      status: 'online',
      lastActivity: 10
    }, {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22
    }, {
      username: 'Bob',
      status: 'online',
      lastActivity: 104
    }]
    
Test Passed: Value deep equals { offline: [ 'Lucy' ], away: [ 'Bob' ] }*/
```
[Difference Of Squares](https://www.codewars.com/kata/difference-of-squares/train/javascript)
```javascript
/*Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.
  Example
  For example, when n = 10:  
  The square of the sum of the numbers is:  
  (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025 
  The sum of the squares of the numbers is: 
  12 + 22 + 32 + 42 + 52 + 62 + 72 + 82 + 92 + 102 = 385 
  Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbes is: 3025 - 385 = 2640*/

function differenceOfSquares(n){
let sum = 0;
let sum2 = 0;
for(let i = 0; i <= n; i++) {
    sum += i;
  let j = i ** 2;
    sum2 += j;
  }
 return sum ** 2 - sum2;
}
console.log(differenceOfSquares(100)); // 25164150
```
[Century From Year](https://www.codewars.com/kata/century-from-year/train/javascript) /*Math.ceil*/
```javascript
/*The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.*/
/*const century = year => Math.ceil(year/100);
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)*/
```
[Discover The Original Price](https://www.codewars.com/kata/discover-the-original-price/train/javascript)
```javascript
function discoverOriginalPrice(discountedPrice, salePer){
 let restPer = 100 - salePer;
 let totalPrice = (discountedPrice / restPer) * 100;
 return +totalPrice.toFixed(2);
}
```
[Check the exam](https://www.codewars.com/kata/check-the-exam/train/javascript)
```javascript
/*The first input array contains the correct answers to an exam, like ["a", "a", "b", "d"]. The second one is "answers" array and contains student's answers.
  
  The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer(empty string).
  
  If the score < 0, return 0.
  */
const checkExam = (answers, student) => {
  const score = student.reduce((total, response, index) => {
    if (!response) return total
    if (response === answers[index]) return total + 4
    if (response !== answers[index]) return total - 1

    return total
  }, 0)

  return score > 0 ? score : 0
}
console.log(checkExam([ 'a', 'b', 'a', 'c', 'a', 'b', 'b', 'c', 'c', 'c', 'c', 'b', 'c', 'b', 'a' ] [ 'b', '', '', 'b', '', '', '', 'b', '', '', 'a', 'b', 'c', 'a', 'c' ]));
  console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));
  console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]));
```
[Clocky Mc Clock-Face](https://www.codewars.com/kata/clocky-mc-clock-face/train/javascript)
```javascript
/*Description:
Story
Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.
And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.
Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!
What a bunch of cheapskates!
Can you do it?
Kata
Given the angle (in degrees) of the hour-hand, return the time in HH:MM format. Round down to the nearest minute.
Examples
12:00 = 0 degrees
03:00 = 90 degrees
06:00 = 180 degrees
09:00 = 270 degrees
12:00 = 360 degrees
Notes
0 <= angle <= 360
*/
const whatTimeIsIt = function(angle) {
let hour = 360 / 12; //30
let mimut = hour/60; //0.5
let hourClock = Math.floor(angle/hour);
let totalHour = (angle - (hour * hourClock)).toFixed(2);
let totalMin = Math.floor(totalHour/mimut);

if(hourClock === 0) {
    hourClock = '12';
  }  
  if(angle === 0) {
    return '12:00';
   
  }
  if(String(hourClock).length < 2) {
    hourClock = 0 + String(hourClock);
  }
  if(String(totalMin).length < 2) {
    totalMin = 0 + String(totalMin);
  }
return `${hourClock}:${totalMin}`;
}
let whatTimeIsIt = function(angle) {
  let h = angle / 0.5;
  let fh = Math.floor(h / 60)
  let min = Math.floor(h % 60);
  if(angle < 30) fh = 12;
  return ('00' + fh).slice(-2) +':'+('00' + min).slice(-2);
}
/*console.log(whatTimeIsIt(259.2386828909314)"08:38");*/
```
[Find the divisors!](https://www.codewars.com/kata/find-the-divisors/train/javascript)
/*
```javascript
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
*/

function divisors(integer) {
let res = [];
  for(let i = 2; i < integer; i++) {
    let j = integer/i;
      if(Number.isInteger(j)) {
        res.push(i);
      } 
  }
      if(res.length === 0) {
        return `${integer} is prime`;
      }
  return res; 
};
/*new solution*/
function divisors(integer) {
  const res = []
  for (let i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};
Test.assertDeepEquals(divisors(15), [3, 5]);
Test.assertDeepEquals(divisors(12), [2, 3, 4, 6]);
Test.assertDeepEquals(divisors(13), "13 is prime");
```
[Mumbling](https://www.codewars.com/kata/mumbling/train/javascript)
```javascript
/*This time no story, no theory. The examples below show you how to write function accum:
  Examples:
  accum("abcd") -> "A-Bb-Ccc-Dddd"
  accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  accum("cwAt") -> "C-Ww-Aaa-Tttt"
  The parameter of accum is a string which includes only letters from a..z and A..Z.*/
  
function accum(s) {
  const arr1 = s.toLowerCase().split('').map(function(el, index) {
    return el[0] + el.repeat(index);
  });
  const arr2 = arr1.join(' ').replace(/\b\w/g, l => l.toUpperCase());
  let str = arr2.split(' ').join('-');
return str;
}
function accum (s) {
  return [...s].map((element, index) => {
    return element.toUpperCase() + element.toLowerCase().repeat(index);
  }).join('-');
}
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
function accum(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let r = s[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      r += s[i].toLowerCase();
    }
    arr.push(r);
  }
  return arr.join("-");
}
/*Test.describe("accum",function() {
  Test.it("Basic tests",function() {    
  	Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
  	Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
  	Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
  	Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
  	Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
  })})*/
```
[How many stairs will Suzuki climb in 20 years?](https://www.codewars.com/kata/how-many-stairs-will-suzuki-climb-in-20-years/train/javascript)
```javascript
/*Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress. 
  The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.
  20_year_estimate = one_year_total * 20
  You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.
  stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
  Make sure your solution takes into account all of the nesting within the stairs array.
  Each weekday in the stairs array is an array.
  sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
  Your function should return the 20 year estimate of the stairs climbed using the formula above.*/

function stairsIn20(stairs){
  return stairs.reduce((steps, day) => steps.concat(day)).reduce((sum, count) => sum + count) * 20;
}

function stairsIn20(s){
  for (let i = 0, sum = 0; i<s.length ; i++) {
    for (let j = 0; j<s[i].length; j++) {
      sum += s[i][j];
    }
  }
  return sum*20;
}

stairsIn20 = s => s.map(x => x.reduce((a,b) => a + b)).reduce((a,b) => a + b) * 20

/*Test.describe("Basic tests",_=>{
  var sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
            7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 
            5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 
            6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825],
  monday = [9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
            6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221, 
            5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842,
            7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098, 6099, 5828, 7217, 9387],
  tuesday = [8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
             7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313,
             7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493, 
             5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756, 5717, 7555, 9447, 7703],
  wednesday = [6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 
               5047, 6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710,
               5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698, 
               9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357, 7378, 9598, 5405, 9493],
  thursday = [6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
              9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402,
              9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548, 5066, 
              7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858, 5360, 6638, 8012, 8701],
  friday = [5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362, 
           6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501, 
           9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617,
           5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455, 8720, 5725, 6960, 5127],
  saturday = [5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943, 
              5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003, 
              5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838, 
              7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184, 7960, 9455, 5633, 9085];
  
  var stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
  Test.assertEquals(stairsIn20(stairs), 54636040);
  })*/
```
[Add Length](https://www.codewars.com/kata/add-length/train/javascript)
```javascript
/*What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
  addLength('apple ban') => ["apple 5", "ban 3"]
  addLength('you will win') => ["you 3", "will 4", "win 3"]
  Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
  Note: String will have at least one element; words will always be separated by a space.*/

function addLength(str) {
  return str.split(' ').map((el) => el  + ' ' + el.length);
}
/*Test.assertSimilar(addLength('apple ban'),["apple 5", "ban 3"]);
  Test.assertSimilar(addLength('you will win'),["you 3", "will 4", "win 3"]);*/
```
[No Loops 1 - Small enough?](https://www.codewars.com/kata/no-loops-1-small-enough/train/javascript)
```javascript
/** No Loops Allowed *
You will be given an array (a) and a limit value (limit). You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
You can assume all values in the array are numbers.
Do not use loops. Do not modify input array.*/

function smallEnough(a, limit){
  return (a.filter(el => el > limit).length > 0 ? false : true);
}
const smallEnough = (a, limit) => a.every(el => el <= limit);
/*Test.assertEquals(smallEnough([66, 101], 200), true);
  Test.assertEquals(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
  Test.assertEquals(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
  Test.assertEquals(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);*/
```
[Power of two](https://www.codewars.com/kata/power-of-two/train/javascript)
```javascript
/*Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:
a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.
You may assume the input is always valid.
 Examples
  isPowerOfTwo(1024) // -> true
  isPowerOfTwo(4096) // -> true
  isPowerOfTwo(333)  // -> false
  Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.*/

function isPowerOfTwo(n){
  if(n**0.5 === 1) return true;
 return n < 2 ? false : n === 2 ? true : isPowerOfTwo(n / 2);
}
/*Test.assertEquals(isPowerOfTwo(2), true)
  Test.assertEquals(isPowerOfTwo(4096), true)
  Test.assertEquals(isPowerOfTwo(5), false)*/
```
[Invert values](https://www.codewars.com/kata/invert-values/train/javascript)
```javascript
function invert(array) {
  const arr = [];
    for(let i = 0; i < array.length; i++) {
      arr.push(-array[i]);
    }
   return arr;
}
```
[Balanced Number (Special Numbers Series #1 )](https://www.codewars.com/kata/balanced-number-special-numbers-series-number-1/train/javascript)
```javascript
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
```
[8 kyu Expressions Matter](https://www.codewars.com/kata/expressions-matter/train/javascript)
```javascript
// Given three integers a ,b ,c, return the largest number obtained after inserting 
// the following operators and brackets: +, *, ().

// Consider an Example :
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// _It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get 
// expression (1 + 3) * 2 = 8.
// Input >> Output Examples:
// 1- expressionsMatter(1,2,3)  ==>  return 9
// Explanation:
// After placing signs and brackets, the Maximum value obtained from the expression 
// (1+2) * 3 = 9.

// 2- expressionsMatter(1,1,1)  ==>  return 3
// Explanation:
// After placing signs, the Maximum value obtained from the expression is 1 + 1 + 1 = 3.

// 3- expressionsMatter(9,1,1)  ==>  return 18
// Explanation:
// After placing signs and brackets, the Maximum value obtained from the expression is 
// 9 * (1+1) = 18.

const expressionMatter = (a, b, c) => Math.max(a + b + c, a * (b + c), (a + b) * c, a * b * c);
```
[8 kyu Square(n) Sum](https://www.codewars.com/kata/square-n-sum/train/javascript)
```javascript
// 8kyu - Square(n) Sum

// Complete the squareSum/square_sum/SquareSum method so that it squares each 
// number passed into it and then sums the results together.

// For example:

// squareSum([1, 2, 2]); // should return 9

function squareSum(numbers){
  let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 2;
    }
  return sum;
}

const squareSum = n => n.reduce((a, c) => a + (c ** 2));

//Test.assertEquals(squareSum([1,2]), 5)
//Test.assertEquals(squareSum([0, 3, 4, 5]), 50)
```
[7 kyu Sum of Array Averages](https://www.codewars.com/kata/sum-of-array-averages/train/javascript)
```javascript
let sumAverage = a => Math.floor(a.map(e => e.reduce(sum) / e.length).reduce(sum));

let sum = (a, b) => a + b;
```
[7 kyu Discover The Original Price](https://www.codewars.com/kata/discover-the-original-price/train/javascript)
```javascript
function discoverOriginalPrice(discountedPrice, salePercentage){
  return +(discountedPrice / (1 - salePercentage / 100)).toFixed(2);
}
```
[7 kyu Number of People in the Bus](https://www.codewars.com/kata/number-of-people-in-the-bus/train/javascript)
```javascript
const number = (busStops) => busStops.reduce((sum, [a, b]) => sum + a - b, 0);
```