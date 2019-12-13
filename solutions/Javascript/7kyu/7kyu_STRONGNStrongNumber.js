https://www.codewars.com/kata/strongn-strong-number-special-numbers-series-number-2/train/javascript
  
   function strong(n) {
     let sum = 0;
     let str = n.toString().split('').forEach(el => {
       let fact = 1;
         for(let i = 1; i <= el; i++) fact *= i;
         sum += fact;
       });
     return sum === n ? "STRONG!!!!" : "Not Strong !!" ;
   }