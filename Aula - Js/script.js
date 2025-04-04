
// a. Selecionando o elemento <h1> e alterando o texto
let titulo = document.getElementById('titulo');
titulo.innerText = "Bem-vindo ao meu site!";

// b. Selecionando os elementos com a classe 'texto' e alterando as cores
let textos = document.getElementsByClassName('texto');
textos[0].style.color = "blue";
textos[1].style.color = "green";

// c. Selecionando o primeiro parágrafo e alterando o texto
let primeiroTexto = document.querySelector('.texto');
primeiroTexto.innerText = "Este é um novo texto";

// d. Selecionando todos os parágrafos e imprimindo o número de parágrafos
let todosParagrafos = document.querySelectorAll('p');
console.log(`Existem ${todosParagrafos.length} parágrafos na página.`);

// Criando um novo elemento <p>  
let novoParagrafo = document.createElement('p');  
novoParagrafo.innerText = "Este é um novo parágrafo.";  

// Adicionando o novo parágrafo ao elemento <div>  
let novaDiv = document.getElementById('novaDiv');  
novaDiv.appendChild(novoParagrafo);