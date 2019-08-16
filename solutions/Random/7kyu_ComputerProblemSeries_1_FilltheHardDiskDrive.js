
https://www.codewars.com/kata/computer-problem-series-number-1-fill-the-hard-disk-drive/train/javascript

function save(s, hd) {
  let sum = 0;
  let res = 0;   
    for(let i = 0; i < s.length; i++){    
      sum += s[i];
      if(sum <= hd) {
        res ++;
      }
    }
    return res;
    }
    save([4, 4, 4, 3, 3], 12);