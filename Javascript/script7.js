const data = prompt("Data (dd/mm/aaaa):").split("/");
const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

console.log(`${data[0]} de ${meses[data[1] - 1]} de ${data[2]}`);
