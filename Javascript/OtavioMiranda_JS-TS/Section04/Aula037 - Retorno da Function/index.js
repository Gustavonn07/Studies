// Retorno das funções

// Ao usar return a função retorna o valor dito (finaliza a função):
function soma (a = 1, b = 1) {
    return a + b;
}

console.log(soma(soma(1, 2), soma(2, 3)));

// Pode usar funções com return para criar objetos:
function criarPessoa (nome, sobrenome) {
    return {nome, sobrenome};
    //return {nome : nome, sobrenome : sobrenome}; mesma coisa.
};

console.log(typeof(criarPessoa('Gustavo', 'Nepomuceno'))); // object

// Funções podem retornar funções:
function falaFrase(comeco) {

    function falaResto(resto) {

        return `${comeco} ${resto}`;
    };

    return falaResto;
}

// Podemos gravar a função retornada em uma variável ou em uma constante:
const fala = falaFrase('Olá');
const resto = fala('Mundo');
console.log(resto);

// Cria funções mais avançadas e complexas:
function criaMultiplicador (multiplicador){
    return function (n) {
        return n * multiplicador;
    };
};

const duplicador = criaMultiplicador(2);
const triplicador = criaMultiplicador(3);
const quadriplicador = criaMultiplicador(4);

console.log(duplicador(20));
console.log(triplicador(43));
console.log(quadriplicador(5));