const resultado = document.getElementById("resultado");

function converterMinutos() {
    let minutos = document.getElementById("min").value;
    if (minutos === "" || isNaN(minutos) || minutos < 0) {
        document.getElementById("resultado").innerText = "Por favor, insira um número válido.";
        return;
    }

    let horas = Math.floor(minutos / 60);
    let minutosRestantes = minutos % 60;
    resultado.innerText = `${document.getElementById('text').value}\n`;
    resultado.innerText += `${horas}h ${minutosRestantes}min`;
}