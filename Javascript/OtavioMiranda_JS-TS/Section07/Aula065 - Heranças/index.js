class Dispositivo {

    constructor(nome, cor) {
        this.nome = nome;
        this.cor = cor;
        this.ligado = false;
    }

    ligar() {
        if(!this.ligado) {
            console.log("Ligado");
            this.ligado = true;
            return;
        }
        console.log("Já está ligado");
    }

    desligar() {
        if(this.ligado) {
            console.log("Desligar");
            this.ligado = false;
            return;
        }
        console.log("Já está desligado");
    }
}

class Celular extends Dispositivo {

    constructor(nome, cor, modelo) {
        super(nome, cor);
        this.modelo = modelo;
    }
}

let c = new Celular("Celular", 'A', 'SS');
c.ligar();