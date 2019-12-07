//Merge two arrays and remove duplicates

const arr = [1, 2, 4, 6, 8];
const arr2 = [2, 3, 4, 5, 6, 7, 8, 9];

function mergeArr(arr, arr2){
  const newArr = [];
  let temp;
for(let i = 0; i < arr2.length; i++){
  arr.push(arr2[i]);
  }
  for(let i = 0; i < arr.length; i++){
    if(!newArr.includes(arr[i])){
      newArr.push(arr[i]);
    }
  }
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < newArr.length; j++){
      if(newArr[i] > newArr[j]){
        temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
      }
    }
  }
  return newArr;
} 
console.log(mergeArr(arr, arr2));