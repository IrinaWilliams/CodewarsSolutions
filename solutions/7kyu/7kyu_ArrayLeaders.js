const arrayLeaders = n => {
    let res = [];
    for (let i = 0; i < n.length; i++) {
      let sum = 0;
      for (let j = i + 1; j < n.length; j++) {
        sum += n[j];
      }
      if (n[i] > sum) {
        res.push(n[i]);
      }
    }
  return res;
}