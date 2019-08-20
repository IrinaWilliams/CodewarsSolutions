function going(n) {
  let a = 1;
    let b = 1;
      for(let i=0; i < n-1; i++) {
        b = b/(n-i);
        a = a + b;
      }
  return Math.floor(a*1000000)/1000000;
}

function going(n) {
    // your code
    let d = 1;
    let res = 1;
    for (let i = n; i > 1; i --)
    {
      d *= i;
      res += 1 / d;
    }
    return Math.floor(res * 1e6) / 1e6;
}