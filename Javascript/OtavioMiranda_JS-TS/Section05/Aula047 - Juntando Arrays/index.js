// Concatenando arrays

// Para concatenar use o método concat:
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const arrayUnida = array1.concat(array2); 
console.log(arrayUnida);

// Pode concatenar mais de 1 array:
const array3 = [9, 10, 11, 12];
const array4 = [13, 14, 15, 16];
const arrayUnida2 = arrayUnida.concat(array3, array4);
console.log(arrayUnida2);

// Pode concatenar com operador de resto (espalhamento):
const lista = ['Olá', 'Oi', 'Opa', 'Eae'];
const lista2 = ['Tudo bem?', 'Como você vai?', 'Vai indo bem?'];
const listaUnida = [...lista, ...lista2];
console.log(listaUnida);