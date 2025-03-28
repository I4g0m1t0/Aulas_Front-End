const salario = parseFloat(prompt("Salário:"));
const percentual = salario <= 280 ? 20 : salario <= 700 ? 15 : salario <= 1500 ? 10 : 5;
const novoSalario = salario + (salario * percentual / 100);

console.log(salario.toFixed(2), percentual, novoSalario.toFixed(2));
