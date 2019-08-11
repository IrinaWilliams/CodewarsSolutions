function sumOfABeach(beach) {
     let reg = /sand|water|fish|sun/gi;
     let arr = beach.match(reg);
     return !arr ? 0 : arr.length;
}

function sumOfABeach(beach) {
       let result = 0;
       beach = beach.toLowerCase();
       let elements = ["sand", "water", "fish", "sun"];
       for (let i = 0; i < 4; i++) {
           while (beach.includes(elements[i])) {
               beach = beach.replace(elements[i], '');
               result++;
           }
       }
    return result;
}

const sumOfABeach = beach => (beach.match(/sand|water|fish|sun/ig) || []).length;