// Code your solutions in this file
// writeCards(["Ada", "Brendan", "Ali"], "birthday");

function writeCards (array, event) {
    let cards = []
    for (let i = 0; i < array.length; i++) {
        cards.push( `Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return cards
}
  
function countDown(number) {
    while (number > 0) {
      console.log(number);
      number -= 1;
    }
    console.log(number);
}