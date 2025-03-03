// Função construtora

// Incia com new.
// Retorna objetos.
// Serve como molde para criação de objetos.

function Pessoa(nome, sobrenome) {
    // Atributo privado:
    const ID = 123445;

    // Ao usar this os atributos são públicos, podendo ser acessados:
    this.n = nome;
    this.sn = sobrenome;

    this.metodo = function() {
        console.log(this.n + ': Sou um método.');
    };
};

p1 = new Pessoa('Gustavo', 'Nepomuceno');
console.log(typeof(p1)); // Retorna como objeto do molde Pessoa

p2 = new Pessoa('Joana', 'Liria');
p2.metodo();

console.log(p2.ID); // Não pode ser acessado, já que não possui this