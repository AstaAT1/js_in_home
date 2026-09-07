function quick(arr) {
      if (arr.length <= 1) {
        return arr
      }
    let pivot = arr.length - 1
    let left = []
    let right = []
    for (let i = 0; i < arr.length -1; i++) {
       if (arr[i] < arr[pivot]) {
        left.push(arr[i])
    }
    else{
        right.push(arr[i])
    } 
    }
    let sortedLeft = quick(left)
    let sortedRight = quick(right)
    return [...sortedLeft, arr[pivot], ...sortedRight]  
    quick(left)
    quick(right)
    
}
let arr = [5, 2, 9, 3, 7]

console.log(quick(arr))