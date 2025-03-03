// while e doWhile

// Diferente do for, não se sabe o limite do laço de while e doWhile.
// Para ajudar a ter controle do laço crie uma variavel de controle:
let c = 0;
while (c < 5) {
    console.log('Texto ' + (c+1));
    c++;
}

// Cuidado para não criar um laço infinito!

function random (min= 0, max= 10) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 20;
let rand = random(min, max);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

console.log('---------------------------------------------------------------------------------');

// doWhile faz e depois checa:
do {
    rand = random(min, max);
    console.log(rand);
}while(rand !== 10);