// Troque os valores sem perder nenhum
let var1 = 'a';
let var2 = 'b';
let var3 = 'c';

console.log(`${var1}, ${var2}, ${var3}`);

let varPlaceholder = var1;
var1 = var2;
var2 = var3;
var3 = varPlaceholder;

console.log(`${var1}, ${var2}, ${var3}`);