https://www.codewars.com/kata/check-the-exam/train/javascript
  
   /*The first input array contains the correct answers to an exam, like ["a", "a", "b", "d"]. The second one is "answers" array and contains student's answers.

     The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer(empty string).

     If the score < 0, return 0.
     */
   const checkExam = (answers, student) => {
     const score = student.reduce((total, response, index) => {
       if (!response) return total
       if (response === answers[index]) return total + 4
       if (response !== answers[index]) return total - 1

       return total
     }, 0)

     return score > 0 ? score : 0
   }
   console.log(checkExam([ 'a', 'b', 'a', 'c', 'a', 'b', 'b', 'c', 'c', 'c', 'c', 'b', 'c', 'b', 'a' ] [ 'b', '', '', 'b', '', '', '', 'b', '', '', 'a', 'b', 'c', 'a', 'c' ]));
     console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));
     console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]));