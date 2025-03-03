class Controle {

    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume++;
    }

    abaixarVolume() {
        this.volume--;
    }

    static desligarTodasAsTVs() {
        console.log("Desligadas");
        this.volume = 0;
    }
}

Controle.desligarTodasAsTVs();