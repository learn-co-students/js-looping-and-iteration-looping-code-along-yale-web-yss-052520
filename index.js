// Code your solutions in this file
function countDown(integer) {
    let countdown = integer
    while (countdown >= 0) {
        console.log(countdown--)
    }
}

function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }