const nome = document.getElementById('nome');
const idade = document.getElementById('idade');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');

const cancelar = document.getElementById('btn-cancel');
const enviar = document.getElementById('btn-send');

const DB = [];

class Pessoa {
    constructor(nome, idade, peso, altura) {
        this.nome = nome.value.trim();
        this.idade = idade.value;
        this.peso = peso.value;
        this.altura = altura.value;
    }
}

function limparInputs() {
    nome.value = '';
    idade.value = '';
    peso.value = '';
    altura.value = '';
}

enviar.addEventListener('click', () => {
    if(nome.value == '' || idade.value == '' || peso.value == '' || altura.value == '') {
        alert('Todos os items tem que ser preenchidos!');

    } else {
        DB.push(new Pessoa(nome, idade, peso, altura))
        console.log(DB)
        limparInputs();
    }
})

cancelar.addEventListener('click', () => {
    limparInputs();
});