const twoSum = (nums, target) => {
    const map = {}; 
    for (let i = 0; i < nums.length; i++) {
      const another = target - nums[i]; 
      if (another in map) {
        return [map[another], i];
      }  
      map[nums[i]] = i;
    }
    return null;
};
    
/// - [ ] two sum task - Write a function that return all pairs of 
// numbers that sum to a target. Numbers cannot be use twice. 
// [2,5,2] returns[[2,5]] because 5 can only be used once. 
// f(0)=f(1)=f(2)=1; f(x) = f(x-1)+f(x-2)+f(x-3); input an x and return f(x) 

let array = [2,4,5,3,2,1,5];

function twoSum(num, target){
  
  let resArr = [];
  let arr = [];
  for(let i = 0; i < num.length-1; i++){
    for(let j = 1; j < num.length; j++){
      
      if(num[i] + num[j] === target 
         && arr.indexOf(i) === -1 
         && arr.indexOf(j) === -1){
        
        resArr.push([num[i], num[j]]);
        arr.push(i, j);
      }
    }    
  }
  return resArr;
}
console.log(twoSum(array, 7));
