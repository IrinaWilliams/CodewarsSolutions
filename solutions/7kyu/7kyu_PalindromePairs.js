##https://www.codewars.com/kata/palindrome-pairs/train/javascript

// Given a list of unique words. Find all pairs of distinct indices (i, j) in the given list so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

// Examples:

// ["bat", "tab", "cat"] # [[0, 1], [1, 0]]
// ["dog", "cow", "tap", "god", "pat"] # [[0, 3], [2, 4], [3, 0], [4, 2]]
// ["abcd", "dcba", "lls", "s", "sssll"] # [[0, 1], [1, 0], [2, 4], [3, 2]]
// Non-string inputs should be converted to strings.

// Return an array of arrays containing pairs of distinct indices that form palindromes. Pairs should be reutrned in the order they appear in the original list.



const palindromePairs = words => {
    let res = [];
    let resPal = false;
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words.length; j++) {
        if (i !== j && isPalindrome(words[i].toString() + words[j].toString()))
            res.push([i, j]);
          }
  
        }
    return res;
  }
  
  function isPalindrome(random) {
    let res;
    for (let i = 0; i < (random.length - 1) / 2; i++) {
      if (random[i] === random[random.length - 1 - i]) {
        res = true;
      } else {
        return false;
      }
    }
    return res;
  }

//   describe("Solution", function(){
//     it("should return the right pairs", function(){
//       Test.assertSimilar(palindromePairs(["bat", "tab", "cat"]), [[0, 1], [1, 0]]);
//       Test.assertSimilar(palindromePairs(["dog", "cow", "tap", "god", "pat"]), [[0, 3], [2, 4], [3, 0], [4, 2]])
//       Test.assertSimilar(palindromePairs(["abcd", "dcba", "lls", "s", "sssll"]), [[0, 1], [1, 0], [2, 4], [3, 2]])
//     });
//   });