const prompt = require('prompt-sync')();

let num = Number(prompt('entre a number : '))
let arr = []
for (let i = 1; i <= num; i++) {
    let ask = Number(prompt('entre element : '))
    arr.push(ask)

}
console.log(arr)
let arr2 = []
for (let i = 0; i < num; i++) {
   if (arr[i]% 2 === 0) {
    arr2.push(arr[i])
   }

}
   
console.log(arr2)