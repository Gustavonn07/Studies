// Funções de callback

// São funções que são usadas como parametro em outra função.

function rand(min = 1000, max = 3000) {
    const valorAleatorio = Math.random() * (max - min) + min;

    return Math.floor(valorAleatorio);
};

function f1(callback) {
    setTimeout(function() {
        console.log('f1');
        if (callback) callback();

    }, rand());
};

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();

    }, rand());
};

function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();

    }, rand());
};

// Podemos passar uma função callback para ser feita depois da função princípal:
f1(function() {
    f3( function() {
        f2();
    });
});    
// f1, f3 ,f2