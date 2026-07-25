function fibonacciSeriearre() {
let n_valores = [5, 8, 10];
for (let j = 0; j < n_valores.length; j++) {
    let n = n_valores[j];
    let a = 0, b = 1, c = 0;
    let serie = [a, b]; 
    for (let i = 3; i <= n; i++) {
        c = a + b;
        serie.push(c);
        a = b;
        b = c;
    }
    console.log(`Fibonacci(${n}): ${serie.join(", ")}`);
}
}