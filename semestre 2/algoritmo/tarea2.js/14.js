//4. Mostrar la tabla de multiplicar de un número
//Descripción:
//Dado un solo número, mostrar su tabla de multiplicar del 1 al 10.
//Entrada / Proceso:
//Ingresar el número.
//Usar un ciclo for desde 1 hasta 10.
//Mostrar el producto en cada iteración.
//Salida esperada:
//Ingrese un número: 4  
//Tabla del 4:
//4 × 1 = 4  
//4 × 2 = 8  
//4 × 3 = 12  …  
//4 × 10 = 40
function tablaDeMultiplicar(){
    let num=0, i=0, multi=1
    num=parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:"))
    console.log("Tabla del",num+":");
    for (i=1;i<=10;i++){
        multi=num*i
        console.log(`${num} x ${i} = ${multi}`);
    }
}