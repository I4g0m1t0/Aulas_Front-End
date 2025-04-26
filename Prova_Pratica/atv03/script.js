const resultado = document.querySelector('#resultado');
const btnCrip = document.querySelector('#cripto');
const btnDescrip = document.querySelector('#descripto');

btnCrip.addEventListener('click', (e)=> {
    e.preventDefault();

    const mensagem = document.querySelector('#mensagem').value;
    let par = '';
    let impar = '';
    let cripto = '';

    for (let i = 0; i < mensagem.length; i++) {
        if(i % 2 == 0) {
            par += mensagem[i];
        } else {
            impar += mensagem[i];
        }
    }

    cripto = impar + par

    resultado.innerHTML = cripto;
})

btnDescrip.addEventListener('click', (e) => {
    e.preventDefault();

    const mensagem = document.querySelector('#mensagem').value;

    const meio = Math.floor(mensagem.length / 2);
    const impar = mensagem.slice(0, meio);      // primeiros caracteres (índices ímpares)
    const par = mensagem.slice(meio);           // últimos caracteres (índices pares)

    let original = '';

    for (let i = 0; i < mensagem.length; i++) {
        if (i % 2 === 0) {
            original += par[Math.floor(i / 2)] || '';
        } else {
            original += impar[Math.floor(i / 2)] || '';
        }
    }

    resultado.innerHTML = original;
});