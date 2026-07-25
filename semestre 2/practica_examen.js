const prompt = require("prompt-sync")();
// // Ejercicio 1. Presentación personal
// // Crea una función flecha que reciba:
// // Nombre
// // Edad
// // Ciudad
// // Debe retornar un mensaje como:

// const presentacion=(nombre, edad, ciudad)=>{
//     return "Mi nombre es "+nombre+" tengo "+edad+" años y vivo en "+ ciudad
// }
// let nombre= prompt("Ingrese su nombre: ")
// let edad= Number(prompt("Ingrese la edad: "))
// let ciudad= prompt("Ingrese el nombre la ciudad donde vive: ")
// console.log(presentacion(nombre, edad, ciudad))

// // Ejercicio 2. Información de una palabra
// // Solicita una palabra y muestra:
// // La cantidad de letras.
// // La palabra en mayúsculas.
// // La palabra en minúsculas.
// // Las primeras tres letras usando slice().

// const informacion_palabra=(palabra)=>{
//     console.log("Minuscula", palabra.toLowerCase())
//     console.log("Mayuscula", palabra.toUpperCase())
//     console.log("Cantidad de letras", palabra.length)
//     console.log("Primeras 3 palabras", palabra.slice(0, 3))
// }
// let palabra= prompt("Ingrese la palabra: ")
// informacion_palabra(palabra)

// // Ejercicio 3. Contar una letra
// // Crea una función llamada contar_letra() que reciba:
// // Una palabra.
// // Una letra que se desea buscar.
// // Debe recorrer la palabra con un for y contar cuántas veces aparece la letra, sin importar si está en mayúscula o minúscula.

// function contar_letra(palabras, buscar_palabra){
//     let nueva_palabra=palabras.toLowerCase()
//     let nueva_buscar_palabra= buscar_palabra.toLowerCase()
//     let contador=0
//     for (let i=0; i<nueva_palabra.length; i++){
//         if( nueva_palabra[i]==nueva_buscar_palabra){
//             contador++
//         }
//     }
//     return contador
// }
// let palabras= prompt("Ingrese la palabra: ")
// let buscar_palabra= prompt("Ingrese la letra qe desea buscar: ")
// let cantidad = contar_letra(palabras, buscar_palabra)
// console.log(`la palabra se ha repetido ${cantidad} veces`)

// // Crea una función flecha que reciba una palabra y devuelva:
// // {
// //     vocales: 4,
// //     consonantes: 3
// // }
// // Debes:
// // Recorrer la palabra.
// // Usar un arreglo de vocales.
// // Utilizar includes().
// // No contar espacios.

// const contar_vocales_consonantes=(palabras)=>{
//     let nueva_palabra_saber=palabras.toLowerCase();
//     let vocales=["a","e","i","o","u"];
//     let cantidad_vocales=0
//     let cantidad_consonnates=0
//     for(let i=0; i<nueva_palabra_saber.length; i++){
//         let letra= nueva_palabra_saber[i]
//         if(vocales.includes(letra)){
//             cantidad_vocales++
//         }else if(letra !==" "){
//             cantidad_consonnates++
//         }
//     }
//     return{
//         cantidad_vocales,
//         cantidad_consonnates
//     }
// }
// let palabra_saber= prompt("Ingrese la palabra de que desea saber las vocales y consonantes: ")
// console.log(contar_vocales_consonantes(palabra_saber))

// // Crea una función flecha que reciba cuatro calificaciones y calcule el promedio.
// // Después clasifica el resultado:
// // De 9 a 10: Excelente.
// // De 7 a 8.99: Aprobado.
// // De 5 a 6.99: Recuperación.
// // Menor de 5: Reprobado.

// const promedio_calificaciones = (n1, n2, n3, n4) => {
//     let promedio = (n1 + n2 + n3 + n4) / 4;
//     let clasificacion;

//     if (promedio >= 9 && promedio <= 10) {
//         clasificacion = "Excelente";
//     } else if (promedio >= 7 && promedio < 9) {
//         clasificacion = "Aprobado";
//     } else if (promedio >= 5 && promedio < 7) {
//         clasificacion = "Recuperación";
//     } else {
//         clasificacion = "Reprobado";
//     }

//     return {
//         promedio,
//         clasificacion
//     };
// };
// let n1 = parseFloat(prompt("Ingrese la primera calificación: "));
// let n2 = parseFloat(prompt("Ingrese la segunda calificación: "));
// let n3 = parseFloat(prompt("Ingrese la tercera calificación: "));
// let n4 = parseFloat(prompt("Ingrese la cuarta calificación: "));

// let resultado = promedio_calificaciones(n1, n2, n3, n4);

// console.log("El promedio es: " + resultado.promedio.toFixed(2));
// console.log("Clasificación: " + resultado.clasificacion);

