function isOdd(x) {
    if (x % 2 === 0) {
        return false
    } else {
        return true
    }
}
if (isOdd(6)) {
    console.log("this number is odd")
} else {
    console.log("this number is even")
}