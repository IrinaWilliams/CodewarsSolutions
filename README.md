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

*new solution
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
```

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
```

function solution(str){
  return str.split('').reverse().join('');  
}

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