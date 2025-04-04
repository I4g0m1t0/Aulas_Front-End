function converterValor() {
    const preco15min = document.getElementById("preco").value;
    const tempo = parseInt(document.getElementById("tempo").value);

    // Calculando o preço da promoção: desconto nos centavos
    const tempo15 = Math.ceil(tempo / 15);
    const valorTotal = parseFloat(preco15min * tempo15);

    // Exibindo o resultado da promoção
    document.getElementById("resultado").innerHTML = 
        `<strong>Valor a Pagar: ${valorTotal.toFixed(2)}</strong><br>`;
}