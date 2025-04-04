function converterValor() {
    const valor = document.getElementById("valor").value;
    const gr = parseFloat(document.getElementById("gr").value);

    const valorTotal = valor * gr / 1000;

    // Exibindo os resultados
    document.getElementById("resultado").innerHTML = 
        `<strong>Valor a pagar: R$ ${valorTotal.toFixed(2)}</strong><br>`
}