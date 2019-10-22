// A => B => C => ERROR
// A => C => B => no error
// C => B => A => no error
// A => B => B => C => no error
// Create a function that outputs all the users who experienced the error. Logs are in
// chronological order from when they occurred
const logs = [
  { action: 'A', userId: 1 },
  { action: 'A', userId: 1 },
  { action: 'A', userId: 2 },
  { action: 'A', userId: 3 },
  { action: 'A', userId: 1 },
  { action: 'B', userId: 1 },
  { action: 'B', userId: 1 },
  { action: 'B', userId: 2 },
  { action: 'B', userId: 3 },
  { action: 'A', userId: 3 },
  { action: 'C', userId: 3 },
  { action: 'C', userId: 2 },
  { action: 'C', userId: 1 },
  { action: 'B', userId: 1 },
  { action: 'C', userId: 1 }
];

//user1: AAABBCBC
//user2: ABC
//user3: ABAC

function isError(logs) {
    let res = [];
    let error = 'ABC';
    let users = ['user1:', 'user2: ', 'user3: '];
    for(let i = 0; i < logs.length; i++){
        if(logs[i].userId === 1) {
            users[0] += logs[i].action;
        } else if(logs[i].userId === 2) {
            users[1] += logs[i].action;
        } else if(logs[i].userId === 3) {
            users[2] += logs[i].action;
        }
    }
    for(let i = 0; i < users.length; i++) {
        if(users[i].includes(error))
        res.push(`${users[i]} - ERROR`);
    }
    return res;
}
console.log(isError(logs));

//for unknown length
function isError1(logs) {
  let res = [];
  let error = 'ABC';
  let o = [];
  for (let i = 0; i < logs.length; i++) {
    if (o[logs[i].userId - 1] === undefined) {
      o[logs[i].userId - 1] = logs[i].action;
    } else o[logs[i].userId - 1] += logs[i].action;
  }
  for (let i = 0; i < o.length; i++) {
    if (o[i].includes(error)) {
      res.push(`userId: ${i + 1} - ERROR`);
    }
  }
  return res;
}

console.log(isError1(logs));