// // const prompt = require("prompt-sync")();

// // let nombre = prompt("Ingresa tu nombre: ");
// // let edad = parseInt(prompt("Ingresa tu edad: "));
// // let ciudad = prompt("Ingresa tu ciudad: ");
// // console.log(`Hola mi nombre es ${nombre}, tengo ${edad} años y vivo en la ciudad de ${ciudad}`);

// // let numero1 = parseInt(prompt("Ingresa el primer número: "));
// // let numero2 = parseInt(prompt("Ingresa el segundo número: "));
// // let suma = numero1 + numero2;
// // console.log(`La suma es: ${suma}`);

// // let a = "pedro";
// // let b = 5;
// // console.log(a + b);

// // let d;
// // console.log(d + 2);

// // let carrera = prompt("Ingresa tu carrera: ");
// // console.log(carrera.toUpperCase());

// // let g = 10;
// // let k = "10";
// // console.log(g === k);

// // let o = 9;
// // console.log(o % 2 == 0);

// // let x = 5;
// // let y = 15;
// // let z = 50;

// // x = y;
// // x = y = z;

// // console.log(y);


// //lengitud de texto
// let apellido= "Rios duarte"
// console.log(apellido.length)

// //minusculas
// let minus= "ABCDEFGHI"
// console.log(minus.toLowerCase() )

// //elimina espacios
// let espacios= "I S M A E L"
// console.log(espacios.trim())

// //buscar 
// let frase=" hola como estas "
// let busca="hola"
// console.log (frase.includes(busca))

// //corta parte del texto
// let crta= "que hay"
// let frs="hola que hay"
// console.log(frs.slice(5))

// //reemplzar texto
// let reem= "hello"
// let texto=" hola como estas"
// let palabra = "hola"
// console.log(texto.replace(palabra, reem))

// //redondear
// let num=85.4
// console.log(num.toFixed())

// //


const prompt = require("prompt-sync")();
 
function habitacion(numero, tipo, precio, Disponibilidad){
    this.numero=numero
    this.tipo=tipo
    this.precio=precio
    this.Disponibilidad=Disponibilidad
}
let habitacion1 = new habitacion(
    101,
    "Simple",
    35,
    true
);

let habitacion2 = new habitacion(
    102,
    "Doble",
    60,
    false
);

let habitacion3 = new habitacion(
    103,
    "Matrimonial",
    75,
    true
);

let habitacion4 = new habitacion(
    104,
    "Suite",
    120,
    false
);

let habitacion5 = new habitacion(
    105,
    "Familiar",
    95,
    true
);

// Arreglo de habitaciones
let habitaciones = [
    habitacion1,
    habitacion2,
    habitacion3,
    habitacion4,
    habitacion5
];

const presentar_habitaciones=(habitacion)=>{
    for(let i=0; i<habitacion.length;i++){
        if(habitacion[i].Disponibilidad==true){
        console.log("\n--- HABITACIÓN ---");
        console.log("Número: " + habitacion[i].numero);
        console.log("Tipo: " + habitacion[i].tipo);
        console.log("Precio: $" + habitacion[i].precio);
        console.log("Disponibilidad: " + habitacion[i].Disponibilidad);
        }
    }
}
presentar_habitaciones(habitaciones)