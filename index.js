
function writeCards(arr, gift_type) {
    for (let index = 0; index < arr.length; index++){
        arr[index] = `Thank you, ${arr[index]}, for the wonderful ${gift_type} gift!`;
    }
    return arr;
}

function countDown(start){
    while (start >= 0) {
        console.log(start);
        start -= 1
    }
}