// Code your solutions in this file
function writeCards(nameArray, eventName) {
    let messageArray = []
    for (let i = 0; i < nameArray.length; i++) {
        messageArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return messageArray;
}

function countDown(num) {
    let theCount = num;
    while (theCount >= 0 ) {
        console.log(theCount--);
    }
}