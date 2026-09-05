const prompt = require('prompt-sync')();

let num = Number(prompt('entre a number : '))
let arr = []
for (let i = 1; i <= num; i++) {
    let ask = prompt('entre element : ')
    arr.push(ask)

}
console.log(arr)
let search = prompt('search an element : ')
let change = prompt('entre the new element :')
for (let i = 0; i < num; i++) {
   if (arr[i] === search) {
    arr[i] = change
   }

}
   
console.log(arr)