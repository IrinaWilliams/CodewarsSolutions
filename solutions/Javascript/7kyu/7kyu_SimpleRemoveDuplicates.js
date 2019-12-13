//(https://www.codewars.com/kata/simple-remove-duplicates/train/javascript)
  
   //const solve = arr => Array.from(new Set(arr.reverse())).reverse();

   function solve(arr){
    for (let i=0; i<arr.length; i++) {
       if (arr.indexOf(arr[i],i+1)>0) {
         arr.splice(i,1);
         --i;
       }
     }
     return arr;
   }
/*
   function solve(arr){
     let a=[];
     let ar=arr.reverse();
       for (let i=0; i<ar.length; ++i)
         if (a.indexOf(ar[i])==-1)
           a.push(ar[i]);
       return a.reverse();
   }
   */
