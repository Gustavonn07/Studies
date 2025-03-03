// Funções imdeiatas (IIFE)

// IIFE --> Immediately Invoked Function Expression.
// Uma função que não possui nome e é invocada automaticamente depois de criada.

// Cria-se a função usando (função)():
(function() {
    return console.log('olá');
})();

// Não entra em conflito com escopo global:
(function() {
    const nome = 'Jorge';
    return console.log(nome);
})();

const nome = 'Felipe';
console.log(nome);