 //Contar caracteres de varias frases publicitarias
//Dado un arreglo con frases publicitarias, contar cuántos caracteres tiene cada una.
//Entrada:
//["La tecnología avanza", "Innovar para crecer", "Calidad garantizada"]
//Salida:
//"La tecnología avanza" → 19 caracteres  
//"Innovar para crecer" → 20 caracteres  
//"Calidad garantizada" → 21 caracteres
function contarCaracteresVariasFrases(){
let n=0, frases=[], lon=0,j=0
n=parseInt(prompt("Ingrese la cantidad de frases publicitarias a evaluar:"))
for (let i=0;i<n;i++){
    frases[i]=prompt("Ingrese la frase publicitaria "+(i+1)+":")
}
    for (let j=0;j<frases.length;j++){
        lon=frases[j].length
        console.log('"'+frases[j]+'"',"→",lon,"caracteres")
}
}