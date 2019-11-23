https://www.codewars.com/kata/length-of-missing-array/train/javascript
// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.


function getLengthOfMissingArray(arr) {
    if (!arr || arr.length < 1) {return 0;} //check that array.isArray and not empty
    const newArr = [];
    let missingArr;
    for (let i = 0; i < arr.length; i++) {
     if (!arr[i] || arr[i].length < 1) {return 0;} //check that array of array isArray and not empty
     newArr.push(arr[i].length); //take the length of each array
      newArr.sort((a, b) => a - b); //sort by ascending order (1-9)
    }
    for (let i = 0; i < newArr.length; i++) { //loop goes throught newArr for checking missing digit
      if (newArr[i] + 1 != newArr[i + 1]) { //if newArr[i]+1(if i = 0 then 0+1) not equal next digit (loop takes current iteratior and by +1 moving to the next one)
        return missingArr = newArr[i] + 1; //if next is not equal expected result return missing digit
      }
    }
  
    return 0;
  }

//   describe("KataTests", function(){
//     it("Basic Tests", function(){
//       Test.assertEquals(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 3);
//       Test.assertEquals(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 2);
//       Test.assertEquals(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ), 2);
//       Test.assertEquals(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] ), 5);
        
//       Test.assertEquals(getLengthOfMissingArray([ ]), 0);
//     });
//   });