function ehPrimo(num) {
    let primo = true; // Suponha que seja primo

    if (num < 2) {
        primo = false; // Se for menor que 2, não é primo
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                primo = false; // Se for divisível por outro número, não é primo
                break; // Encerra o loop, pois não é primo
            }
        }
    }

    return primo;
}

const numeros = [12, 7, 9, 23, 5, 8, 4, 19, 11, 30];

let somaPares = 0;
let somaPrimos = 0;

numeros.forEach(num => {
    if (num % 2 === 0) {
        somaPares += num;  // Soma os números pares
    }

    if (ehPrimo(num)) {
        somaPrimos += num; // Soma os números primos
    }
});

console.log(`Soma dos números pares: ${somaPares}`);
console.log(`Soma dos números primos: ${somaPrimos}`);