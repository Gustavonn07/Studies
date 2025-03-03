// Valores Primitivos e Valores por Referência

// Primitivos (imutáveis --> valor):
// string, number, boolean, null, undefined, bigint e symbol.

// Pode fazer cópias:
let a = 'A';
let b = a; // Cópia
a = 'G'

console.log(a);
console.log(b);

// Referência (mutável --> valor):
// array, object e function.

// Pode fazer clone na memória:
let c = [1, 2, 3];
let d = c;

console.log(c);
console.log(d);

c.push(23)
d.push(32)
console.log(c);
console.log(d);