// // Ejercicio 6. Sumar números de un arreglo
// // Crea el siguiente arreglo:
// // let numeros = [10, 5, 8, 20, 7];
// // Crea una función que:
// // Recorra el arreglo con for.
// // Sume todos los números.
// // Retorne el total.
// // Resultado esperado: 
// let numeros = [10, 5, 8, 20, 7];
// function suma_arreglo(valores){
//     let suma=0
//     for(let i=0; i<valores.length; i++){
//         suma+=valores[i]
//     }
//     return suma
// }
// let total_suma=suma_arreglo(numeros)
// console.log("La suma es: "+total_suma)


// // Ejercicio 7. Separar pares e impares
// // Crea una función que reciba un arreglo de números y retorne:
// // {
// //     pares: [],
// //     impares: []
// // }
// // Debes utilizar:
// // Un ciclo for.
// // El operador %.
// // El método push().
// // Pruébala con:
// // [3, 8, 10, 7, 15, 20]

// let valores= [3, 8, 10, 7, 15, 20]
// function pares_impares(numeros){
//     let pares=[]
//     let impares=[]
//     for(let i=0; i<numeros.length; i++){
//         if(numeros[i]%2===0){
//             pares.push(numeros[i])
//         }else{
//             impares.push(numeros[i])
//         }
//     }
//     return {
//         pares: pares,
//         impares: impares
//     }
// }
// console.log(pares_impares(valores))

// // Ejercicio 8. Multiplicar con map()
// // Crea un arreglo con seis números.
// // Usa map() para obtener:
// // Un arreglo con todos los números multiplicados por 2.
// // Otro arreglo con todos los números multiplicados por 5.

// let originales=[1,2,3,4,5,6]
// const pordos= originales.map(numero=> numero*2)
// const porcinco=originales.map(numeros=>numeros*5)
// console.log("original: "+ originales)
// console.log("multiplicados x2: "+pordos)
// console.log("multiplicados x5: "+porcinco)

// // Ejercicio 9. Número mayor y menor
// // Crea una función que reciba un arreglo de números y encuentre:
// // El número mayor.
// // El número menor.
// // Debes hacerlo con un ciclo for, sin utilizar Math.max() ni Math.min().
// let numeros_max_min= [3, 8, 10, 7, 15, 20]
// function mayor_menor(numeros){
//     let numero_mayor=numeros_max_min[0]
//     let numero_menor=numeros_max_min[0]
//     for(let i=0; i<numeros.length; i++){
//         if(numeros[i]>numero_mayor){
//             numero_mayor=numeros[i]
//         }
//         if(numeros[i]<numero_menor){
//             numero_menor=numeros[i]
//         }
//     }
//     return{
//         numero_mayor,
//         numero_menor
//     }
// }
// console.log(mayor_menor(numeros_max_min))

// // Ejercicio 10. Procesar nombres
// // Usa este arreglo:
// // let nombres = ["Ana", "Fernando", "Luis", "Gabriela", "Ismael"];
// // Realiza:
// // Usa filter() para obtener nombres con más de 5 letras.
// // Usa map() para convertir todos los nombres a mayúsculas.

// let nombres = ["Ana", "Fernando", "Luis", "Gabriela", "Ismael"];
// const nombres_mayores=nombres.filter(nombre=>nombre.length>5)
// console.log(nombres_mayores)
// const nombres_mayuscula= nombres.map(nombre=>nombre.toUpperCase())
// console.log(nombres_mayuscula)

// // Ejercicio 11. Calificaciones
// // Usa este arreglo:
// // let notas = [10, 5, 8, 6, 9, 4];
// // Realiza:
// // Usa filter() para obtener las notas aprobadas, mayores o iguales a 7.
// // Usa map() para aumentar un punto a cada nota.
// // Muestra los resultados.

// let notas = [10, 5, 8, 6, 9, 4];
// const notas_aprobadas=notas.filter(nota=>nota>=7)
// console.log("Notas aprobadas: "+notas_aprobadas)
// const punto_extra=notas.map(nota=>{
//     if(nota<10){
//     return nota+1
//     }else{
//     return nota
//     }
// })
// console.log("NOtas con punto extra: "+punto_extra)


// // Ejercicio 12. Películas
// // Crea una función constructora Pelicula con:
// // titulo
// // genero
// // año
// // disponible
// // Crea cuatro películas y guárdalas en un arreglo.
// // Después:
// // Usa filter() para obtener las películas disponibles.
// // Usa map() para obtener únicamente los títulos.
// // Presenta los resultados con un for.

// function peliculas(titulo, genero, año, disponible){
//     this.titulo=titulo
//     this.genero=genero
//     this.año=año
//     this.disponible=disponible
// }

