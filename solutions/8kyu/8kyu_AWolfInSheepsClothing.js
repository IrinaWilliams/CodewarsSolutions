https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(queue) {
  let c = queue.reverse().indexOf('wolf');
  return c > 0 ? `Oi! Sheep number ${c}! You are about to be eaten by a wolf!` : `Pls go away and stop eating my sheep`;
}