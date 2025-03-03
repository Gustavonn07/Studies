// For in

// Lê os índices.
// Compacta o código usando in:
lista = ['a', 'b', 'c'];
for (i in lista) {
    console.log(lista[i]);
}

// Com objetos (retorna as chaves):
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 23,
    endereco: {
        rua: 'Av Brasil',
        numero: '320'
    }
};

for (c in pessoa) {
    console.log(c);
}