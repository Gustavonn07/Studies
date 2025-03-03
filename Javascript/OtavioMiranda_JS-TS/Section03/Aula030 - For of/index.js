// For of

// Apenas para objetos interaveis (que possuem índice).

// Não precisa entregar o índice:
const pessoa = 'Gustavo';
for (i of pessoa) {
    console.log(i); // G U S T A V O
}

let batata = ['oi', 'arroz']
for (i of batata) {
    console.log(i); // oi, batata
}

// Caso não use objeto interavel dá TypeERROR.