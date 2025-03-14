const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");
const btnCifrar = document.getElementById("btnCifrar");
const btnDescifrar = document.getElementById("btnDescifrar");
const btnLimpiar = document.getElementById("btnLimpiar");

function soloLetras(str) {
    return /^[a-zA-Z\s]+$/.test(str);
}

function cifrarDescifrar(texto, desplazamiento, esCifrar) {
    return texto.split('').map(c => {
        let esMayus = c === c.toUpperCase();
        let valorAscii = c.toLowerCase().charCodeAt(0);
        
        if (valorAscii >= 97 && valorAscii <= 122) {
            let nuevoValor = esCifrar ? 
                valorAscii + desplazamiento : 
                valorAscii - desplazamiento;

            if (nuevoValor > 122) nuevoValor = 97 + (nuevoValor - 123);
            if (nuevoValor < 97) nuevoValor = 122 - (96 - nuevoValor);
            
            let caracterCifrado = String.fromCharCode(nuevoValor);
            return esMayus ? caracterCifrado.toUpperCase() : caracterCifrado;
        }
        return c;
    }).join('');
}

btnCifrar.addEventListener("click", () => {
    let textoIngresado = texto.value.trim();
    let valorDesplazamiento = parseInt(desplazamiento.value);

    if (!textoIngresado) {
        alert("Ingrese texto para cifrar.");
        return;
    }
    if (!soloLetras(textoIngresado)) {
        alert("Solo se permiten letras y espacios.");
        return;
    }

    textoCifrado.value = cifrarDescifrar(textoIngresado, valorDesplazamiento, true);
});

btnDescifrar.addEventListener("click", () => {
    let textoIngresado = texto.value.trim();
    let valorDesplazamiento = parseInt(desplazamiento.value);

    if (!textoIngresado) {
        alert("Ingrese texto para descifrar.");
        return;
    }
    if (!soloLetras(textoIngresado)) {
        alert("Solo se permiten letras y espacios.");
        return;
    }

    textoCifrado.value = cifrarDescifrar(textoIngresado, valorDesplazamiento, false);
});

btnLimpiar.addEventListener("click", () => {
    texto.value = "";
    textoCifrado.value = "";
    desplazamiento.value = "1";
});
