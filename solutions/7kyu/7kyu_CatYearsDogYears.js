https://www.codewars.com/kata/cat-years-dog-years-2/train/javascript

// This is related to my other Kata about cats and dogs.

// Kata Task
// I have a cat and a dog which I got as kitten / puppy.

// I forget when that was, but I do know their current ages as catYears and dogYears.

// Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

// NOTES:

// Results are truncated whole numbers of "human" years
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

const ownedCatAndDog = function(catYears, dogYears) {
    if (catYears <= 15) {
      catYears = 1;
    } else {
      if ((catYears - 15) <= 9) {
        catYears = 2;
      } else {
        catYears = parseInt(((catYears - 24) / 4) + 2);
      }
    }
  
    if (dogYears <= 15) {
      dogYears = 1;
    } else {
      if ((dogYears - 15) <= 9) {
        dogYears = 2;
      } else {
        dogYears = parseInt(((dogYears - 24) / 5) + 2);
      }
    }
    return [catYears, dogYears];
  }
//   describe("Example Tests", function() {

//     it("one", function() {
//       Test.assertSimilar(ownedCatAndDog(15,15), [1,1]);
//     });
  
//     it("two", function() {
//       Test.assertSimilar(ownedCatAndDog(24,24), [2,2]);
//     });
  
//     it("ten", function() {
//       Test.assertSimilar(ownedCatAndDog(56,64), [10,10]);
//     });
  
//   });
  
  

  