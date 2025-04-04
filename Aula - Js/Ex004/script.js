function converterValor() {
    const medicamento = document.getElementById("medicamento").value;
    const valorUnitario = parseFloat(document.getElementById("valor").value);

    if (isNaN(valorUnitario) || valorUnitario <= 0 || medicamento.trim() === "") {
        document.getElementById("resultado").innerText = "Por favor, insira uma descrição válida e um preço válido.";
        return;
    }

    // Calculando o preço da promoção: desconto nos centavos
    const valorTotal = valorUnitario * 2;
    const descontoCentavos = valorTotal - Math.floor(valorTotal); // Pegando apenas os centavos
    const valorComDesconto = valorTotal - descontoCentavos;

    // Exibindo o resultado da promoção
    document.getElementById("resultado").innerHTML = 
        `<strong>Medicamento: ${medicamento}</strong><br>` +
        `Preço unitário: R$ ${valorUnitario.toFixed(2)}<br>` +
        `Preço total sem desconto (2 unidades): R$ ${valorTotal.toFixed(2)}<br>` +
        `Desconto nos centavos: R$ ${descontoCentavos.toFixed(2)}<br>` +
        `Preço na promoção: R$ ${valorComDesconto.toFixed(2)}`;
}