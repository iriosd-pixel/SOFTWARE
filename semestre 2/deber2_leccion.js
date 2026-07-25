// Ejercicio 1. Sistema de ventas de una tienda

// Crea una función constructora llamada Articulo.

// Cada artículo debe tener:

// código
// nombre
// precio
// cantidad vendida
// categoría

// El programa debe:

// Registrar varios artículos mediante una función nombrada.
// Guardarlos en un arreglo.
// Calcular el total vendido mediante una función flecha.
// Usar filter() para mostrar los artículos que vendieron menos de 3 unidades.
// Recorrer todos los artículos con un ciclo for.


const prompt = require("prompt-sync")();

function Articulo (codigo, nombre, precio, cantidad_vendida, categoria){
    this.codigo=codigo
    this.nombre=nombre
    this.precio=precio
    this.cantidad_vendida=cantidad_vendida
    this.categoria=categoria
}

let inventario=[]

function Registrar_articulos(inventario){
    let cantidad_articulos= Number(prompt("Ingrese la cantida de productos que desea registrar: "))

    for(let i=0; i<cantidad_articulos; i++){
        console.log("\n---Articulo #"+ (i+1)+"---")
    let codigo= Number(prompt("Ingrese el codigo del articulo: "))
    let nombre= prompt("Ingrese el nombre del articulo: ")
    let precio=Number(prompt("Ingrese el precio del producto: "))
    let cantidad_vendida=Number(prompt("Ingrese la cantidad del producto vendida: "))
    let categoria=prompt("Ingrese la categoria del producto: ")

    let nuevo_articulo= new Articulo(
        codigo,
        nombre,
        precio,
        cantidad_vendida,
        categoria
    )
    console.log("-El prodcuto ha sido registrado con exito-")
    inventario.push(nuevo_articulo)
    }
}
Registrar_articulos(inventario)




const total_vendido=(Articulos)=>{
    let total=0
    let subtotal=0
    for(let i=0; i<Articulos.length; i++){
        subtotal= Articulos[i].precio*Articulos[i].cantidad_vendida
        total+=subtotal
    }
    return total
}
console.log("El total vendido el dia de hoy es: $" + total_vendido(inventario))



const pocas_ventas= inventario.filter(
    (Articulo)=>Articulo.cantidad_vendida<5
);
console.log("\n--Pocos vendidos--");
if(pocas_ventas.length===0){
    console.log("No hay productos con pocas ventas")
}else{
    for(let i=0; i<pocas_ventas.length; i++){
        console.log(
            pocas_ventas[i].nombre+" "+
            pocas_ventas[i].cantidad_vendida+ " Unidades"
        )
    }
}



const presentar_articulos=(Articulo)=>{
    for(let i=0; i<Articulo.length; i++){
        console.log("\n---Inventaro---")
        console.log("Codigo: "+ inventario[i].codigo);
        console.log("Nombre: "+ inventario[i].nombre);
        console.log("Precio: "+ inventario[i].precio);
        console.log("Cantidad_Vendida: "+ inventario[i].cantidad_vendida);
        console.log("categoria: "+ inventario[i].categoria);

    }
}
presentar_articulos(inventario)


// Ejercicio 2. Gestión de deportistas

// Crea un arreglo donde cada deportista sea un diccionario u objeto con:

// nombre
// puntuaciones
// edad

// El programa debe:

// Calcular el promedio de puntuaciones con una función flecha.
// Usar map() para crear un nuevo arreglo con los promedios.
// Usar filter() para mostrar deportistas con promedio mayor o igual a 8.
// Clasificar su rendimiento con if...else anidados:
// 9 o más: Excelente
// 7 a 8.99: Bueno
// 5 a 6.99: Regular
// Menor de 5: Bajo
// Recorrer las puntuaciones utilizando for y while.


let deportista=[
    {
        nombre: 'ismael',
        puntuaciones: [5,9,7],
        edad: 20
    },
    {
        nombre: 'Elkin',
        puntuaciones: [10,7,10],
        edad: 19        
    },
    {
        nombre: 'soria',
        puntuaciones: [10,10,10],
        edad: 18        
    }
]

const promedio_puntuaciones=(puntuaciones)=>{
    let suma_puntuaciones=0
    for(let i=0; i<puntuaciones.length; i++){
        suma_puntuaciones+=puntuaciones[i]
    }
    return suma_puntuaciones/puntuaciones.length
}

const arreglo_promedio= deportista.map(
    (persona)=> {
        return{
            nombre: persona.nombre,
            puntuaciones: persona.puntuaciones,
            edad: persona.edad,
            promedio_puntuaciones: promedio_puntuaciones(persona.puntuaciones)
        }
    }
)
console.log(arreglo_promedio)

const promedio_mayor= arreglo_promedio.filter( 
    (persona)=> persona.promedio_puntuaciones>=8
);
console.log("-----PROMEDIO MAYOR O IGUAL A 8-----")
    for(let i=0; i<promedio_mayor.length; i++){
    console.log(
        "\nnombre: "+promedio_mayor[i].nombre +" "+
        "promedio: " +
        promedio_mayor[i].promedio_puntuaciones
    )
}

const clasificar_promedios=(persona)=>{
    for(let i=0; i<persona.length; i++){
        let rendimiento=""
        if(persona[i].promedio_puntuaciones>=9){
            rendimiento="excelente"
        }else if(persona[i].promedio_puntuaciones>=7){
            rendimiento="bueno"
        }else if(persona[i].promedio_puntuaciones>=5){
            rendimiento="regular"
        }else{
            rendimiento="bajo"
        }
            console.log(
        "\nnombre: "+ persona[i].nombre+" "+
        "promedio: "+ persona[i].promedio_puntuaciones.toFixed(2)+ " "+
        "rendimiento: "+ rendimiento
    )
    }

}
clasificar_promedios(arreglo_promedio)

console.log("\n----- PUNTUACIONES CON WHILE -----")

let i = 0

while (i < deportista.length) {
    console.log("\nNombre: "+ deportista[i].nombre)
    let j=0
    while(j=0<deportista.puntuaciones.length){
        console.log(
            "puntuaciones: "+ deportista[i].puntuaciones[j]
        )
    j++
    }
    i++
}