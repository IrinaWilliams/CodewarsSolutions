// ECMA5
function isPseudoArr(a) {
    console.log(a);
    arguments[0] = "Blala"; //same as a = 'G'; 
    console.log(arguments);
//     for(let i = 0; i < arguments.length; i++){
//     console.log(arguments[i]);
// }
    console.log(a);// a = "Blala", 6, 7, 8
}
isPseudoArr(5, 6, 7, 8); //0 argument change everywhere

// ECMA6 strict
function isPseudoArrg(a){
    "use strict";
    console.log(a);
    arguments[0] = "WOW";
    console.log(arguments);
    console.log(a);

}
isPseudoArrg(5, 6, 7, 8); //a = 5, 6, 7, 8 

// array.from
function isPseudoArrgs(a){
    "use strict";
    let arr;
    console.log(a);
    arguments[0] = "WOW";
    console.log(arguments);
    console.log(a);
    arr = Array.from(arguments);
    console.log(arr);
}
isPseudoArrgs(5, 6, 7, 8); 