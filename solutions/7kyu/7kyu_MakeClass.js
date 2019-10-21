https://www.codewars.com/kata/make-class/train/javascript

function makeClass(...properties) {
    return function(...argument){
      properties.forEach((arg, i) => this[arg] = argument[i]);
    }
  }
  