// let pelicula1= new peliculas('Avengers', 'accion', 2000, 'si')
// let pelicula2= new peliculas('vengadores', 'accion', 2015, 'no')
// let pelicula3= new peliculas('marbel', 'drama', 2025, 'si')
// let pelicula4= new peliculas('spiderman', 'accion', 2006, 'no')
// let catalogo=[pelicula1, pelicula2, pelicula3, pelicula4]

// for(let i=0; i<catalogo.length;i++){
//     console.log(
//         catalogo[i].titulo,
//         catalogo[i].genero,
//         catalogo[i].año,
//         catalogo[i].disponible
//     )
// }
// const peliculas_disponibles=catalogo.filter(pelicula=>pelicula.disponible=="si")
// console.log(peliculas_disponibles)
// const titulos_peliculas= catalogo.map(pelicula=>pelicula.titulo)
// console.log(titulos_peliculas)

// // Ejercicio 13. Habitaciones
// // Crea una función constructora Habitacion con:
// // numero
// // tipo
// // precio
// // disponible
// // Crea cinco habitaciones.
// // Realiza:
// // Usa filter() para obtener las habitaciones disponibles.
// // Usa filter() para obtener habitaciones menores de $80.
// // Usa map() para obtener solamente los números de habitación.
// // Presenta los resultados.

// function Habitacion(numero, tipo, precio, disponible){
//     this.numero=numero
//     this.tipo=tipo
//     this.precio=precio
//     this.disponible=disponible
// }
// let habitacion1= new Habitacion(200, 'suit', 150, 'si')
// let habitacion2= new Habitacion(100, 'normal', 40, 'si')
// let habitacion3= new Habitacion(50, 'vip', 160, 'no')
// let habitacion4= new Habitacion(23, 'normal', 30, 'si')

// let habitaciones=[habitacion1, habitacion2, habitacion3, habitacion4]

// const habitaciones_disponibles=habitaciones.filter(habitacion=>habitacion.disponible=="si")
// //console.log("las habitaciones disponibles son: ", habitaciones_disponibles)

// const habitaciones_baratas=habitaciones.filter(habitacion=>habitacion.precio<=80)
// //console.log("las habitaciones baratas son: ", habitaciones_baratas)

// const numero_habitacion= habitaciones.map(habitacion=>habitacion.numero)
// //console.log("numero de habitaciones: ", numero_habitacion)
// console.log("\n---HABITACIONES DISPONIBLE---")
// for (let i = 0; i < habitaciones_disponibles.length; i++) {
//     console.log(
//         "Número: " + habitaciones_disponibles[i].numero +
//         " | Tipo: " + habitaciones_disponibles[i].tipo +
//         " | Precio: $" + habitaciones_disponibles[i].precio
//     );
// }
// console.log("\n---HABITACIONES BARATAS---")
// for(let i=0; i<habitaciones_baratas.length; i++){
//     console.log(
//         "numero"+ habitaciones_baratas[i].numero+
//         "| Tipo"+ habitaciones_baratas[i].tipo+
//         "| precio: $"+habitaciones_baratas[i].precio
//     )
// }
// console.log("\n--- NUMEROS DE HABITACIONES ---")
// for(let i=0; i<numero_habitacion.length; i++){
//     console.log(
//         "Numero: "+ numero_habitacion[i]
//     )
// }

// // Ejercicio 14. Celulares
// // Ejercicio 14. Celulares

// // Crea una función constructora Celular con:

// // marca
// // modelo
// // precio
// // stock

// // Crea cinco celulares.

// // Realiza:

// // Usa filter() para obtener celulares menores de $500.
// // Usa filter() para obtener celulares con stock mayor que 0.
// // Usa map() para crear un arreglo con marca y modelo.
// // Usa map() para calcular el valor total de cada celular:

// function Celular(marca, modelo, precio, stock) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.precio = precio;
//     this.stock = stock;
// }

// let celular1 = new Celular("Samsung", "Galaxy A55", 450, 5);
// let celular2 = new Celular("Apple", "iPhone 15", 950, 3);
// let celular3 = new Celular("Xiaomi", "Redmi Note 13", 280, 8);
// let celular4 = new Celular("Motorola", "Moto G84", 320, 0);
// let celular5 = new Celular("Huawei", "Nova 12", 600, 4);

// let celulares = [
//     celular1,
//     celular2,
//     celular3,
//     celular4,
//     celular5
// ];

// // Celulares menores de $500
// const celulares_baratos = celulares.filter(
//     celular => celular.precio < 500
// );

// console.log("---- CELULARES MENORES DE $500 ----");

// for (let i = 0; i < celulares_baratos.length; i++) {
//     console.log(
//         "Marca: " + celulares_baratos[i].marca +
//         " | Modelo: " + celulares_baratos[i].modelo +
//         " | Precio: $" + celulares_baratos[i].precio
//     );
// }

