class Carro {
    // Antes utilizaria o Symbol
    #velocidade;

    constructor(nome) {
        this.nome = nome;
        this.#velocidade = 0;
    }

    acelerar() {
        if(this.#velocidade > 100) return;
        this.#velocidade++;    
    }

    freiar() {
        if(this.#velocidade < 0) return;
        this.#velocidade++;    
    }

    get getVelocidade() {
        return this.#velocidade;
    }

    /**
     * @param {number} valor
     */
    set setVelocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor > 100 || valor < 0) return;
        this.#velocidade = valor;
    }
}

let c1 = new Carro("Audi");
c1.setVelocidade = 12;
console.log(c1.getVelocidade);
