

//too slow code
function divisibleCount(x, y, k) {
    let count = 0;
    for(let i = x; i <= y; i++) {
      if(i%k == 0) {
      count++;
      }
    }
    return count;
 }