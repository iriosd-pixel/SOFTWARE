//2. Contar apariciones de una vocal en cada título
//Dado un arreglo de títulos y una vocal específica, contar cuántas veces aparece esa vocal en cada título.
//Entrada: ["Programación avanzada", "Desarrollo web", "Análisis de datos"]
//vocal = 'a'
//Salida:
//"Programación avanzada" → 5 veces la 'a'  
//"Desarrollo web" → 1 vez la 'a'  
//"Análisis de datos" → 4 veces la 'a'
function contarCaracteresVariasFrases(){
let n=0, frases=[], lon=0,j=0,vocal="", contador=0
n=parseInt(prompt("Ingrese la cantidad de frases publicitarias a evaluar:"))
for (let i=0;i<n;i++){
    frases[i]=prompt("Ingrese la frase publicitaria "+(i+1)+":")
}
vocal=prompt("Ingrese la vocal a buscar:")
vocal=vocal.toLowerCase()
for(let i=0;i<frases.length;i++){
    contador=0
    frases[i]=frases[i].toLowerCase()
for (let j=0;j<frases[i].length;j++){
if (frases[i][j]===vocal){
    contador++
}
}
console.log(`${frases[i]} = > ${contador} veces la ${vocal}`);

}
}