//(https://www.codewars.com/kata/so-easy-charge-time-calculation/train/javascript)

function calculateTime(battery,charger){
  return Math.round(battery / charger * 130) / 100;
}
