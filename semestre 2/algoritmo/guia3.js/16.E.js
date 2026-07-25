function invertirNumeroarre() {
    let n= [123, 456, 780]
  let invertido = 0, numero=0, digito=0;
    for (let j = 0; j < n.length; j++) {
    numero = n[j];
  invertido = 0;
  while (numero > 0) {
     digito = numero % 10;
    invertido = invertido * 10 + digito;
    numero = Math.floor(numero / 10);
  }
  console.log(n[j], "→", invertido);
}
}