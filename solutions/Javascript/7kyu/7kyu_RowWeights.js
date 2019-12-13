https://www.codewars.com/kata/row-weights/train/javascript

/*Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.*/

function rowWeights(array){
    let countTeam1 = 0;
    let countTeam2 = 0;
      for(let i = 0; i < array.length; i+=2) {
          countTeam1 += array[i];
      }
      for(let j = 1; j < array.length; j+=2) {
        countTeam2 += array[j];
      }
    return[countTeam1, countTeam2];
  }

  /*describe("Basic tests",_=>{
  Test.assertSimilar(rowWeights([80]), [80,0]);
  Test.assertSimilar(rowWeights([100,50]), [100,50]);
  Test.assertSimilar(rowWeights([50,60,70,80]), [120,140]);
  Test.assertSimilar(rowWeights([13,27,49]), [62,27]);
  Test.assertSimilar(rowWeights([70,58,75,34,91]), [236,92]);
  Test.assertSimilar(rowWeights([29,83,67,53,19,28,96]), [211,164]);
  Test.assertSimilar(rowWeights([0]), [0,0]);
  Test.assertSimilar(rowWeights([100,51,50,100]), [150,151]);
  Test.assertSimilar(rowWeights([39,84,74,18,59,72,35,61]), [207,235]);
  Test.assertSimilar(rowWeights([0,1,0]), [0,1]);
})*/