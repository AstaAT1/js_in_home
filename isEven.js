function isEven(x) {
    if (x % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
if (isEven(6)) {
    console.log("this number is even");
} else {
    console.log("this number is odd");
}