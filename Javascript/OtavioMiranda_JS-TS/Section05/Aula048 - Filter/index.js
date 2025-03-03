// Filtrando arrays

// Use dessa forma: array.filter(func de callback).
// Uma maneira de filtrar elementos usando critérios personalizados.

// Pode usar para retornar valores com uma condição (sem usar if/else):
// Retornando valores maiores que 10:
//               0   1   2  3   4   5   6  7  8  9  10  11
const numeros = [5, 50, 31, 3, 65, 34, 88, 6, 1, 9, 11, 28];

const numerosFiltrados = numeros.filter( elemento => elemento > 10);
console.log(numerosFiltrados);

// A func callback recebe 3 argumentos graças ao filter: elemento processado, indice do elemento, array original (os dois ultimos são opicionais). ---> padrão
// Sempre retorna uma array, com a mesma quantidade de elementos ou menos.

const pessoas = [
    { nome: "Fernanda", idade: 17 },
    { nome: "Gustavo",  idade: 18 },
    { nome: "Heitor",   idade: 34 },
    { nome: "Luiza",    idade: 67 },
    { nome: "João",     idade: 22 },
    { nome: "Iris",     idade: 78 },
];

const pessoasNomes5Letras = pessoas.filter( elemento => elemento.nome.length >= 5);
const pessoasVelhas = pessoas.filter( elemento => elemento.idade > 50);
const pessoasFimA = pessoas.filter(elemento => elemento.nome.toLowerCase().endsWith('a'));

console.log(pessoasNomes5Letras);
console.log(pessoasVelhas);
console.log(pessoasFimA);