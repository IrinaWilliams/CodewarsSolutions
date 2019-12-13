//https://www.codewars.com/kata/see-you-next-happy-year/train/javascript/5d3d93d83304480021b52dea

function nextHappyYear(year){
    while ((/([0-9]).*?\1/).test(++year));
    return year;
  }

  nextHappyYear(1001); //1023
  nextHappyYear(1123); //1203
  nextHappyYear(2001); //2013