const prompt = require('prompt-sync')();

let num = Number(prompt('entre a number : '))
let arr = []
for (let i = 1; i <= num; i++) {
    let ask = Number(prompt('entre element : '))
    arr.push(ask)

}
console.log(arr)
for (let j = 0; j < num ; j++) {
    for (let i = 0; i < num; i++) {
        if (arr[i] > arr[j]) {
            let swap = arr[i]
            arr[i]= arr[j]
            arr[j]=swap
             }
    }
}
console.log(arr)