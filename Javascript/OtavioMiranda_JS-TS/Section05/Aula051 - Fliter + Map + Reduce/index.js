// Filter + Map + Reduce

// Retornar valores pares (Filter), dobrados (Map), somados (Reduce):
const numeros = [0, 12, 4, 5, 112, 66, 76, 33, 13, 9, 7];
const numerosFilMapRed = numeros.filter(elemento => elemento % 2 === 0).map(elemento => elemento * 2).reduce((acumulador, elemento) => acumulador += elemento);

console.log(numerosFilMapRed);