// Arrays (Basico)

// Como se fosse uma lista de qualquer types:
// Pode selecionar qualquer elemento pelos indices:
//               0      1        2       3       4        5
const tipos = [true, "Maria", `Otavio`, 253, `Fernanda`, null];
console.log(tipos);
console.log(tipos[1]); // Maria
console.log(tipos[3]); // 253
console.log(tipos[0]); // true

// Pode modificar:
tipos[1] = 'Gustavo' 
console.log(tipos[1]);

// Pode ver o tamanho:
console.log(tipos.length);

// Para adicionar mais um elemento no ultimo espaço:
tipos[tipos.length] = 'Str';
tipos[tipos.length] = 23;
tipos[tipos.length] = false;
tipos[tipos.length] = NaN;
tipos.push('Outra forma de add');
console.log(tipos);

// Para adicionar mais um elemento no primeiro espaço:
tipos.unshift(9939.32);
console.log(tipos);

// Para remover elementos do inicio:
tipos.shift();
console.log(tipos);

// Para remover elementos do fim:
tipos.pop();
console.log(tipos);

// Para remover sem mudar os indices:
delete tipos[2];
console.log(tipos);

// Para fatiar:
console.log(tipos.slice(0,4)); // 0 a 3

/*const descreve uma variável que não pode ser reatribuída (com o operador de atribuição =). Depois de criá-la, não podemos fazer algo assim:

const nome = 'luiz';
nome = 'joão'; // Erro: Assignment to constant variable.
Porém, existe uma diferença entre variável e valor.

Variáveis são como um apelido para um valor, uma espécie de alias para mencionar algum valor salvo na memória.

Já valores são os dados que realmente ficam salvos na memória e sustentam determinado tipo. Alguns tipos de valores são imutáveis, como number, string, boolean, undefined, null, symbol e bigint (os primitivos todos são imutáveis). Outros tipos são mutáveis, como arrays e objetos (objetos em geral são mutáveis, com exceção de null).

Valores mutáveis geralmente são estruturas de dados mais complexas que sustentam outros valores ou comportamentos internamente. Como é o caso do array, que pode ser composto por vários outros tipos de dados.

Quando usamos const com tipos primitivos, esse valor nunca mais poderá ser alterado. Nesse caso, além de const não permitir reatribuição, o valor também é imutável (consequentemente, nunca podemos alterar essa constante).

Já quando usamos const com valores mutáveis (como arrays e objetos), a variável continua sendo constante, porém os valores dentro do objeto poderão ser alterados. Isso acontece porque quando alteramos um valor interno de um objeto, não ocorre a reatribuição da variável com sinal de atribuição = (a variável continua apontando para o mesmo local na memória), apenas a alteração de um valor interno do mesmo objeto.

Por este motivo, pode-se usar const com objetos mutáveis e ainda assim alterar seus valores internos. A única coisa que não vamos conseguir fazer é reatribuir o valor da variável.

Exemplos:

Isso pode

const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]
 
Isso NÃO pode

const array = [1, 2, 3, 4, 5];
array = 'Legal'; // Assignment to constant variable.
*/ 