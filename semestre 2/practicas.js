const prompt = require("prompt-sync")();

//1. Solicitar un número y determinar si es positivo, negativo o cero.
let numero = parseFloat(prompt("Ingrese un número: "));
if (numero > 0) {
  console.log("Positivo.");
} else if (numero == 0) {
  console.log("Es cero.");
} else {
  console.log("Negativo.");
}

//2. Pedir la edad de una persona y mostrar si es mayor o menor de edad.
let edad = parseInt(prompt("Ingrese su edad: "));
if (edad >= 18) {
  console.log("Es mayor.");
} else {
  console.log("Es menor.");
}

//3. Leer dos números y mostrar cuál es mayor o si son iguales.
let num1 = parseFloat(prompt("Ingrese el primer número: "));
let num2 = parseFloat(prompt("Ingrese el segundo número: "));
if (num1 > num2) {
  console.log("El mayor es el numero 1.");
} else if (num1 == num2) {
  console.log("Los números son iguales.");
} else {
  console.log("El mayor es el numero 2.");
}

//4.Ingresar un número y verificar si es par o impar.
let nume = parseInt(prompt("Ingrese un número: "));
if (nume % 2 == 0) {
  console.log("El numero es  par.");
} else {
  console.log("El numero es impar.");
}

//5. Solicitar una calificación (0-10) y mostrar si está aprobado o reprobado.
let calificacion = parseFloat(prompt("Ingrese la calificacion del estudiantes"));
if (calificacion >= 7) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

//6.Pedir un número del 1 al 7 y mostrar el día de la semana correspondiente.
let numero3 = parseInt(prompt("Ingrese un número del 1 al 7: "));
if (numero3 >= 1 && numero3 <= 7) {
  if (numero3 == 1) {
    console.log("Lunes");
  } else if (numero3 == 2) {
    console.log("Martes");
  } else if (numero3 == 3) {
    console.log("Miércoles");
  } else if (numero3 == 4) {
    console.log("Jueves");
  } else if (numero3 == 5) {
    console.log("Viernes");
  } else if (numero3 == 6) {
    console.log("Sábado");
  } else {
    console.log("Domingo");
  }
}

//7.Leer una temperatura y mostrar si hace frío, templado o calor.
let temperatura = parseFloat(prompt("Ingrese la temperatura: "));
if (temperatura < 15) {
  console.log("Hace frío.");
} else if (temperatura >= 15 && temperatura <= 25) {
  console.log("Esta templado.");
} else {
  console.log("Hace calor.");
}

//8.Pedir una contraseña y verificar si es correcta o incorrecta.
let contraseña = prompt("Ingrese la contraseña: ");
if(contraseña=="stefanibella"){
  console.log("La contraseña es correcta.");
}else{
  console.log("La contraseña es incorrecta.");
}

//9.Leer tres números y mostrar el mayor (usar if anidados).
let numero1 = parseFloat(prompt("Ingrese el primer número: "));
let nummero2 = parseFloat(prompt("Ingrese el segundo número: "));
let nummero3 = parseFloat(prompt("Ingrese el tercer número: "));
if(numero1>nume){
  if(numero1>numero3){
    console.log("El numero 1 es mayor");
  }else{
    console.log("El numero 3 es el mayor");
  }
}else {
  if(nummero2>nummero3){
  console.log("El numero 2 es el mayor");
}else{
  console.log("El numero 3 es el mayor");
}
}

//10. Solicitar el salario de un empleado y calcular el 10% de bono si gana más de $500.
let salario = parseFloat(prompt("Ingrese el salario del empleado: "));
if(salario>500){
  let bono = salario * 0.10;
  console.log("El bono es: $" + bono);
} else {
  console.log("No tiene bono el salario.");
}

//11. Mostrar los números del 1 al 10 usando for.
for(let i=1;i<=10;i++){
  console.log(i);
}

//12. Solicitar un número y mostrar su tabla de multiplicar.
let NUMERO = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar: "));
let R=0;
for (let i=1;i<=12;i++){
  R = NUMERO * i;
  console.log(NUMERO + " x " + i + " = " + R);
  
}
//13. Calcular la suma de los primeros N números usando un acumulador.
let N=parseInt(prompt("Ingrese la cantidad de numeros a sumar"));
let acu=0;
for(let i=1;i<=N;i++){
  let Nnum=parseInt(prompt("Ingrese un numero"));
  acu=acu+Nnum;
  console.log("La suma actual es: " + acu);
}

//14. Contar cuántos números pares hay entre 1 y 50.
let pares=0;
for (let i=1;i<=50;i++){
  if(i%2==0){
    pares=pares+1;
  }
}
  console.log("Hay "+pares+" pares.");


//15. Solicitar notas hasta que se ingrese -1 y calcular el promedio.
let prom = 0;
let acumulador = 0;
let contador = 0;

for (let i = 1; i <= 10000; i++) {
  let nota = parseInt(prompt("Ingrese la nota del estudiante (-1 para terminar): "));
  
  if (nota == -1) {
    break;
  }
  acumulador = acumulador + nota;
  contador = contador + 1;

}
if (contador > 0) {
  prom = acumulador / contador;
  console.log("El promedio es: " + prom);
} else {
  console.log("No se ingresaron notas.");
}

//16. Pedir números hasta que se ingrese un 0 (usar bandera).
let bandera = true;

while (bandera) {
  let NUM = parseInt(prompt("Ingrese un número (0 para terminar): "));
  
  if (NUM == 0) {
    bandera = false;
  }
}

//17. Leer 5 números y guardarlos en un array, luego mostrarlos.
let numerosArray = [];

for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt("Ingrese un número: "));
  numerosArray.push(numero);
}
console.log("Los números ingresados son:");
for (let i = 0; i < numerosArray.length; i++) {
  console.log(numerosArray[i]);
}

