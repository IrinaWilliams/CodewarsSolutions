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