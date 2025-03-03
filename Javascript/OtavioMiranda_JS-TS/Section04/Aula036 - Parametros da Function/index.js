// Parâmetros da função

// Podemos enviar argumentos para funções (valores de fora).
// Caso a função não precise de argumentos o javascript ignora.
function funcao() {
    console.log('Olá');
};

function funcao2() {
    console.log(arguments[2]);
};

funcao(1, 2, 3, 4, 5, 6);  // São salvas em uma array chamada arguments.
funcao2(1, 2, 3, 4, 5, 6); // Argumento na posição 2.

// Podemos criar uma função com argumentos pré definidos (para não ocorrer erro):
function funcao3(a = 0, b = 0, c = 0, d = 0, e = 0) {
    console.log(a, b, c, d, e);
} 

funcao3(12, 3, 9) // Os argumentos D e E foram usados com sua forma pré definida.
                  // Caso não fizesse isso o D e E dariam valores undefined.

// Podemos coletar o resto dos argumentos usando ...nome da array:
function conta(acumulador = 0, ...valores) {
    for (let numeros of valores) {
        acumulador += numeros;
    }

    console.log(acumulador);
};

conta(undefined, 12, 233, 4);