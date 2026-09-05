const prompt = require('prompt-sync')();

let num = Number(prompt('entre a number : '))
let arr = []
for (let i = 1; i <= num; i++) {
    let ask = prompt('entre element : ')
    arr.push(ask)

}
console.log(arr)
let search = prompt('search an element : ')
let count = 0
for (let i = 0; i < num; i++) {
   if (arr[i] === search) {
    count++
   }

}
   if (count > 0) {
     console.log('his here');
     
   }
   else{
    console.log('his not here');
    
   }