https://www.codewars.com/kata/the-office-iii-broken-photocopier/train/javascript

/*The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!
Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.
Given a string of binary, return the version the photocopier gives you as a string.*/
   
   function broken(x){
     return x.replace(/[01]/g, (a) => {
     return a === '0' ? '1' : '0';
     })
   }
   function broken(x){
     let res = '';
       for(let i = 0; i < x.length; i++) {
         res += x[i] === '0' ? '1' : '0';
       }
     return res;
   }

   /*Test.describe("Example tests",_=>{
    Test.assertEquals(broken("1"), "0");
    Test.assertEquals(broken("10000000101101111110011001000"), "01111111010010000001100110111");
    Test.assertEquals(broken("100010"), "011101");
    });*/