https://www.codewars.com/kata/sort-out-the-men-from-boys-1/train/javascript

function menFromBoys(arr){
arr = Array.from(new Set(arr));
 let men = [];
  let boys =[];

   for(let i = 0; i < arr.length; i++) {
     if(arr[i] % 2 === 0) {
       men.push(arr[i]);

     }
     if(arr[i] % 2) {
       boys.push(arr[i]);

     }
      men.sort((a, b) => a - b);
      boys.sort((a, b) => b - a);
   }
   return [...men, ...boys];
 }