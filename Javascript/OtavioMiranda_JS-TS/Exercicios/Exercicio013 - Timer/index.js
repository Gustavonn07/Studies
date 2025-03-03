const p = document.querySelector("p");

const start = document.getElementById('btn-start');
const pause = document.getElementById('btn-pause');
const reset = document.getElementById('btn-reset');

class Timer{
    #data;
    #horario;
    #intervalo;
    constructor() {
        this.#data = new Date();
        this.#data.setHours(0, 0, 0, 0);
    };

    #atualizarHorario() {
        this.#horario = this.#data.toLocaleTimeString('pt-BR', { 
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    }

    #iniciarIntervalo() {
        this.#intervalo = setInterval(() => {
            this.#data.setSeconds(this.#data.getSeconds() + 1);
            this.#atualizarHorario();
            p.innerText = this.#horario;
        }, 1000);
    }

    #limparIntervalo() {
        clearInterval(this.#intervalo);
    }

    iniciarTimer() {
        this.#iniciarIntervalo();
    }

    pausarTimer() {
        this.#limparIntervalo();
    }

    resetarTimer() {
        this.#limparIntervalo();
        this.#data.setHours(0, 0, 0, 0);
        this.#atualizarHorario();
        p.innerText = this.#horario;
    }
};

const timer = new Timer();

start.addEventListener('click', () => timer.iniciarTimer());
pause.addEventListener('click', () => timer.pausarTimer());
reset.addEventListener('click', () => timer.resetarTimer());
