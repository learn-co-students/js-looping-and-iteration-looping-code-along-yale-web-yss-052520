// Code your solutions in this file


function writeCards(names, event) {
    let arrayNew = []
    for (let i = 0; i < names.length; i++) {
      arrayNew.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return arrayNew
  }

function countDown(number) {
    while(number > 0) {
        console.log(number);
        number -= 1; 
    }
    console.log(number)
}