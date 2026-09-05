const prompt = require('prompt-sync')();

let num = Number(prompt('entre a number : '))
let arr = []
for (let i = 1; i <= num; i++) {
    let ask = Number(prompt('entre element : '))
    arr.push(ask)

}
console.log(arr)
console.log(arr[1]);

let arr2=[]
for (let i = 0; i < num ; i++) {
   arr2[i] = arr[i]
}
console.log(arr2)
console.log(arr2[1])