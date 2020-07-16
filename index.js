// Code your solutions in this file
function writeCards(names, event) {
    let cards = []
    names.forEach(name => {
        cards.push(`Thank you, ${name}, for the wonderful ${event} gift!`)
    })
    return cards
}

function countDown(n) {
    while (n >= 0) {
        console.log(n--)
    }
}