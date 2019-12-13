https://www.codewars.com/kata/repeatit/train/javascript
/*Create a function that takes a string and an integer (n).

The function should return a string that repeats the input string n number of times.

If anything other than a string is passed in you should return "Not a string"

Example
"Hi", 2 --> "HiHi"
1234, 5 --> "Not a string"
*/

const repeatIt = (str, n) => (typeof str == 'string') ? str.repeat(n) : 'Not a string';

/*Test.assertEquals(repeatIt("*",3), "***", 'Returned unexpected value')
Test.assertEquals(repeatIt("Hello",11), "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello", 'Returned unexpected value')*/