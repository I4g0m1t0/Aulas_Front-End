const pessoas = [
    { altura: 1.75, sexo: "M" },
    { altura: 1.62, sexo: "F" },
    { altura: 1.80, sexo: "M" },
    { altura: 1.55, sexo: "F" },
    { altura: 1.90, sexo: "M" },
    { altura: 1.68, sexo: "F" },
    { altura: 1.73, sexo: "M" },
    { altura: 1.60, sexo: "F" },
    { altura: 1.85, sexo: "M" },
    { altura: 1.58, sexo: "F" },
    { altura: 1.78, sexo: "M" },
    { altura: 1.65, sexo: "F" },
    { altura: 1.82, sexo: "M" },
    { altura: 1.70, sexo: "F" },
    { altura: 1.76, sexo: "M" }
];

let maior = pessoas[0].altura;
let menor = pessoas[0].altura;
let alturaTotalMulheres = 0;
let contM = 0;
let contF = 0;

for (let i = 0; i < pessoas.length; i++) {
    if(pessoas[i].altura > maior) {
        maior = pessoas[i].altura;
    }
    if(pessoas[i].altura < menor) {
        menor = pessoas[i].altura;
    }
    if(pessoas[i].sexo === 'F'){
        alturaTotalMulheres += pessoas[i].altura;
    }
    if(pessoas[i].sexo === 'M'){
        contM++;
    }
    if(pessoas[i].sexo === 'F'){
        contF++;
    }
}

console.log(`A maior altura é ${maior} e a menor é ${menor}`);
console.log('O número de homens é ' + contM);
console.log('O número de mulheres é ' + contF);
console.log(alturaTotalMulheres);
console.log('O média da altura de mulheres é ' + alturaTotalMulheres/contF);