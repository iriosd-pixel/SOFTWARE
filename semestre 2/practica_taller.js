// //Crear una función que cuente cuántas letras "e" tiene una palabra.
// function contar(palabra){
//     let con=0;
//     for(let i=0; i<palabra.length; i++){
//         if (palabra[i]=="e"){
//             con++;
//         }
//     }
//     return con;
// }
// console.log(contar("elefante"));

// //contar consonantes
// const consonantes=(palabra)=>{
//     let con1=0;
//     let vocales=["a", "e", "i", "o", "u"]
//     for(let i=0; i<palabra.length; i++){
//         if (!vocales.includes(palabra[i])){
//             con1++;
//         }
//     }
//     return con1;
// }
// console.log(consonantes("holla"))

// //sumar arreglo
// const suma=(arreglos)=>{
//     let suma=0;
//     for(let i=0; i<arreglos.length;i++){
//         suma+=arreglos[i]
//     }
//     return suma;
// }
// console.log(suma([5,10,15]))

// //sumar los nuemro pares del arreglo
// const sumar=(arreglos)=>{
//     let sumarr=0;
//     for(let i=0; i<arreglos.length;i++){
//         if(arreglos[i]%2!=0){
//             sumarr+=arreglos[i]
//         }
//     }
//     return sumarr;
// }
// console.log(sumar([7,10,15,10]))

// //multiplicar por 5
// let numeros=[1,2,3,4,5,6]
// const multi= numeros.map(n=>n*5)
// console.log(multi)

// //Obtener números mayores a 20
// const mayores=(numeros)=>{
//     let nueva_lista=[];
//     for(let i=0; i<numeros.length;i++){
//         if(numeros[i]>20){
//             nueva_lista.push(numeros[i]);
//         }
//     }
//     return nueva_lista;
// }
// console.log(mayores([10,25,30,5,18]))

// //obtenr numeros impares
// const impares=(numeros)=>{
//     let lista_impares=[]
//     for(let i=0; i<numeros.length;i++){
//         if(numeros[i]%2===0){
//             lista_impares.push(numeros[i]);
//         }
//     }
//     return lista_impares;
// }
// console.log(impares([1,2,3,4,5,6]))

// //Buscar una letra
// const buscar=(palabra, letra)=>{
//     let encontrada=false
//     for(let i=0; i<palabra.length; i++){
//         if(palabra[i]===letra){
//             encontrada=true
//         }
//     }
//     return encontrada
// }
// console.log(buscar("java script", "o"))

// //Convertir a mayúsculas
// const mayúsculas=(palabra)=>{
//     return palabra.toUpperCase(); 
// }
// console.log(mayúsculas("hola"))

// //convertir a minuscula
// const minuscula=(palabra)=>{
//     return palabra.toLowerCase(); 
// }
// console.log(minuscula("HOLA"))

// //Obtener nombres con más de 4 letras
// const letras=(palabras)=>{
//     let palabras_grandes=[]
//     for(let i=0; i<palabras.length;i++){
//         if(palabras[i].length>4){
//             palabras_grandes.push(palabras[i])
//         }
//     }
//     return palabras_grandes
// }
// console.log(letras(["Ana","Fernando","Luis","Carlos"]))

// //Cantidad de palabras
const cantidad=(palabras)=>{
    let con2=0
    for(let i=0; i<palabras.length;i++){
        con2++
    }
    return con2
}
console.log(cantidad(["Hola","Mundo","Javascript"]))

// //Total de letras
// const total_letras=(palabras)=>{
//     let suma_letras=0
//     for(let i=0; i<palabras.length;i++){
//         suma_letras+=palabras[i].length
//     }
//     return suma_letras
// }
// console.log(total_letras(["Hola","Sol"]))

// //Encontrar el número más grande
const numero_mayor=(numeros1)=>{
    return {
        maximo: Math.max(...numeros1),
        minimo: Math.min(...numeros1)
    }
}
console.log(numero_mayor([5,8,20,3,10]))

