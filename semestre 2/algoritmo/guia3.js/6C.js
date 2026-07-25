function invertirNumero() {
    let numero = parseInt(prompt("Ingrese un número para invertirlo:"));
  let invertido = 0;
  while (numero > 0) {
     digito = numero % 10;
    invertido = invertido * 10 + digito;
    numero = Math.floor(numero / 10);
  }
  console.log("Número invertido:", invertido);
}