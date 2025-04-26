const modelo = document.querySelector('#modelo');
const ano = document.querySelector('#ano');
const preco = document.querySelector('#preco');
const botao = document.querySelector('#botao');
const resultado = document.querySelector('#resultado')
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

botao.addEventListener('click', (e)=> {
    e.preventDefault();
    if ((anoAtual - Number(ano.value)) == 0) {
        resultado.innerHTML = `${modelo.value} - Novo`;
        resultado.innerHTML += `\nPreço de venda R$: ${Number(preco.value) * 1.08}`;
    } else if ((anoAtual - ano) >= 2) {
        resultado.innerHTML = `${modelo.value} - Seminovo`;
        resultado.innerHTML += `\nPreço de venda R$: ${Number(preco.value) * 1.10}`;
    } else {
        resultado.innerHTML = `${modelo.value} - Usado`;
        resultado.innerHTML += `\nPreço de venda R$: ${Number(preco.value) * 1.10}`;
    }
})