// //Encontrar el número más grande
const numeros_mayores=(numeros)=>{
    let mayor=numeros[0]
     for(let i=0; i<numeros.length;i++){
        if(numeros[i]<mayor){
            mayor=numeros[i]
        }
     }
     return mayor
}
console.log(numeros_mayores([5,30,20,3,10]))

function libro(titulo, autor, año){
    this.titulo=titulo
    this.autor=autor
    this.año=año
}
let libro1= new libro("java", "Socrates", 1500)
let libro2= new libro("filosofia", "Platon", 500)
console.log(libro1)

 let libros=[libro1, libro2]

// //total de precios
const suma_años=(libros)=>{
    let suma=0
    for(let i=0; i<libros.length; i++){
        suma+=libros[i].año
    }
    return suma
}
console.log(suma_años(libros))

// const sumas_años=(libros)=>{
//     let sumas=[]
//     for(let clave in libros){
//         sumas.push(libros[clave].titulo)
//     }
//     return sumas
// }
// console.log(sumas_años(libros))

// //diccionario
let estudiantes=[
 {nombre:"Ana", nota:8},
 {nombre:"Luis", nota:5},
 {nombre:"Pedro", nota:10},
 {nombre:"Maria", nota:4}
]

const aprobados=(estudiantess)=>{
    let lista_aporbados=[]
    let suma=0
    let promedio=0
    for(let clave in estudiantess){
        if (estudiantess[clave].nota>7){
            lista_aporbados.push(estudiantess[clave])
            suma+=estudiantess[clave].nota
        }
    }
    promedio=suma/lista_aporbados.length
    return {
    lista_aporbados,
    suma,
    promedio
}
}
console.log(aprobados(estudiantes))


// //filter() - Obtener pares
// let numeros1 = [1,2,3,4,5,6,7,8,10,11,12,13,14,15,16];
// const n_pares=numeros1.filter(n=>n%2!=0)
// console.log(n_pares)

// //mayores que 10
// const m=numeros1.filter(n=>n>10)
// console.log(m)

//filter() - Nombres largos
// let nombres = ["Ana","Fernando","Luis","Gabriela"];
// const n_largos=nombres.filter(n=>n.length>4)
// console.log(n_largos)

// //minuscula
// const minusculaa = nombres.map(n => n.toLocaleUpperCase())
// console.log(minusculaa);

// //mayuscula
// const mayusculas = nombres.map(n => n.toLocaleLowerCase())
// console.log(mayusculas);

// //2. find() → primer celular con precio mayor a 500
// const encontrado = celulares.find(
//     celular => celular.precio > 500
// );

// console.log(encontrado);

// //3. some() → ¿Existe algún celular menor a 400?
// const existe = celulares.some(
//     celular => celular.precio < 400
// );

// console.log(existe);

// //4. every() → ¿Todos cuestan más de 200?
// const todos = celulares.every(
//     celular => celular.precio > 200
// );

// console.log(todos);


//TALLER
//1. Diseñe una función flecha que reciba 2 parámetros y devuelva el promedio.
// const promedio=(numero1, numero2)=>{
//     return (numero1+numero2)/2
// }
// console.log(promedio(8, 10))

// //2. Diseñe una función constructora Libro (título, año publicación) e instancie 2 objetos.
// function libro (titulo, año_publicación){
//     this.titulo=titulo
//     this.año_publicación=año_publicación
// }
// let libro11= new libro('algebra lineal', 2000)
// let libro22= new libro('El arte de la muerte', 0)
// console.log(libro11)
// console.log(libro22)

// Ejercicio 1 (Muy difícil)
// Sistema de biblioteca

// Cree una función constructora llamada Libro con las siguientes propiedades:

// título
// autor
// año
// páginas
// precio

// Instancie 6 libros y guárdelos en un arreglo.

// Luego realice las siguientes funciones:

