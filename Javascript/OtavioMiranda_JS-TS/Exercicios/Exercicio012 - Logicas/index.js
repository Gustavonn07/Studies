// Escreva uma função que receba 2 numeros e retorne o maior deles:

function retornaMax(n1, n2) {
    let array = [n1, n2];
    return array.sort((a, b) => a - b).pop();
}


// Escreva uma função chamada ePaisagem que receba a largura e altura, e veja se ela está em
// formato de paisagem se recebesse uma imagem com essas dimensões:

function ePaisagem(largura, altura) {
    return largura > altura ? 'é paisagem' : 'não é paisagem'; 
}


// Escreva uma função que retorne:
/*
Número é divisivel 3 por retorne: Fizz
Número é divisivel 5 por retorne: Buzz
Número é divisivel 3 e 5 por retorne: FizzBuzz
Número não é divisivel por 3 e 5 retorna: o próprio número
Se é realmente um número
Use números de 0 a 100
*/
 
function fizzBuzz (num) {
    let fizzBuzz = '';
    if(num % 3 == 0) fizzBuzz += 'Fizz';
    if(num % 5 == 0) fizzBuzz += 'Buzz';
    if(num % 3 != 0 && num % 5 != 0) return num;
    return fizzBuzz;
}

for(let i = 0; i <= 100; i++) {
    console.log(fizzBuzz(i));
}

