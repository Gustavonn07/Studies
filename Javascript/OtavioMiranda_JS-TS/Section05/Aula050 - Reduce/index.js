// Método Reduce

// Serve para reduzir um array em um único elemento.
// Muito versátil.
// Recebe 4 argumentos (acumulador, elemento, indice, array).


//               0   1   2  3   4   5   6  7  8  9  10  11
const numeros = [5, 50, 31, 3, 65, 34, 88, 6, 1, 9, 11, 28];

const numerosTotal = numeros.reduce((acumulador, elemento) => acumulador + elemento);

console.log(numerosTotal);

const pessoas = [
    { nome: "Fernanda", idade: 17 },
    { nome: "Gustavo",  idade: 98 },
    { nome: "Heitor",   idade: 34 },
    { nome: "Luiza",    idade: 67 },
    { nome: "João",     idade: 22 },
    { nome: "Iris",     idade: 78 },
];

const pessoaVelha = pessoas.reduce((maisVelho, elemento) => {
    console.log(maisVelho);
    console.log(elemento);
    console.log('-----------');
    if(elemento.idade > maisVelho.idade) {
        return elemento;

    } else {
        // Cada return se torna o acumulador do callback, o ultimo do looping é o definitivo.
        return maisVelho;
    }
})

console.log(pessoaVelha);