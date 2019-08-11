function arrAdder(arr) {
    let arrRes = [];
       for(let i = 0; i < arr[0].length; i++) {
         let int = [];
           for(let j = 0; j < arr.length; j++) {
             if(arr[j][i] !== '')
              int.push(arr[j][i]);
            }
            arrRes.push(int.join(""));
        }
    return arrRes.join(" ").trim();
}

function arrAdder(arr) {
     let str = "";
     for(let i = 0; i < arr[0].length; i++){
       for(let j = 0; j < arr.length; j++){
         str += arr[j][i];
       }
       str += " ";
    }
  return str.trim();
}