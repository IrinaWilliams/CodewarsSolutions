https://www.codewars.com/kata/number-of-people-in-the-bus/train/javascript
   
   const number = function(busStops){
     let totalPeople = 0;
     for (let i = 0; i < busStops.length; i++) {
       totalPeople += busStops[i][0];
       totalPeople -= busStops[i][1];
     }
     return totalPeople;
   }

   const number = (busStops) => busStops.reduce((sum, [a, b]) => sum + a - b, 0);

   7 kyu Number of People in the Bus
   