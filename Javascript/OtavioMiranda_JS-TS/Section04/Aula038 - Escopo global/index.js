// Escopo léxico

// Existem escopos que são variáveis ou costantes que ficam fora, ou dentro, do bloco de código.
// Escopo global (ficam fora e podem ser usadas dentro do bloco):
const nome = 'Talles';
console.log(digaNome());

function digaNome() {
    return nome;
};

// Escopo local (fica dentro do bloco):
const sobrenome = 'Jorge';
digaSobrenome();

function digaSobrenome() {
    const sobrenome = 'Soarez';
    return console.log(sobrenome);
};

// Funções aninhadas não possuem conflito de escopo:
function juntaNome() {
    function digaSobrenome2() {
        const sobrenome2 = 'Soarezzz'
        return sobrenome2;
    } ;

    return `${digaNome()} ${digaSobrenome2()}`;
};

console.log(juntaNome());