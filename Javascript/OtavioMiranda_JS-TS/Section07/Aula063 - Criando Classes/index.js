class Pessoa {
    #nome;
    #sobrenome;

    constructor(nome, sobrenome) {
        this.#nome = nome;
        this.#sobrenome = sobrenome
    }

    falar() {
        console.log("Olá mundo");
    }
}

const p1 = new Pessoa("Gustavo", "Nepomuceno");

p1.falar();