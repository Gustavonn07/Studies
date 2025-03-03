// Funções (Básico)

// Criando uma função:
function nome(){
    console.log('Gustavo');
}

// Chamando uma função:
nome();

// Usando parametros:
function ola(nome){
    console.log(`Olá ${nome}`);
}

ola('Gustavo');

// Retornando valores:
function soma(x, y){
    z = x + y;
    return z;
}

console.log(soma(22, 60)); // 82
console.log(soma(20, 34)); // 54

// Parametro ja definido:
function multiplicar(x = 2, y = 2){
    z = x * y;
    return z;
}

console.log(multiplicar()); // 4
console.log(multiplicar(4)); // 8

// Mais formas de criar funções:
// Function em variavel / constante
const pot = function(x, y){
    console.log(x ** y);
}

pot(2,8);

// Arrow function
const sqrt = (n) => console.log(n ** 0.5);

sqrt(25);