// Atribuição via desestruturação (Arrays)

// Podemos definir valores dessa forma:
const [a, b, c] = [1, 3, 5];
console.log(a);
console.log(b);
console.log(c);

// Podemos representar com variveis:
const array = [7, 34, 9.3];
let [d, e, f] = array;
console.log(d);
console.log(e);
console.log(f);

// Facilita na hora de coletar valores:
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [valor1, valor2] = lista;
console.log(valor1, valor2); // 1 e 2

// Para pegar o resto --> ...nome:
const [valor3, valor4, ...restante] = lista;
console.log(restante);

// Para pular valores --> , ,:
const [valor5, ,valor6, ,valor7] = lista;
console.log(valor5, valor6, valor7);

// Para pegar valores de array dentro de outra array:
let listagem = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let [,[,,seis]] = listagem;
let [,,[,,nove]] = listagem;
let [[um]] = listagem;

console.log(seis); // valor: 6
console.log(nove); // valor: 9
console.log(um);   // valor: 1