// Objeto Date

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// Uma função construtora --> precisa de new e começa com letra maiúscula.
const data = new Date(); // Data completa
console.log(data.toString());

// Podemos adicionar escopo para pegar uma data apartir de 1969 ---> em milissegundos.

const datazero = new Date(0);
const datapos = new Date(90000000000);
const dataant = new Date(-90000000000);

console.log(datazero.toString()); // 1969
console.log(datapos.toString());  // 1972
console.log(dataant.toString());  // 1967

// Suas propriedades:
console.log(data.getDate());          // número do dia
console.log(data.getMonth() + 1);     // número do mês
console.log(data.getFullYear());      // número do ano
console.log(data.getHours());         // número da hora
console.log(data.getMinutes());       // número do minuto
console.log(data.getSeconds());       // número do segundo
console.log(data.getMilliseconds());  // número do milissegundo
console.log(data.getDay() + 1);       // número do dia da semana
console.log(Date.now());              // número desde o marco zero até agora em ms