//18. Determinar el mayor número de un arreglo.
let mayor = numerosArray[0];
for (let i = 1; i < numerosArray.length; i++) {
  if (numerosArray[i] > mayor) {
    mayor = numerosArray[i];
  }
}
console.log("El mayor número es: " + mayor);

//19. Contar cuántos valores ingresados son positivos y negativos.
let positivos = 0;
let negativos = 0;
for (let i = 0; i < numerosArray.length; i++) {
  if (numerosArray[i] > 0) {
    positivos++;
  } else if (numerosArray[i] < 0) {
    negativos++;
  }
}
console.log("Hay " + positivos + " números positivos y " + negativos + " números negativos.");

//20. Simular un menú simple con opciones (1–Sumar, 2–Restar, 3–Salir).
let opcion = 0;
let bandera2 = true;

while (bandera2) {
  console.log("MENÚ");
  console.log("1. Sumar");
  console.log("2. Restar");
  console.log("3. Salir");

  opcion = parseInt(prompt("Elija una opción: "));

  if (opcion == 1) {
    let a = parseFloat(prompt("Ingrese el primer número: "));
    let b = parseFloat(prompt("Ingrese el segundo número: "));
    console.log("La suma es: " + (a + b));

  } else if (opcion == 2) {
    let a = parseFloat(prompt("Ingrese el primer número: "));
    let b = parseFloat(prompt("Ingrese el segundo número: "));
    console.log("La resta es: " + (a - b));

  } else if (opcion == 3) {
    console.log("Programa finalizado.");
    bandera2 = false;

  } else {
    console.log("Opción inválida");
  }
}


//21. Calcular el factorial de un número usando while.
let num = parseInt(prompt("Ingrese un número para calcular su factorial: "));
let factorial = 1;
let i = 1;

while (i <= num) {
  factorial = factorial * i;
  i++;
}
console.log("El factorial de " + num + " es: " + factorial);

//22. Generar los primeros N números pares.
let N2 = parseInt(prompt("Ingrese la cantidad de números pares a generar: "));
let contador2= 0;
let numeros= 2;

while (contador2 < N2) {
  console.log(numeros);
  numeros+= 2;
  contador2++;
}

//23. Solicitar números hasta que se ingrese uno repetido (usar array y bandera).
let array = [];
let bandera3 = true;

while (bandera3) {
  let numero = parseInt(prompt("Ingrese un número: "));
  if (array.includes(numero)) {
    console.log("El número " + numero + " ya fue ingresado.");
    bandera3 = false;
  } else {
    array.push(numero);
  }
}

//24. Registrar nombres y edades y mostrar solo los mayores de edad.
let nombres = [];
let edades = [];
let N1 = parseInt(prompt("Ingrese la cantidad de personas a registrar: "));
for (let i = 0; i < N1; i++) {
  let nombre = prompt("Ingrese el nombre:");
  let edad = parseInt(prompt("Ingrese la edad:"));

  nombres.push(nombre);
  edades.push(edad);
}

console.log("Mayores de edad:");
for (let i = 0; i < edades.length; i++) {
  if (edades[i] >= 18) {
    console.log(nombres[i] + " = " + edades[i] + " años");
  }
}
syn
//26. Simular una caja registradora con acumulador de ventas.
let totalVentas = 0;
let continuar = true;

while (continuar) {
  let precio = parseFloat(prompt("Ingrese el precio del producto (0 para terminar): "));
  if (precio == 0) {
    continuar = false;
  } else {
    totalVentas += precio;
  }
}
console.log("Total de ventas: $" + totalVentas);

//27. Leer productos y precios y calcular el total de compra.
let totalCompra = 0;
let continua = true;

while (continua) {
  let producto = prompt("Ingrese el nombre del producto (o 'fin' para terminar): ");
  if (producto === "fin") {
    continua = false;
  } else {
    let precio = parseFloat(prompt("Ingrese el precio del producto: "));
    totalCompra += precio;
  }
}
console.log("Total de la compra: $" + totalCompra);

//28. Contar vocales en una palabra ingresada.
let palabra = prompt("Ingrese una palabra: ");
let vocales = "aeiouAEIOU";
let contador1 = 0;

for (let i = 0; i < palabra.length; i++) {
  if (vocales.includes(palabra[i])) {
    contador1++;
  }
}
console.log("La palabra '" + palabra + "' tiene " + contador1 + " vocales.");

//29. Almacenar estudiantes en un diccionario (objeto) con nombre y nota, luego mostrar aprobados.
let estudiantes = {};
let cantidad = parseInt(prompt("¿Cuántos estudiantes desea ingresar?"));

for (let i = 0; i < cantidad; i++) {
  let nombre = prompt("Ingrese el nombre del estudiante:");
  let nota = parseFloat(prompt("Ingrese la nota:"));
  estudiantes[nombre] = nota;
}

console.log("Estudiantes aprobados:");
for (let nombre in estudiantes) {
  if (estudiantes[nombre] >= 7) {
    console.log(nombre + " /Nota: " + estudiantes[nombre]);
  }
}

//30. Simular un login con máximo 3 intentos usando bandera y contador.
let intentos = 0;
let bandera1 = true;

while (intentos < 3 && bandera1) {
  let usuario = prompt("Ingrese el nombre de usuario:");
  let contraseña = prompt("Ingrese la contraseña:");

  if (usuario === "Mivida123" && contraseña === "12345") {
    console.log("Login exitoso.");
    bandera1 = false;
  } else {
    intentos++;
    console.log("Intento fallido. Intentos restantes: " + (3 - intentos));
  }
}

if (intentos >= 3 && bandera1) {
  console.log("Acceso denegado.");
}