function writeCards(nameArr, occasion) {
  const msgArr = []
  for (let i = 0; i < nameArr.length; i++) {
    msgArr[i] = `Thank you, ${nameArr[i]}, for the wonderful ${occasion} gift!`
  }
  return msgArr
}

function countDown(num) {
  while (num >= 0) {
    console.log(num)
    num--
  }
}
