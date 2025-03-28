let homens = 0, mulheres = 0, somaIdadesHomens = 0, somaPesosMulheres = 0;

for (let i = 0; i < 10; i++) {
    let idade = parseInt(prompt("Idade:"));
    let peso = parseFloat(prompt("Peso:"));
    let sexo = prompt("Sexo (M/F):").toUpperCase();

    if (sexo === "M") {
        homens++;
        somaIdadesHomens += idade;
    } else if (sexo === "F") {
        mulheres++;
        somaPesosMulheres += peso;
    }
}

console.log(homens, mulheres, homens ? (somaIdadesHomens / homens).toFixed(2) : "N/A", mulheres ? (somaPesosMulheres / mulheres).toFixed(2) : "N/A");
