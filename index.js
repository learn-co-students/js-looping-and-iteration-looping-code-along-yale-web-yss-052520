// Code your solutions in this file
function writeCards(arr, name) {
    let return_arr = []; 
    for (let i = 0; i < arr.length; i++) {
        return_arr.push(`Thank you, ${arr[i]}, for the wonderful ${name} gift!`); 
    }
    return return_arr; 
}

function countDown(num) {
    while (num >= 0) {
        console.log(num); 
        num--; 
    }
}