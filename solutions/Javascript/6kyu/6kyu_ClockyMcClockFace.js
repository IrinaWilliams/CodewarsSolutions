https://www.codewars.com/kata/clocky-mc-clock-face/train/javascript

/*Description:
Story
Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.
And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.
Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!
What a bunch of cheapskates!
Can you do it?
Kata
Given the angle (in degrees) of the hour-hand, return the time in HH:MM format. Round down to the nearest minute.
Examples
12:00 = 0 degrees
03:00 = 90 degrees
06:00 = 180 degrees
09:00 = 270 degrees
12:00 = 360 degrees
Notes
0 <= angle <= 360
*/
const whatTimeIsIt = function(angle) {
let hour = 360 / 12; //30
let mimut = hour/60; //0.5
let hourClock = Math.floor(angle/hour);
let totalHour = (angle - (hour * hourClock)).toFixed(2);
let totalMin = Math.floor(totalHour/mimut);

if(hourClock === 0) {
    hourClock = '12';
  }
  if(angle === 0) {
    return '12:00';

  }
  if(String(hourClock).length < 2) {
    hourClock = 0 + String(hourClock);
  }
  if(String(totalMin).length < 2) {
    totalMin = 0 + String(totalMin);
  }
return `${hourClock}:${totalMin}`;
}
let whatTimeIsIt = function(angle) {
  let h = angle / 0.5;
  let fh = Math.floor(h / 60)
  let min = Math.floor(h % 60);
  if(angle < 30) fh = 12;
  return ('00' + fh).slice(-2) +':'+('00' + min).slice(-2);
}
/*console.log(whatTimeIsIt(259.2386828909314)"08:38");*/