const prompt = require('prompt-sync')()
let arr = [2 , 5 , 10 , 1 , 24]
let find = false
let index = 0

let ask = Number(prompt('entre number you want find : '))
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ask) {
        find = true
        index = i
        break
    }
  
}
  if (find === true) {
        console.log(` its find , and his index is ${index}`)
        
    }
    else{
        console.log('not find');
        
    }