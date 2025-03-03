// 705.484.450-52 & 070.987.720-03

/**
 * Como funciona o calculo do CPF:
 * 
 * 1 Passo:
 * - Pegar os 9 primeiros valores e ir multiplicando cada um por uma contagem regressiva (de 10 a 2):
 * --> ex:
 *      7   0   5   4   8   4   4   5   0
 *      x   x   x   x   x   x   x   x   x
 *      10  9   8   7   6   5   4   3   2
 *      =   =   =   =   =   =   =   =   =
 *      70  0   40  28  48  20  16  15  0 = total (237)
 * 
 *  2 Passo: 
 *  - Pegar o valor total e fazer esse calculo para retornar o primeiro digito:
 *  --> ex:
 *      11 - (total % 11) = primeiro digito (5)
 *  - Se o dígito for maior que 9, consideramos 0.
 * 
 *  3 Passo: 
 *  - Pegar os 10 primeiros valores e ir multiplicando cada um por uma contagem regressiva (de 11 a 2):
 *  --> ex:
 *      7   0   5   4   8   4   4   5   0   5
 *      x   x   x   x   x   x   x   x   x   x
 *      11 10   9   8   7   6   5   4   3   2
 *      =   =   =   =   =   =   =   =   =   =
 *      77  0   45  32  56  24  20  20  0   10 = total2 (284) 
 * 
 *  4 Passo: 
 *  - Pegar o valor total e fazer esse calculo para retornar o segundo digito:
 *  --> ex:
 *      11 - (total2 % 11) = segundo digito (5)
 *  - Se o dígito for maior que 9, consideramos 0.
 */

let a = 12

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

const CPF = "705.484.450-52";
const CPF2 = "705.484.450-62";
const vCPF = new ValidadorCPF(CPF);
const vCPF2 = new ValidadorCPF(CPF2);

console.log(vCPF.isValid());
console.log(vCPF2.isValid());
