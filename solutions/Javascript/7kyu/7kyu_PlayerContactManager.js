https://www.codewars.com/kata/player-contact-manager/train/javascript

   /*You are the Dungeon Master for a public DnD game at your local comic shop and recently you've had some trouble keeping your players' info neat and organized so you've decided to write a bit of code to help keep them sorted!

     The goal of this code is to create an array of objects that stores a player's name and contact number from a given string.

     The method should return an empty array if the argument passed is an empty string or nil/None/null.*/

   function playerManager(players) {
   if(players === null || players.length === 0) return [];
   let res = [];
     let arr = players.split(', ');
       for(let i = 0; i < arr.length; i += 2) {
         let obj = {
           player: arr[i],
           contact: +arr[i + 1]
         };
           res.push(obj);
       }
     return res;
   }
   /*console.log(playerManager("John Doe, 8167238327, Jane Doe, 8163723827"));
   [{player: "John Doe", contact: 8167238327}, {player: "Jane Doe", contact: 8163723827}]
   */