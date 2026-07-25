function serieFibonacci() {
  let n = parseInt(prompt("Ingrese la cantidad de términos de la serie Fibonacci que desea ver:")); 
  let a = 0, b = 1, c=0;
  console.log(a);
  console.log(b);
  for (let i = 3; i <= n; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}