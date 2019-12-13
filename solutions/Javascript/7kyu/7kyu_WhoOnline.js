https://www.codewars.com/kata/whos-online/train/javascript

   /*You have a group chat application, but who is online!?

     You want to show your users which of their friends are online and available to chat!

     Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

     If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.*/

   const whosOnline = (friends) => {

     let obj = {};
       for (let i = 0; i < friends.length; i++) {
         if (friends[i].status == 'online' && friends[i].lastActivity <= 10) {
           if (!obj.online) {
             obj.online = [];
           };
           obj.online.push(friends[i].username);
         };
         if (friends[i].status == 'offline') {
           if (!obj.offline) {
             obj.offline = [];
           };
           obj.offline.push(friends[i].username);
         };
         if (friends[i].status == 'online' && friends[i].lastActivity > 10) {
           if (!obj.away) {
             obj.away = [];
           };
           obj.away.push(friends[i].username);
         };
       }
     return obj;
   }
   /*
   it('Example test one of each', function () {
       friends = [{
         username: 'David',
         status: 'online',
         lastActivity: 10
       }, {
         username: 'Lucy',
         status: 'offline',
         lastActivity: 22
       }, {
         username: 'Bob',
         status: 'online',
         lastActivity: 104
       }]

   Test Passed: Value deep equals { offline: [ 'Lucy' ], away: [ 'Bob' ] }*/
