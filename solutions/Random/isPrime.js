//Prime Number divides only on himself or 1

let num = 7;
let arr = [];
function isPrime(num){
  
  if(num === 2){
    return true;
  }
  
  if(!Number.isInteger(num) || num < 2 || num % 2 === 0){
    return false;
  }
  
  for(let i = 2; i < num - 1; i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}

for(let i = 0; i < 100; i++){
  if(isPrime(i)){
      arr.push(i);
    console.log(i);
  }
}