//O(2ˆn)time | O(n) space
function getNthFib(n) {
    if(n == 2) {
        return 1;
    } else if (n == 1){
        return 0;
    } else {
        return getNthFib(n -1 ) + getNthFib(n - 2);
    }
}

//O(n) time | O(n) space
function getNthFib(n, memoize = {1: 0, 2: 1}) {
    if(n in memoize){
        return memoize[n];
    }else {
        memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize)
        return memoize[n];
    }
}
console.log(getNthFib(6));

//O(n) time | O(1) space
function getNthFib(n) {
    let lastTwo = [0 , 1];
    let counter = 3;
    while(counter <= n){
        let nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        counter += 1;
    } 
    return  n > 1 ? lastTwo[1] : lastTwo[0];
}