https://www.codewars.com/kata/jaden-casing-strings/train/javascript

String.prototype.toJadenCase = function () {
    let str = this.split(" ");
    return str.map(el => el[0].toUpperCase() + el.slice(1)).join(" ");
  };