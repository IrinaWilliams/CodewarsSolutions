https://www.codewars.com/kata/shortest-word/train/javascript
   
/*Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.*/

   function findShort(s){
   let shortesWord = s.split(' ').sort((a, b) => a.length - b.length);
    return shortesWord[0].length;
   }
   function findShort(s){
     let arr = s.split(' ');
     let shortW = arr[0];
       for(let i = 0; i < arr.length; i++) {
         if(arr[i].length < shortW.length) {
           shortW = arr[i];
         }
       }
     return shortW.length;
   }

/*Test.describe("Example tests",_=>{
    Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
    Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
    });*/