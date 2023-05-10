function encriptar() {
    const texto = document.getElementById('texto').value
    let textoEncriptar = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    if (validarTexto(texto)) {
        Ejecucion();
        document.getElementById('texto-resultado').textContent = textoEncriptar
    } else {
        alert("Verificar texto")
    }

}

function desencriptar() {
    const texto = document.getElementById('texto').value
    let textoDesencriptado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    if (validarTexto(texto)) {
        Ejecucion();
        document.getElementById('texto-resultado').textContent = textoDesencriptado
    } else {
        alert("Verificar texto")
    }

}

function Ejecucion() {
    document.getElementById('img-notfound').style.display = 'none';
    document.getElementById('texto-aviso').style.display = 'none';
    document.getElementById('btn-copy').style.display = 'block';
}

function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    if (regex.test(texto) && texto != "") {
        return true;
    } else {
        return false;
    }
}

function copiar() {
    let textCopy = document.getElementById("texto-resultado").textContent;
    navigator.clipboard.writeText(textCopy);
    alert("Has copiado el mensaje");
}