// Prototype é usado em funções construtoras e geram funções que são compartilhadas em todas as contrutoras

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.falarNome = ()  => {
      console.log(this.nome);  
    };
}

let p1 = new Pessoa("Jorge", 23);
let p2 = new Pessoa("Luis", 23);

// Cada um tem um método que faz a mesma coisa, o que não ajuda na performance, assim seria melhor botar falarNome() no prototype.
p1.falarNome();
p2.falarNome();

function Pessoa2(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa2.prototype.falarNome = (nome) => {
    console.log(nome);
}

let p3 = new Pessoa2("Fernanda", 18);
let p4 = new Pessoa2("Gustavo", 19);

p3.falarNome(p3.nome);
p4.falarNome(p4.nome);