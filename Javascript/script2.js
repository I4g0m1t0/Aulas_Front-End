const espectadores = [
    { idade: 25, opiniao: 3 }, // Ótimo
    { idade: 34, opiniao: 2 }, // Bom
    { idade: 19, opiniao: 1 }, // Regular
    { idade: 45, opiniao: 3 }, // Ótimo
    { idade: 23, opiniao: 2 }, // Bom
    { idade: 30, opiniao: 1 }, // Regular
    { idade: 28, opiniao: 3 }, // Ótimo
    { idade: 41, opiniao: 2 }, // Bom
    { idade: 22, opiniao: 1 }, // Regular
    { idade: 37, opiniao: 3 }, // Ótimo
    { idade: 26, opiniao: 2 }, // Bom
    { idade: 33, opiniao: 1 }, // Regular
    { idade: 29, opiniao: 3 }, // Ótimo
    { idade: 40, opiniao: 2 }, // Bom
    { idade: 21, opiniao: 1 }  // Regular
];

let somaIdadeOtimo = 0;
let contOtimo = 0
let somaRegular = 0;
let somaOpiniaoBom = 0;

for (let i = 0; i < espectadores.length; i++) {
    if(espectadores[i].opiniao == 3) {
        somaIdadeOtimo += espectadores[i].idade;
        contOtimo += 1;
    }
    if(espectadores[i].opiniao == 1) {
        somaRegular += 1;
    }
    if(espectadores[i].opiniao == 2){
        somaOpiniaoBom += 1;
    }
}

console.log(`A média das idades que responderam ótimo é ${somaIdadeOtimo/contOtimo}`);
console.log('O número de pessoas que responderam regular é ' + somaRegular);
console.log('A porcentagem de pessoas que responderam bom entre todos os espectadores analisados é: ' + (somaOpiniaoBom/15) * 100)