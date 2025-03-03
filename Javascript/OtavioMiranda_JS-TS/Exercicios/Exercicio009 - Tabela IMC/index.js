const peso = document.getElementById('peso');
const altura = document.getElementById('altura');

const cancelar = document.getElementById('btn-cancel');
const enviar = document.getElementById('btn-send');
const root = document.getElementById('root');

class CalcIMC{
    #imc;
    constructor(peso, altura) {
        this.peso = peso;
        this.altura = altura;
    }

    #obterValores() {
        this.valorPeso = parseFloat(this.peso.value);
        this.valorAltura = parseFloat(this.altura.value);
    }

    calcularIMC() {
        this.#obterValores();
        return this.valorPeso / (this.valorAltura ** 2);
    }

    limparInputs() {
        this.altura.value = ''
        this.peso.value = '';
    }

    resultado() {
        this.#imc = this.calcularIMC();
        switch(true) {
            case this.#imc < 18.5:
                return 'Abaixo do peso';
            case 18.5 <= this.#imc && this.#imc <= 24.9:
                return 'Peso normal';
            case 25 <= this.#imc && this.#imc <= 29.9:
                return 'Sobrepeso';
            case 30 <= this.#imc && this.#imc <= 34.9:
                return 'Obesidade grau 1';
            case 35 <= this.#imc && this.#imc <= 39.9:
                return 'Obesidade grau 2';
            case this.#imc >= 40:
                return 'Obesidade grau 3 (mórbida)';
            default:
                return 'Valor inválido';
        }
    }
}

const imc =  new CalcIMC(peso, altura);

enviar.addEventListener('click', () => {
    if(peso.value == '' || altura.value == '') {
        alert('Todos os items tem que ser preenchidos!');

    } else {
        root.innerText = `Seu IMC é de ${imc.calcularIMC().toFixed(2)} e você está ${imc.resultado()}.`
        imc.limparInputs();
    }
})

cancelar.addEventListener('click', () => {
    imc.limparInputs();
});

