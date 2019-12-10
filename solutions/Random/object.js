const obj = {
    brend: 'American',
    color: 'white',
    age: '23',
  }
  console.log(Object.entries(obj));
  
  const obj2 = {
    model: 'Volt',
    make: 'Shady',
    year: '2013',
  }
  console.log(Object.keys(obj2));
  console.log(Object.values(obj2));
  
  function isAdded(obj, obj2){
    const obj3 = {};
    for(let key in obj){
      if(obj.hasOwnProperty(key)){
      console.log(`${key} : ${obj[key]}`);
      }
    }
    return obj3; 
  }
  console.log(isAdded(obj, obj2));
  
  function isMerge(obj, obj2){
    const obj3 = {...obj, ...obj2};
    
    return obj3; 
  }
  console.log(isMerge(obj, obj2));