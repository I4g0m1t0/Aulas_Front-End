function converterValor() {
    const produto = document.getElementById("produto").value;
    const valorUnitario = parseFloat(document.getElementById("valor").value);

    if (isNaN(valorUnitario) || valorUnitario <= 0 || produto.trim() === "") {
        document.getElementById("resultado").innerText = "Por favor, insira uma descrição válida e um preço válido.";
        return;
    }

    // Calculando o preço da promoção: desconto nos centavos
    const valorx2 = valorUnitario * 2;
    const valorx3 = valorUnitario * 3;
    const valorTotal = valorx2 + valorUnitario * 0.5; // Pegando apenas os centavos

    // Exibindo o resultado da promoção
    document.getElementById("resultado").innerHTML = 
        `<strong>${produto} - Promoção leve 3 por R$: ${valorTotal}</strong><br>` +
        `<strong>O terceiro produto custa apenas ${(valorUnitario * 0.5).toFixed(2)}</strong><br>`;
}