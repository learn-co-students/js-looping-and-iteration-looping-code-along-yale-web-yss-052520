// Code your solutions in this file
function writeCards (array, event) {
    let thankYouMessages = []
    for (let i = 0; i < array.length; i++) {
    thankYouMessages.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages
}


function countDown(count) {
    while (count > 0) {
        console.log(count);
        count -= 1
    }
    console.log(count)
}