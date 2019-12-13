https://www.codewars.com/kata/last/train/javascript

/*Find the last element of the given argument(s).
Examples
last([1, 2, 3, 4] ) // =>  4
last("xyz")         // => "z"
last(1, 2, 3, 4)    // =>  4
In javascript and CoffeeScript a list will be an array, a string or the list of arguments.*/

function last(...list){
  let  str = list.join();
    if(str.includes(',')) str = str.split(',');
  return !isNaN(+str[str.length-1]) ? +str[str.length-1] : str[str.length-1];
}
function last(list){
  var last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}

/*Test.assertEquals(last([1,2,3,4,5]), 5);   //-- array
Test.assertEquals(last("abcde"), "e");     //-- string
Test.assertEquals(last(1,"b",3,"d",5), 5);//-- arguments
*/