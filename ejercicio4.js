window.onload = function(){
    const boton = document.getElementById("boton");
    boton.addEventListener("click", calcular)
}

function calcular(){
    // Cogemos el texto enviado por el textarea
    let texto = document.getElementById("texto").value;

    // Preparamos cabecera
    let resultado = "<div class='titulo'><h2>Resultados</h2></div>";
    resultado += "<div class='campos'>";

    // Primero comprobamos el numero de líneas
    let calculo = texto.split("\n");
    resultado += "1. Número de Líneas Introducidas: " + calculo.length + "<br><br>";

    // Segundo calculamos el numero de frases
    calculo = texto.split(/[.!?\n]+/);
    resultado += "2. Número de Frases Introducidas: " + (calculo.length - 1) + "<br><br>";

    // Tercero extraemos los 10 primeros caracteres de texto
    calculo = texto.substring(0, 10);
    resultado += "3. Primeros 10 caracteres del texto: " + calculo + "<br><br>";

    // Cuarto, convertir el texto a mayusculas
    calculo = texto.toUpperCase();
    resultado += "4. Texto convertido a mayúsculas:<br>" + calculo + "<br><br>";

    // Quinto, contar el numero de veces que aparece la palabra alumno
    let cambios = false;
    let cadenaCopia = texto.toLowerCase();
    let cadena;
    let contador = 0;
    do{
        cambios = false;
        cadena = cadenaCopia.replace("alumno", " ");
        if(cadena != cadenaCopia){
            cambios = true;
            cadenaCopia = cadena;
            contador++;
        }
        else{
            cadena = cadenaCopia.replace("alumna", " ");
            if(cadena != cadenaCopia){
                cambios = true;
                cadenaCopia = cadena;
                contador++;
            }
        }
    }while(cambios == true);
    resultado += "5. Numero de Apariciones de 'alumno' y 'alumna': " + contador + "<br><br>";

    // Sexto, reemplazar la palabra por el nombre
    cambios = false;
    cadenaCopia = texto;
    cadena;
    do{
        cambios = false;
        cadena = cadenaCopia.replace(/alumno/i, "Daniel");
        if(cadena != cadenaCopia){
            cambios = true;
            cadenaCopia = cadena;
        }
        else{
            cadena = cadenaCopia.replace(/alumna/i, "Daniel");
            if(cadena != cadenaCopia){
                cambios = true;
                cadenaCopia = cadena;
            }
        }
    }while(cambios == true);
    resultado += "6. Reemplazar apariciones de 'alumno' y 'alumna' por el nombre:<br>" + cadenaCopia;

    resultado += "</div></div>";
    
    document.getElementById("resultados").style.display = "block";
    
    let codigoresultados = document.createElement("div");
    codigoresultados.innerHTML = resultado;

    resultados = document.getElementById("resultados");
    resultados.appendChild(codigoresultados);

}