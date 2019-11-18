 /*
   Given the API POST request and payload below come up with Python solutions 
   (or write a plan on how you would automate the task) to:

  1) Validate all questions have four non null options.

  2) Validate ["New York Bulls", "Los Angeles Kings", "Golden State Warriors", "Houston Rocket"] 
  are the options for sports q1.

  --API-- (** It's a fake API and response for the question purposes only)
  Endpoint - https://validate.test.com/api/quiz-questions
  Payload: {"quizSubject": ["sports", "math"],"semester": "2"}*/

// quizSubject is array of objects
//sports & math are objects
//q1 & q2 are objects
// options is array

console.log(null === null);
 const response = {
   'quizSubject': 
   [
    {
      'sports': [
         {
           'q1': {'question': 'Which one is correct team name in NBA?', 'options': ["New York Bulls", "Los Angeles Kings", "Golden State Warriors", "Houston Rocket"], 'answer': "Houston Rocket"}}]}, 
    {
      'math': [{'q1': {'question': '5 + 7 = ?', 'options': ["10", "11", "12", "13"], 'answer': '12'}}, {'q2': {'question': '12 - 8 = ?', 'options': [
           "1", "2", "3", "4"], 'answer': '4'}}]}
   ]
 };

 const responseData = ["New York Bulls", "Los Angeles Kings", "Golden State Warriors", "Houston Rocket"];

 function responseChecker(respAPI) {
   let pathToQuiz = respAPI.quizSubject;
   
   for (let i = 0; i < pathToQuiz.length; i++) {
     for (let key1 in pathToQuiz[i]) {
       let a = pathToQuiz[i][key1];
       console.log(pathToQuiz[i][key1]);
       for (let key2 in a) {
         let b = a[key2];
         for (let key3 in b) {
           console.log(b[key3].options);
           for(let k = 0; k < pathToOptions.length; i++){
             if(pathToOptions.length !== 4 || pathToOptions === null) {
               return false;
             }
           }
         }
       }
     }
   }
   return true;
 }
 console.log(responseChecker(response));

function sportOptions(response, responseData){
  let pathToSportOptions = response.quizSubject[0].sports[0].q1.options;
  for(let i = 0; i < pathToSportOptions.length; i++){
    if(pathToSportOptions[i] !== responseData[i]){
      return false;
    }
  }
  console.log(pathToSportOptions);
  return true;
}
console.log(sportOptions(response, responseData));