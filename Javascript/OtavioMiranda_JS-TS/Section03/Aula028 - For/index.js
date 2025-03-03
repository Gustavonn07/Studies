// Estruturas de Repetição (For)

// Facilita na hora de repetir códigos.
// Não pode possuir ; no fim do bloco.
// É como se fosse um looping.
// Podemos definir a quantidade de voltas.
// Em sua estrutura usa: variavel de controle; condição; incremento:

//    var  cond   inc
for (c = 1;  c  <= 5; c++) {
    console.log('Linha ' + c);
}

// Pode chegar a valores negativos e descrescentes:
for (c = 100; c >= -100; c -= 20) {
    console.log('Turno ' + c);
}

// Pode usar com arrays:
const frutas = ['Tomate', 'Laranja', 'Melão'];
for (c = 0; c < 3; c++) {
    console.log(`A sua fruta é ${frutas[c]}`);
}