const prompt = require('prompt-sync')();

let num = Number(prompt('entre a number : '))
let arr = []
for (let i = 1; i <= num; i++) {
    let ask = Number(prompt('entre element : '))
    arr.push(ask)

}
console.log(arr)
let arr2 = []
for (let i = 1; i <= num; i++) {
    let ask = Number(prompt('entre element : '))
    arr2.push(ask)

}
console.log(arr2)
let arr3 = []
for (let i = 0; i < num; i++) {
    arr3.push(arr[i])
    
}
for (let i = 0; i < num; i++) {
   arr3.push(arr2[i])
    
}
console.log(arr3);

