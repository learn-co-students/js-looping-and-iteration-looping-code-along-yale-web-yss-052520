// Code your solutions in this file

function writeCards(names, event) {
    let result = [];
    for (let count = 0; count <= names.length - 1; count++)
        {
            result.push(`Thank you, ${names[count]}, for the wonderful ${event} gift!`);
        }
    return result; 
}

function countDown(integer){
    let count = integer; 
    while(count >= 0 ){
        console.log(count) 
        count --
    }
}