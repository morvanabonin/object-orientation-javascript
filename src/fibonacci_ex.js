/**
class Fibonacci() {

    constructor() {}

    fibo(n) {
        return (n < 2) ? n : fibonacci(n - 1) + fibonacci(n - 2);
    }

}
let n;
let fibonacci = new Fibonacci();
console.log(fibonacci.fibo(8));
*/

function fibonacci(n) {
    return (n < 2) ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

let n;
console.log(fibonacci(8));
console.log(fibonacci(8));

function fibonacci(n) {
    let previous = 0;
    let current = 1;

    for(let i = 0; i < n; i += 1) {
        let temp = previous;
        previous = current;
        current = temp + current;
    }

    return current;
}

console.log(fibonacci(8));