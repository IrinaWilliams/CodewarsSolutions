function defineSuit(card) {
  for(let i = 0; i < card.length; i++) {
    if(card[i] === '♣') return 'clubs';
    if(card[i] === '♠') return 'spades';
    if(card[i] === '♦') return 'diamonds';
    if(card[i] === '♥') return 'hearts';
  }
} 
