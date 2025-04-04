function converterPromo() {
    const modelo = document.getElementById("text").value;
    const preco = parseFloat(document.getElementById("valor").value);

    if (isNaN(preco) || preco <= 0 || modelo.trim() === "") {
        document.getElementById("resultado").innerText = "Por favor, insira um modelo válido e um preço válido.";
        return;
    }

    // Calculando a entrada (50%)
    const entrada = preco * 0.5;
    // Calculando o saldo a pagar em 12x
    const saldo = preco - entrada;
    const parcela = saldo / 12;

    // Exibindo os resultados
    document.getElementById("resultado").innerHTML = 
        `<strong>Promoção para o veículo: ${modelo}</strong><br>` +
        `Preço total: R$ ${preco.toFixed(2)}<br>` +
        `Entrada (50%): R$ ${entrada.toFixed(2)}<br>` +
        `Saldo a pagar em 12x: R$ ${saldo.toFixed(2)}<br>` +
        `Parcelas mensais de: R$ ${parcela.toFixed(2)}`;
}