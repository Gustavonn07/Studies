const root = document.getElementById('root');

const nomesMeses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

class Data {
    #data;
    #mes;
    #diaIndex;
    constructor() {
        this.#data = new Date();
        this.dia = this.#data.getDate().toString().padStart(2, '0');
        this.#diaIndex = this.#data.getDay();
        this.#mes = this.#data.getMonth();
        this.ano = this.#data.getFullYear();
    };

    nomeMes() {
        return nomesMeses[this.#mes];
    };

    nomeDia() {
        switch(true) {
            case this.#diaIndex == 1:
                return 'Segunda';
            case this.#diaIndex == 2:
                return 'Terça';
            case this.#diaIndex == 3:
                return 'Quarta';
            case this.#diaIndex == 4:
                return 'Quinta';
            case this.#diaIndex == 5:
                return 'Sexta';
            case this.#diaIndex == 6:
                return 'Sabado';
            case this.#diaIndex == 0:
                return 'Domingo';
            default:
                return 'Valor inválido';
        };
    };
};

const data = new Data();

root.innerText = `${data.nomeDia()}, ${data.dia} de ${data.nomeMes()} de ${data.ano}`;