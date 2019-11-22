/* Exercises with Arrays
Level Intermediate
Given an array of N numbers, design O(n) algorithm that indentifies a majority
(i.e, an element that appears more than N/2 times)
Sourse: The AlgorithmProblemBot (https://twitter.com/AlgorithmProble)
*/

const arrNums = [3, 3, 4, 2, 4, 4, 2, 4, 4]; //count(4) = 5, array length = 9, majority = 4
const occurance = {};
let curNumber;
let maxNumber = arrNums[0];

for(let i = 0; i < arrNums.length; i++){
    curNumber = arrNums[i];
    if(occurance[curNumber] !== undefined){
        occurance[curNumber]++;
    } else {
        occurance[curNumber] = 1;
    }
    if(occurance[curNumber] > occurance[maxNumber]){
        maxNumber = curNumber;
    }
}
if(occurance[maxNumber] > arrNums.length / 2) {
    writeLine("Found the majority element: " + maxNumber);
} else {
    writeLine("No majority element found")
}