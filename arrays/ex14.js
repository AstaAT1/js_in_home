const prompt = require('prompt-sync')();

let num = Number(prompt('entre a number : '))
let arr = []
for (let i = 1; i <= num; i++) {
    let ask = Number(prompt('entre element : '))
    arr.push(ask)

}
console.log(arr)
let sum = 0
for (let i = 0; i < num; i++) {
    sum += arr[i]

}
   console.log(sum)
console.log(sum / num)