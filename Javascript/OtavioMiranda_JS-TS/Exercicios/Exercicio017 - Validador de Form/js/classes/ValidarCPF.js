class ValidadorCPF {
    #CPF_LIMPO;
    #CPF_10;
    #CPF_11;
    #CPF_11_VALIDO;
    #CPF_VALIDO;

    constructor(CPF) {
        this.#CPF_LIMPO = CPF.replace(/[.-]/g, '');
        this.#CPF_10 = this.#CPF_LIMPO.slice(0, -2);
        this.#CPF_11 = this.#getCPF_11();
        this.#CPF_11_VALIDO = this.#getCPF_12();
        this.#CPF_VALIDO = this.#getCPF();
    }

    #getCPF_11() {
        let cpfArray = this.#CPF_10.split('').map(Number);
        let total = this.#gerarTotal(cpfArray, 10);
        let digito = this.#gerarDigito(total);
        return this.#CPF_10.concat(digito.toString());
    }

    #getCPF_12() {
        let cpfArray = this.#CPF_11.split('').map(Number);
        let total = this.#gerarTotal(cpfArray, 11);
        let digito = this.#gerarDigito(total);
        return this.#CPF_11.concat(digito.toString());
    }

    #gerarTotal(array, limite) {
        return array.reduce((acc, el, index) => {
            let i = limite - index;
            return acc += el * i;
        }, 0);
    }

    #gerarDigito(total) {
        let digito = 11 - (total % 11);
        return digito > 9 ? 0 : digito;
    }

    #getCPF() {
        return this.#CPF_11_VALIDO;
    }

    isValid() {
        return this.#CPF_LIMPO === this.#CPF_VALIDO;
    }
}