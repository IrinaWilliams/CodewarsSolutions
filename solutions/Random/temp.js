function stockList(listOfArt, listOfCat){
    //listOfArt = listOfArt.toString().split(',').split(' ');
    let temp;
    let arr = [];
    for(let i = 0; i < listOfArt.length; i++){
      temp = listOfArt[i].split(' ');
    
    for(let j = 0; j < temp.length; j++){
      if(temp[0].includes(listOfCat.map(el => el))){
       arr.push(listOfCat[el], temp[1]); 
        console.log(arr);
      }
      }
    }
  }
    
      
 
  console.log(stockList(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B"]));
  //res = "(A : 200) - (B : 1140)"