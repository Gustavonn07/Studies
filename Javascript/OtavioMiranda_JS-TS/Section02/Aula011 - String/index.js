//Strings

// Para escapar de um "
let umaStr = "Um \"texto\"";
console.log(umaStr);

// Cada caractere possui um indice
//              012345
let outraStr = "Batata";

// Para chamar um caractere:
console.log(outraStr[0]);
console.log(umaStr[3]);

// Para concatenar uma str:
console.log(umaStr.concat(' ', outraStr,' ', 'texto aleatorio'));
console.log('String '.concat(`${umaStr} testando strings`, 'comida'));

// Localizar um texto ou str:
const novaStr = 'Frase legal';
console.log(novaStr.indexOf('legal'));
console.log('outra frase muito legal'.indexOf('m'));
console.log('outra frase muito legal'.indexOf('o'));
console.log('outra frase muito legal'.indexOf('o', 1));

// Localizar um texto ou str (pelo fim):
console.log('outra frase muito legal'.lastIndexOf('o'));

// Substituir uma frase/palavra:
console.log('Joaninha come folha'.replace('come', 'assiste'))
console.log('Joaninha come folha'.replace(/a/g, '#'))

// Para descobrir o tamanho:
console.log('Batatinha quando nasce espalha a rama pelo chão'.length)

// Para fatiar uma str:
console.log('Batatinha quando nasce espalha a rama pelo chão'.slice(6, 11))
console.log('Batatinha quando nasce espalha a rama pelo chão'.slice(-3))

// Divisao de str:
console.log('Comedor de carne'.split(' '))
console.log('Comedor de carne'.split('e'))