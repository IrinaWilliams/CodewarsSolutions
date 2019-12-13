https://www.codewars.com/kata/discover-the-original-price/train/javascript

function discoverOriginalPrice(discountedPrice, salePercentage){
  return +(discountedPrice / (1 - salePercentage / 100)).toFixed(2);
}