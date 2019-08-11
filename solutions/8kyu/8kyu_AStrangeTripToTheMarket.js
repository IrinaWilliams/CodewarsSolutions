function isLockNessMonster(s) {
    let reg = /tree fiddy|3[.]50/gi;
    let arr = s.match(reg);
    return !arr ? 0 : arr.length;
}

function isLockNessMonster(s) {
     return s.includes("tree fiddy") || s.includes("3.50");
}

function isLockNessMonster(s) {
     return (/tree fiddy|3.50/).test(s);
}