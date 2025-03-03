// Atribuição via desestruturação (Objetos)

// Parecido com as de arrays:
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 23,
    endereco: {
        rua: 'Av Brasil',
        numero: '320'
    }
};

// Para coletar um valor de um objeto dentro de outro --> de um nome antes:
const {nome, sobrenome, idade, endereco:{rua, numero}} = pessoa;
console.log(nome);
console.log(sobrenome);
console.log(idade);
console.log(rua);
console.log(numero);