let str = 'H-e-l-l-o- -W-o-r-l-d'; //'-o-l-l-e-H d-l-r-o-W-'
let str1 = [...str].reverse().join('');
console.log(str1);


let str = 'H-e-l-l-o- -W-o-r-l-d';

function isReverse(str){
  let str1 = str.split(' ');
  let str2 = '';
  for(let i = 0; i < str1.length; i++){
    str1[i] = [...str1[i]].reverse().join('');
    str2 += str1[i] + ' ';
   }
  return str2.trim();
}
console.log(isReverse(str));

const string = "H-e-l-l-o- -W-o-r-l-d"; //‘-o-l-l-e-H d-l-r-o-W-’

function reverStr(string){
  
const newString = string.split(' ');
let secondStr = "";
let thirdStr = "";
for(let i = (newString[0].length)-1; i > -1; i--){
  secondStr += (newString[0])[i];
}
for(let i = (newString[1].length)-1; i > -1; i--){
  thirdStr += (newString[1])[i];
}
  return secondStr + " " + thirdStr;
}
console.log(reverStr(string));