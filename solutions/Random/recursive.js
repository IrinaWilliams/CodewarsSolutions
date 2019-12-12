function factorial(x) {
    // TERMINATION - прекращение
    if (x < 0) return;
    // BASE
    if (x === 0) return 1;
    // RECURSION
    return x * factorial(x - 1);
    // factorial(3) returns 3 * factorial(2)
    // factorial(2) returns 2 * factorial(1)
    // factorial(1) returns 1 * factorial(0)
    // factorial(0) returns 1
  }
  factorial(3);
  
  //String reverse by recursion
  function revStr(str){
    if (str === '') return '';
    return revStr(str.substr(1)) + str[0];
  }
  revStr('cat');
  // tac
//   revStr('')     returns                ''  => ''
//   revStr('t')    returns revStr('') +   't' => '' + 't'
//   revStr('at')   returns revStr('t') +  'a' => '' + 't' + 'a'
//   revStr('cat')  returns revStr('at') + 'c' => '' + 't' + 'a' + 'c'
  // tac
//**step 1th
//   return revStr(str.substr(1)) + str[0];
// SAME AS
//   return revStr('at') + 'c'
//ac
//**step 2th
// return revStr(str.substr(1)) + str[0];
// SAME AS
// return revStr('t') + 'a'
//tac