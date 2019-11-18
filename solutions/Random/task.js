//1. Remove duplicates of an array and return an array of only unique elements

const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
const newArr = [];

for(let i = 0; i < array.length; i++){
  if(newArr.indexOf(array[i]) === -1){
//   if(!newArr.includes(array[i])){
    newArr.push(array[i]);
  }
}
console.log(newArr);

function removeDubl(arr) {
  let obj = {};
  for(let i = 0; 0 < arr.length; i++){
    obj[arr[i]] = true; //obj[key] = 1: true
    console.log(obj[arr[i]]);
  }
  return Object.keys(obj).map(el => Number(el));//Object.keys() - returns strings -> map reterns arr of numbers
}
console.log(removeDubl(arr));

//function declaration (name)
console.log(removeDubl(arr));
function removeDubl(arr) {
//function expression
// const removeDubl = function (arr){ //ECMAS 6
  let obj = {};
  for(let i = 0; 0 < arr.length; i++){
    obj[arr[i]] = true; //obj[key] = 1: true
    console.log(obj[arr[i]]);
  }
  return Object.keys(obj).map(el => Number(el));//Object.keys() - returns strings -> map reterns arr of numbers
}
// console.log(removeDubl(arr));