// Mostrar únicamente los libros publicados después del 2018.
// Calcular el precio total de todos los libros.
// Obtener el promedio de páginas.
// Buscar un libro por su título.
// Verificar con some() si existe un libro que cueste más de $50.
// Verificar con every() si todos los libros tienen más de 100 páginas.
// Obtener únicamente los títulos usando map().

// const prompt = require("prompt-sync")();

// let buscar_libro = prompt("Ingrese el nombre del libro: ")

// function biblioteca (titulo, autor, año, paginas, precio){
//     this.titulo=titulo
//     this.autor=autor
//     this.año=año
//     this.paginas=paginas
//     this.precio=precio
// }
// let libro1= new biblioteca('Azteca', 'Platon', 2000, 500, 50.65 )
// let libro2= new biblioteca('hola', 'google', 1000, 250, 25 )
// let libro3= new biblioteca('algebra', 'socrates', 1999, 280, 150 )
// let libro4= new biblioteca('tecnicas', 'guevara', 1988, 200, 55 )
// let libro5= new biblioteca('amor', 'ismael', 2023, 1000, 1500 )
// let libro6= new biblioteca('ir al cielo', 'Dios', 0, 1000, 0 )

// let bibliotecas=[libro1, libro2, libro3, libro4, libro5, libro6]

// const operaciones=(bibliotecas,buscar_libro)=>{
//     let lista_libros_2018=[]
//     let precio_libros=0
//     let promedio_paginas=0
//     let titulos=""
//     let con=0
//     let bandera=false
//     for(let j=0; j<bibliotecas.length; j++){
//         con++
//             if( bibliotecas[j]['año']>2018){
//                 lista_libros_2018.push(bibliotecas[j])
//             }
//             precio_libros+=bibliotecas[j]['precio']
//             promedio_paginas+=bibliotecas[j]['paginas']
//             if(bibliotecas[j]['titulo']== buscar_libro){
//             bandera=true
//         }
//         }
//         promedio_paginas=promedio_paginas/con
//     return{
//         lista_libros_2018,
//         precio_libros,
//         promedio_paginas,
//         bandera
//     }
// }
// const titulos_libros=(bibliotecas)=> bibliotecas.map(libros=> libros.titulo); 
// console.log(titulos_libros(bibliotecas))
// console.log(operaciones(bibliotecas, buscar_libro))
// const existe = bibliotecas.some(
//     libros => libros.precio >50
// );

// console.log(existe);

// const todos = bibliotecas.every(
//     libros => libros.paginas > 100
// );

// console.log(todos);

//foreach
// [1,2,3,4,5,6,7,8,9].forEach(n=> {
//     console.log(n);
// });
// ["hola", "hello", "hi"].forEach(n1=> {
//     console.log(n1);
// });
// let letras=["hola", "hello", "hi"]
// //map()
// const s= letras.map(n=> {
//      return n.toLocaleUpperCase();
//     });
// console.log(s);

// letras.forEach(n=>{
//     if (n.length>2){
//         console.log(n)
//     }
// })

function producto (nombre, categoria, precio, stock){
    this.nombre=nombre
    this.categoria=categoria
    this.precio=precio
    this.stock=stock
}
let producto1= new producto ('celular', 'digital', 200, 50)
let producto2= new producto ('laptop', 'digital', 900, 25)
let producto3= new producto ('tablet', 'digital', 400, 150)
let producto4= new producto ('impresora', 'digital', 450, 60)

let lista_productos=[producto1, producto2, producto3, producto4]

lista_productos.forEach(n=>{
    console.log(n.nombre)
});

const lista_productos_2=lista_productos.map(n=> {
    return n.nombre}
);
console.log(lista_productos_2);

const lista_precios=lista_productos.filter(n=> n.precio>200);
console.log(lista_precios)

const total_stock=(lista_productos)=>{
let sub_total=0
let total=0
for( let i=0; i<lista_productos.length; i++){
     sub_total=lista_productos[i].precio*lista_productos[i].stock
     total+= sub_total
}
return total
}
console.log(total_stock(lista_productos))