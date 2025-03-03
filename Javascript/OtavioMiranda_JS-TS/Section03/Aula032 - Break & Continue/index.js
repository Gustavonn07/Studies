// break e continue

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Break serve para parar o laço:
for (numero of num){
    if (numero === 9){
        break;
    }
    else{
        console.log(numero);
    };
}

console.log('------------------------------')

// Continue pula para a próxima interação do laço:
for (numero of num){
    if (numero === 2){
        continue;
    };

    console.log(numero);
}