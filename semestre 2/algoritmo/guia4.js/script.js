// 1. Contar palabras
function contarpalabras(frase) {
  if (!frase) frase = "Hola mundo desde Quito";
  let contador = 0;
  frase = frase.trim();

  if (frase.length > 0) {
    contador = 1;
    for (let i = 0; i < frase.length; i++) {
      if (frase[i] == " " || frase[i] == "\n") contador++;
    }
  }
  return "Número de palabras: " + contador;
}

// 2. Contar signos
function contarsignnos(frase) {
  if (!frase) frase = "Hola, ¿como estas?";
  let cont = 0;

  for (let i = 0; i < frase.length; i++) {
    if ("!¡¿?.,;:".includes(frase[i])) cont++;
  }

  return "Signos encontrados: " + cont;
}

// 3. Vocales
function contarvocales(frase) {
  if (!frase) frase = "educación";
  let cont = 0;
  let vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ";

  for (let i = 0; i < frase.length; i++) {
    if (vocales.includes(frase[i])) cont++;
  }

  return "Vocales encontradas: " + cont;
}

// 4. Consonantes
function contarconsonantes(frase) {
  if (!frase) frase = "hola";
  let cont = 0;
  let vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ ";

  for (let i = 0; i < frase.length; i++) {
    let c = frase[i];
    if (!vocales.includes(c) && isNaN(c)) cont++;
  }

  return "Consonantes encontradas: " + cont;
}

// 5. Dígitos
function contardigitos(frase) {
    if (!frase) frase = "mi clave es 1234";

    let cont = 0;
    const numeros = "0123456789";  // aquí están todos los dígitos válidos

    for (let i = 0; i < frase.length; i++) {
        if (numeros.includes(frase[i])) {
            cont++;
        }
    }

    return "Dígitos encontrados: " + cont;
}



// 6. Mayúsculas
function contarmayusculas(frase) {
  if (!frase) frase = "Hola mundo Bonito";
  let cont = 0;

  for (let i = 0; i < frase.length; i++) {
    if (frase[i] >= "A" && frase[i] <= "Z") cont++;
  }

  return "Mayúsculas encontradas: " + cont;
}

// 7. Párrafos
function contarparrafos(frase) {
  if (!frase) frase = "hola mundo";
  let cont = 1;

  for (let i = 0; i < frase.length; i++) {
    if (frase[i] == "\n") cont++;
  }

  return "Párrafos: " + cont;
}

// 8. Invertir frase
function invertirFrase(frase) {
  if (!frase) frase = "hola";
  let invertida = "";

  for (let i = frase.length - 1; i >= 0; i--) {
    invertida += frase[i];
  }

  return "Frase invertida: " + invertida;
}

// 9. Caracteres
function contarcaracteres1(frase) {
  if (!frase) frase = "hola 1231";
  return "Caracteres totales: " + frase.length;
}

// 10. Minúsculas
function contarminusculas(frase) {
  if (!frase) frase = "hola Mundo Bonito";
  let cont = 0;

  for (let i = 0; i < frase.length; i++) {
    if (frase[i] >= "a" && frase[i] <= "z") cont++;
  }
  return "Minúsculas encontradas: " + cont;
}

// 11. Buscar palabra
function buscarpalabra(frase) {
  if (!frase) frase = "me gusta programar en JavaScript";
  let palabra = "programar";

  let temp = "";
  let encontrado = false;

  for (let i = 0; i <= frase.length; i++) {
    if (i === frase.length || frase[i] === " ") {
      if (temp === palabra) encontrado = true;
      temp = "";
    } else {
      temp += frase[i];
    }
  }

  return encontrado
    ? `La palabra "${palabra}" SÍ existe en el texto.`
    : `La palabra "${palabra}" NO existe en el texto.`;
}

// 12. Contar carácter
function contarCaracter(frase) {
  if (!frase) frase = "Hola mundo";
  let caracter = "o";
  let cont = 0;

  for (let i = 0; i < frase.length; i++) {
    if (frase[i] === caracter) cont++;
  }

  return `El carácter '${caracter}' aparece ${cont} veces.`;
}

// 13. Posición par
function contarcaracterposicionpar(frase) {
  if (!frase) frase = "hola";
  let cont = 0;

  for (let i = 0; i < frase.length; i++) {
    if (i % 2 === 0) cont++;
  }

  return "Caracteres en posición par: " + cont;
}

// 14. Posición impar
function contarcaracterposicionimpar(frase) {
  if (!frase) frase = "hola";
  let cont = 0;

  for (let i = 0; i < frase.length; i++) {
    if (i % 2 !== 0) cont++;
  }

  return "Caracteres en posición impar: " + cont;
}

// 15. Añadir textos
function anadirTextos(frase) {
  if (!frase) frase = "Aprender programacion";
  let textoAdicional = "Hoy";

  let inicio = textoAdicional + " " + frase;
  let fin = frase + " " + textoAdicional;

  return `Al inicio: "${inicio}"\nAl final: "${fin}"`;
}

// ------------------------
// ANALIZAR TODO (con textarea)
// ------------------------
function analizarTodo() {
  let texto = document.getElementById("texto").value;
  if (texto.trim() === "") texto = null; // Usa tus frases predefinidas

  let r = "";

  r += contarpalabras(texto) + "\n";
  r += contarsignnos(texto) + "\n";
  r += contarvocales(texto) + "\n";
  r += contarconsonantes(texto) + "\n";
  r += contardigitos(texto) + "\n";
  r += contarmayusculas(texto) + "\n";
  r += contarparrafos(texto) + "\n";
  r += invertirFrase(texto) + "\n";
  r += contarcaracteres1(texto) + "\n";
  r += contarminusculas(texto) + "\n";
  r += buscarpalabra(texto) + "\n";
  r += contarCaracter(texto) + "\n";
  r += contarcaracterposicionpar(texto) + "\n";
  r += contarcaracterposicionimpar(texto) + "\n";
  r += anadirTextos(texto) + "\n";

  document.getElementById("resultado").textContent = r;
}
