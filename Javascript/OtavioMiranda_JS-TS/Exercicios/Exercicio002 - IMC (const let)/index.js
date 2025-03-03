const nome = 'Gustavo';
const ano = new Date().getFullYear();
let idade = 19;
let peso = 70;
let altura = 1.72;

console.log(`${nome} tem ${idade}, nascido em ${ano - idade} e possui ${peso} kg com ${altura}m de altura`);
console.log(`Seu IMC é de ${(peso / (altura * altura)).toFixed(2)}`);