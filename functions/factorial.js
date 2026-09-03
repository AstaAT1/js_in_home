function factorial(x) {
    let factorial = 1
    for (let i = 1;  i <= x; i++) {
     factorial = i * factorial
    }
    return factorial
}
console.log(factorial(5))