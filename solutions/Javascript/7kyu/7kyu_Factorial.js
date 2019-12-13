https://www.codewars.com/kata/factorial-1/train/javascript

// Yor task is to write function factorial

// https://en.wikipedia.org/wiki/Factorial


function factorial(n){
    if(n < 0){return -1}
    else if(n === 0) {return 1}
    else{return (n * factorial(n-1))}
}

const factorial = n => n ? factorial(n - 1) * n : 1;

function factorial(n) {
    for (var acc = 1; n > 0; acc *= n, n--);
    return acc;
}

function factorial(n){
    let r = 1;
    while (n > 1) r *= n--;
    return r;
  }

//   Test.describe("Basic tests",_=>{
//     Test.assertEquals(factorial(0), 1);
//     Test.assertEquals(factorial(1), 1);
//     Test.assertEquals(factorial(4), 24);
//     Test.assertEquals(factorial(7), 5040);
//     Test.assertEquals(factorial(17), 355687428096000);
//     })