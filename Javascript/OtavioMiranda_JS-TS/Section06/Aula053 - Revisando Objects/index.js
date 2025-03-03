// Revisando objetos

// Objetos podem ser criados com chaves ou com new.
// Usam um sistema de chave e valor.

// Pode acessar um valor com . ou com ['valor']:
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

console.log(pessoa.nome + ' ' + pessoa['sobrenome']);

// Usando construtora:
const pessoa2 = new Object;
pessoa2.nome = 'Otavio';
pessoa2.sobrenome = 'Miranda';
console.log(pessoa2.nome + ' ' + pessoa2.sobrenome);

// Pode deletar chaves com delete:
delete pessoa2.sobrenome;
console.log(pessoa2);

// Pode acessar dentro do objeto ele mesmo com this:
pessoa2.falarNome = function () {
    console.log(`olá ${this.nome}`);
};

pessoa2.falarNome();
console.log(Object.keys(pessoa));

// É útil como fabric functions e construct functions:
// fabric:
function criarPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
        get infoCompletas() {
            return `${this.nome} ${this.sobrenome} possui ${this.idade} anos de vida`;
        }
    };
};

console.log(criarPessoa('Gustavo', 'Nogueira', 18).infoCompletas);

// construct:
function PessoaPeso(nome, peso) {
    this.nome = nome;
    this.peso = peso;
};

const pessoa3 = new PessoaPeso('Gustavo', 78);