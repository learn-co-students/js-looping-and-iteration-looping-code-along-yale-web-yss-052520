// Code your solutions in this file
function countDown(num) {
    while (num > -1) {
        console.log(num)
        num--
    } 
}

function writeCards(array, keyWord) {
    let newArray = []

    for (let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${keyWord} gift!`)
    }
    return newArray
}