const noticia = document.querySelector('#noticia');
const btnAdd = document.querySelector('#btnAdd');
const btnLista = document.querySelector('#btnList');
const resultado = document.querySelector('#resultado');
let aNoticias = [];

btnAdd.addEventListener('click', (e) => {
    e.preventDefault();

    if (noticia.value.trim() === '') {
        alert('Por favor, insira uma notícia válida!');
        return; // Impede que a notícia vazia seja adicionada
    }

    aNoticias.push(noticia.value);
    noticia.value = '';
    console.log(aNoticias);
});

btnLista.addEventListener('click', (e) => {
    e.preventDefault();
    resultado.innerHTML = `<p style="color: blue; font-style: italic;">Notícias Cadastradas = ${aNoticias.length}`;
    resultado.innerHTML += '3 últimas notícias cadastradas';
    resultado.innerHTML += '\n........................................................';
    for (let i = aNoticias.length - 1; i >= aNoticias.length - 3; i--) {
        if (aNoticias[i] !== undefined) {
            resultado.innerHTML += `\n${i + 1}ª) ${aNoticias[i]}`;
        }
    }
});
