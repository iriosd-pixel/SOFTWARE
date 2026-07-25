// 1. Contar palabras
function contarpalabras() {
  let frase = "Hola mundo desde Quito"
  let contador = 0;
  frase = frase.trim();

  if (frase.length > 0) {
    contador = 1;
    for (let i = 0; i < frase.length; i++) {
      if (frase[i] == " " || frase[i] == "\n") {
        contador++;
      }
    }
  }
  return "Número de palabras: " + contador;
}

// 2. Contar signos
function contarsignnos() {
  let frase = "Hola, ¿como estas?"
  let cont = 0;

  for (let i = 0; i < frase.length; i++) {
    if ("!¡¿?.,;:".includes(frase[i])) {
      cont++;
    }
  }

  return "Signos encontrados: " + cont;
}

// 3. Contar vocales
function contarvocales() {
  let frase = "educación"
  let cont = 0;
  let vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ";

  for (let i = 0; i < frase.length; i++) {
    if (vocales.includes(frase[i])) {
      cont++;
    }
  }

  return "Vocales encontradas: " + cont;
}

// 4. Contar consonantes
function contarconsonantes() {
  let frase = "hola"
  let cont = 0;
  let vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ ";

  for (let i = 0; i < frase.length; i++) {
    let c = frase[i];
    if (!vocales.includes(c) && isNaN(c)) {
      cont++;
    }
  }

  return "Consonantes encontradas: " + cont;
}

// 5. Contar dígitos
function contardigitos() {
    let frase = "mi clave es 1234";   
    let cont = 0;

    let numeros = "0123456789";      
    for (let i = 0; i < frase.length; i++) {
        if (numeros.includes(frase[i])) {
            cont++;
        }
    }

    return "Dígitos encontrados: " + cont;
}

// 6. Mayúsculas
function contarmayusculas() {
  let frase = "Hola mundo Bonito"
  let cont = 0;

  for (let i = 0; i < frase.length; i++) {
    if (frase[i] >= "A" && frase[i] <= "Z") {
      cont++;
    }
  }

  return "Mayúsculas encontradas: " + cont;
}

// 7. Contar párrafos
function contarparrafos() {
  let frase = "hola mundo"
  let cont = 1;

  for (let i = 0; i < frase.length; i++) {
    if (frase[i] == "\n") cont++;
  }

  return "Párrafos: " + cont;
}

// 8. Invertir frase
function invertirFrase() {
  let frase = "hola"
  let invertida = "";

  for (let i = frase.length - 1; i >= 0; i--) {
    invertida += frase[i];
  }

  return "Frase invertida: " + invertida;
}

// 9. Contar caracteres
function contarcaracteres1() {
  let frase = "hola 1231"
  return "Caracteres totales: " + frase.length;
}

// 10. Contar minúsculas
function contarminusculas() {
  let frase = "hola Mundo Bonito"
  let cont = 0;

  for (let i = 0; i < frase.length; i++) {
    if (frase[i] >= "a" && frase[i] <= "z") cont++;
  }
  return "Minúsculas encontradas: " + cont;
}

// 11. Buscar palabra exacta
function buscarpalabra() {
    let frase = "me gusta programar en JavaScript"
    let palabra = "programar"

    let palabraTemp = "";
    let encontrado = false;

    for (let i = 0; i <= frase.length; i++) {

        if (i === frase.length || frase[i] === " ") {
            if (palabraTemp === palabra) {
                encontrado = true;
                break;
            }
            palabraTemp = "";
        } else {
            palabraTemp += frase[i];
        }
    }

    if (encontrado === true) {
        return `La palabra "${palabra}" SÍ existe en el texto.`;
    } else {
        return `La palabra "${palabra}" NO existe en el texto.`;
    }
}

// 12. Contar un carácter
function contarCaracter() {
    let frase = "Hola mundo"
    let caracter = "o"
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === caracter) {
            contador++;
        }
    }

    return `El carácter '${caracter}' aparece ${contador} veces.`;
}

// 13. Posición par
function contarcaracterposicionpar() {
  let frase = "hola"
  let cont = 0;

  for (let i = 0; i < frase.length; i++) {
    if (i % 2 === 0) cont++;
  }

  return "Caracteres en posición par: " + cont;
}

// 14. Posición impar
function contarcaracterposicionimpar() {
  let frase = "hola"
  let cont = 0;

  for (let i = 0; i < frase.length; i++) {
    if (i % 2 !== 0) cont++;
  }

  return "Caracteres en posición impar: " + cont;
}

// 15. Añadir texto
function anadirTextos() {
    let frase = "Aprender programacion"
    let textoAdicional = "Hoy"

    let inicio = textoAdicional + " " + frase;
    let fin = frase + " " + textoAdicional;

    return `Al inicio: "${inicio}"\nAl final: "${fin}"`;
}

// ------------------------------
//  FOR PARA EJECUTARLOS TODOS
// ------------------------------
function mostrarTodo() {
    let lista = [
      contarpalabras,
      contarsignnos,
      contarvocales,
      contarconsonantes,
      contardigitos,
      contarmayusculas,
      contarparrafos,
      invertirFrase,
      contarcaracteres1,
      contarminusculas,
      buscarpalabra,
      contarCaracter,
      contarcaracterposicionpar,
      contarcaracterposicionimpar,
      anadirTextos
    ];

    let salida = "";

    for (let i = 0; i < lista.length; i++) {
        let r = lista[i]();
        salida += `<p><strong>Ejercicio ${i + 1}:</strong> ${r}</p>`;
    }

    document.getElementById("resp").innerHTML = salida;
}
