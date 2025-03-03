// Método Map

// Altera o array, mas não muda o tamanho original.
// Funciona igual o filter (callback e argumentos), muda apenas o retorno final.

// Podemos usar map para dobrar os valores dos elementos da array:
//               0   1   2  3   4   5   6  7  8  9  10  11
const numeros = [5, 50, 31, 3, 65, 34, 88, 6, 1, 9, 11, 28];

const numerosMapeados = numeros.map( elemento => elemento * 2);
console.log(numerosMapeados);

const pessoas = [
    { nome: "Fernanda", idade: 17 },
    { nome: "Gustavo",  idade: 18 },
    { nome: "Heitor",   idade: 34 },
    { nome: "Luiza",    idade: 67 },
    { nome: "João",     idade: 22 },
    { nome: "Iris",     idade: 78 },
];

const pessoasString = pessoas.map(elemento => elemento.nome);
const pessoasIdade = pessoas.map(elemento => {return {idade: elemento.idade}});
const pessoasId = pessoas.map((elemento, indice) => {
    const newObj = {...elemento};
    newObj.Id = indice;
    return newObj;
});

console.log(pessoasString);
console.log(pessoasIdade);
console.log(pessoasId);
console.log(pessoas);