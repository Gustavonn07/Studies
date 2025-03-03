// Objetos (Básico)

// Variaveis relacionadas (desagrupadas):
/*
const nome1 = 'Gustavo';
const sobrenome1 = 'Nepomuceno';
const idade1 = 18;

const nome2 = 'Fernanda';
const sobrenome2 = 'Carvalho';
const idade2 = 17;
*/ 

// Objetos são junções de atributos / variaveis:
const pessoa1 = {
    nome: 'Fernanda',
    sobrenome: 'Carvalho',
    idade: 17
};

const pessoa2 = {
    nome: 'Gustavo',
    sobrenome: 'Nepomuceno',
    idade: 18
};

console.log(pessoa1.nome);
console.log(pessoa2.nome, pessoa2.idade);

// Pode usar funções para criar objetos:

/*
Assim funciona:

function criaPessoa(nome = 'nome', sobrenome = 'sobrenome', idade = 0){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
*/

// Forma simplificada:
function criaPessoa(nome = 'nome', sobrenome = 'sobrenome', idade = 0){
    return {nome, sobrenome, idade};
}

const pessoa3 = criaPessoa('Guilherme', 'Mariano', 25);
console.log(pessoa3.nome, pessoa3.sobrenome, pessoa3.idade);

const pessoa4 = criaPessoa();
console.log(pessoa4.nome, pessoa4.sobrenome, pessoa4.idade);

// Pode usar funções dentro de objetos:
const pessoa = {
    nome: 'Gustavo',
    sobrenome: 'Nepomuceno',
    idade: 18,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos de vida!`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();