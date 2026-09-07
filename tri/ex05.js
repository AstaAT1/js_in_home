function split(arr) {
     if (arr.length <= 1) {
        return arr
      }
    let middle = parseInt(arr.length / 2)
 let left = []
 let right = []
 for (let i = 0; i < middle; i++) {
    left.push(arr[i])
    
 }
 for (let i = middle; i < arr.length; i++) {
    right.push(arr[i])
    
 }
  let sortedLeft = split(left)
    let sortedRight = split(right)
 return [sortedLeft , sortedRight]
}
function merge(arr1 , arr2) {
    let result = []
    let i 
    let j 
    for ( i = 0;i < arr1.length; i++) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i])
      }
    }
      for ( j = 0; j < arr2.length; j++) {
           if (arr1[i] > arr2[j]) {
            result.push(arr2[j])
           }
        }
}

 let arr = [34, 12, 5, 9, 42, 1]
console.log(split(arr));


//  let arr1 = []
//   for (let i = 0; i < arr.length; i += size) {
//     let arr2 = []
//     for (let j = i; j < i + size && j < arr.length; j++) {
//       arr2.push(arr[j])
//     }
//     arr1.push(arr2)
//   }
//   return arr1