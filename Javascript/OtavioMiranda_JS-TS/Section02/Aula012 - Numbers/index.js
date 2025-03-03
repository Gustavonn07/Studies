// Numbers

// Transformar para str:
let num1 = 1200;
console.log(typeof(num1.toString()));

// Representação em binária, hexadecimal e decadecimal:
console.log(num1.toString(2));
console.log(num1.toString(6));
console.log(num1.toString(10));

// Definir o número total de casas decimais depois da vírgula:
let num2 = 12.34341345563342;
console.log(num2.toFixed(3));

// Para saber se o valor é inteiro ou float:
console.log(Number.isInteger(num1));
console.log(Number.isInteger(num2));

// Para saber se é um NaN:
let temp = num1 * 'Olá'
console.log(Number.isNaN(num1));
console.log(Number.isNaN(temp));

// O javascript possui imprecisões por seu modelo IEEE 754-2008
let flot1 = 0.7;
let flot2 = 0.1;
console.log(flot1 + flot2); // 0.79999999999

// Para corrigir:
flot1 += flot2; // 0.799999
flot1 += flot2; // 0.899999
flot1 += flot2; // 0.999999
console.log(Number.isInteger(parseInt(flot1.toFixed(2)))); 