// Code your solutions in this file
function writeCards(array, word) {
  let cards = []
  for (let i=0; i<array.length; i++) {
    cards.push(`Thank you, ${array[i]}, for the wonderful ${word} gift!`)
  }
  return cards
}

// writeCards(["Anna", "Vidhi"], "birthday")

function countDown(num) {
  for (let i = 0; i<=num; i++) {
    console.log(num-i)
  }
}

countDown(11)