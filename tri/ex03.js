let arr = [10, 29, 14, 37, 13]
for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i+1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j
                }

    }
                    if (arr[i] > arr[min]) {
                    let swap = arr[i]
                    arr[i] = arr[min]
                    arr[min] = swap
                    }
}
console.log(arr);

