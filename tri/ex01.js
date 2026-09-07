let arr = [34, 12, 5, 9, 42, 1]

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
       if (arr[j + 1] < arr[j]) {
            let swap = arr[j + 1]
            arr[j + 1] = arr[j]
            arr[j]= swap
       }
        
    }
}
console.log(arr)