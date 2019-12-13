let s = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';
let newStr = s.split(' ');
let unique = '';
    for (let i = 0; i < newStr.length; i++) {
    if (newStr.lastIndexOf(newStr[i]) == newStr.indexOf(newStr[i])) {
      unique += newStr[i];
    }
  }

  function removeDuplicateCharacters(string){
    return string
       .split('')
       .filter(function(item, pos, self) {
       return self.indexOf(item) == pos;
       })
       .join('');
   }
   removeDuplicateCharacters('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta');