https://www.codewars.com/kata/no-loops-1-small-enough/train/javascript

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