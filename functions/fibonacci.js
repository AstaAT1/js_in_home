function fibonacci(x) {
    let a = 0 ; b=1
    let fibonacci = 0
    for (let i = 1; i < x; i++) {
    fibonacci = a + b
    a = b
    b = fibonacci
    }
    return fibonacci
}
console.log(`F(10) = ${fibonacci(10)}`)