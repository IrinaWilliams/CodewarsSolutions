function bubble (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string") {
        arr.unshift(arr[i]);
        i++;
        arr.splice(i, 1);
        i--;
      }
      for (let j = 0; j < arr.length; j++){
        if(arr[i] < arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
    return arr;
  }
  console.log(bubble([4, 7, 3, 'zdsfg', 0, '8', 1, 'a', 8, 9]));