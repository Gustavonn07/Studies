// Avaliação de Short-Circuit

// A expressão se encontrar um valor que é considerado falso retorna o mesmo.
// Caso não retorna o último valor.

console.log('Gustavo' && 0 && 'Fernanda'); // 0 é falso
console.log('Gustavo' && true && 'Fernanda');

// Valores que são considerados falsos exceto <false> são chamados FALSY.

// Valores FALSY: 0, "", '', ``, null, undefined, NaN.
function falarOi(){
    return 'Oi';
}

console.log(NaN && falarOi()); // NaN

console.log('Eae' || 'Batata' || 'Foto');
console.log( 0 || 'Batata' || 'Foto'); // Não retorna o valor falsy já que usa ||