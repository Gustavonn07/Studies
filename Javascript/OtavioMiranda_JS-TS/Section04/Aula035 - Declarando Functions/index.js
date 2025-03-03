// Funções (Avançado)

// Pode chamar uma função antes de declarar ela (Hoisting):
// Apenas funções regulares (Arrow function não tem hoisting).
oi();
function oi() {
    console.log('oi.');
};

// Funções sao objetos de primeira classe
// Podemos usar funções como dados:
const souUmDado = () => {
    console.log('Sou um dado.');
};
souUmDado();

// Podemos executar uma função em uma função:
executaFuncao(souUmDado);
function executaFuncao(funcao) {
    funcao();
} ;

// Podemos usar arrow function para diminuir o tamanho:
const arrowFunction = () => {
    console.log('Sou uma arrow function');;
};

arrowFunction();