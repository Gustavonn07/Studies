// Funções fábrica

// Facilita para objetos extensos.
// São funções que retornam objetos:
const criaPessoa = (nome, sobrenome) => {
    return {
        nome,
        sobrenome
    };
}

let p1 = criaPessoa('Gustavo', 'Nepomuceno');
console.log(p1);                                // Objeto.
console.log(p1.nome + ' ' + p1.sobrenome);      // Usando o objeto.

// Podemos usar funções em objetos:
const criaHist = (nome, peso) => {
    return {
        nome,
        hist : function(assunto) {
            // Use this para coletar objetos de fora:
            console.log(`Meu nome é ${this.nome}, peso ${this.peso}Kg e fiz isso: ${assunto}`);
        },
        peso
    };
}

criaHist('Jorge', 82).hist('Batata');

function imc(p, a) {
    return {
        peso: p,
        altura: a,
        // Podemos transformar a função em atributo com get (GETTER):
        get IMC() {
            console.log(`Seu IMC é de: ${(this.peso /  this.altura**2).toFixed(2)}`);
        }

        // Também funciona (como função): 

        // IMC : function() {
        //     console.log(`Seu IMC é de: ${(this.peso /  this.altura**2).toFixed(2)}`);
        // }
    };
}

imc(80, 1.72).IMC;

// Podemos usar um set para atribuir valor na função como parametro (SETTER):
function nomeCompleto() {
    return {
        /** 
        *  @param {string} valor
        */

        set dizNome (valor) {
            valor = valor.split(' ');
            console.log(`Nome: ${valor.shift()} / Sobrenome: ${valor.join(' ')}`);
        }
    };
}

nomeCompleto().dizNome = 'Gustavo Nepomuceno Nogueira';