// // Celulares con stock mayor que 0
// const stock_celulares = celulares.filter(
//     celular => celular.stock > 0
// );

// console.log("\n---- CELULARES CON STOCK ----");

// for (let i = 0; i < stock_celulares.length; i++) {
//     console.log(
//         "Marca: " + stock_celulares[i].marca +
//         " | Modelo: " + stock_celulares[i].modelo +
//         " | Stock: " + stock_celulares[i].stock
//     );
// }

// // Marcas y modelos
// const presentar_celulares = celulares.map(
//     celular => celular.marca + " -- " + celular.modelo
// );

// console.log("\n---- MARCAS Y MODELOS DE CELULARES ----");

// for (let i = 0; i < presentar_celulares.length; i++) {
//     console.log(presentar_celulares[i]);
// }

// // Valor total de cada celular
// const total_dinero = celulares.map(
//     celular => celular.precio * celular.stock
// );

// console.log("\n---- VALOR TOTAL DE CADA CELULAR ----");

// for (let i = 0; i < celulares.length; i++) {
//     console.log(
//         "Teléfono " + (i + 1) +
//         " | " + celulares[i].marca +
//         " " + celulares[i].modelo +
//         " | Total: $" + total_dinero[i]
//     );
// }


// // Ejercicio 15. Estudiantes

// // Crea una función constructora Estudiante con:

// // nombre
// // nota
// // asistencia

// // Crea cinco estudiantes.

// // Realiza:

// // Usa filter() para obtener estudiantes con nota mayor o igual a 7.
// // Usa filter() para obtener estudiantes con asistencia mayor o igual al 80%.
// // Usa map() para obtener únicamente sus nombres.
// // Usa map() para crear mensajes como:

// function Estudiantes(nombre, nota, asistencia){
//   this.nombre=nombre
//   this.nota=nota
//   this.asistencia=asistencia
// }
// let estudiante1= new Estudiantes('Ismael', 10, 90)
// let estudiante2= new Estudiantes('Elkin', 9, 60)
// let estudiante3= new Estudiantes('Ismael', 8, 100)
// let estudiante4= new Estudiantes('Ismael', 4, 40)

// let todos_estudiantes=[estudiante1, estudiante2, estudiante3, estudiante4]
// const estudiantes_aprobados= todos_estudiantes.filter(estudiante=>estudiante.nota>=7)
// console.log("-----ESTUDIANTES APROBADOS-----")
// for(let i=0; i<estudiantes_aprobados.length; i++){
//   console.log(
//     "nombre estudiante "+(i+1)+": "+ estudiantes_aprobados[i].nombre, "Nota: ", estudiantes_aprobados[i].nota
//   )
// }

// const mayor_asistencia= todos_estudiantes.filter(estudiante=>estudiante.asistencia>=80)
// console.log("\n--------MAYOR ASISTENCIA--------")
// for(let i=0; i<mayor_asistencia.length; i++){
//   console.log(
//     "nombre estudiante "+(i+1)+": "+ mayor_asistencia[i].nombre, "Asistencia: ", mayor_asistencia[i].asistencia
//   );
// }

// const nombre_estudiantes= todos_estudiantes.map(estudiante=>estudiante.nombre)
// console.log("\n------MENSAJES PARA LOS ESTUDIANTES-------")

//   let mensaje=""
// for(let i=0; i<todos_estudiantes.length; i++){
//   if(todos_estudiantes[i].nota>=9){
//     mensaje="Tiene una excelente calificacion de 9 o 10"
//   }else if(todos_estudiantes[i].nota>=7 && todos_estudiantes[i].nota<9){
//     mensaje="tiene una calificacion buena de 7 o 8"
//   }else if(todos_estudiantes[i].nota>=5 && todos_estudiantes[i].nota<7){
//     mensaje="usted ha ido a recuperacion con una calificacion de 5 o 6"
//   }else if(todos_estudiantes[i].nota>=0 && todos_estudiantes[i].nota<5){
//     mensaje="usted ha reprobado"
//   }else{
//     mensaje="La nota ingresada no es valida"
//   }
  
//     console.log(
//   "nombre estudiante "+(i+1)+": "+ todos_estudiantes[i].nombre+
//     " | Nota estudiante: "+ todos_estudiantes[i].nota+
//     " | Mensaje para el estudiante: "+ mensaje
//   )
// }


function numero_mayor(a,b,c){
    let mayor=a
    for(let i=0; i<3; i++){
        if(b>mayor){
            mayor=b
        }else if(c>mayor){
            mayor=c
        }
    }
    return mayor
}
console.log("el numero mayor es: "+numero_mayor(9,10,11))