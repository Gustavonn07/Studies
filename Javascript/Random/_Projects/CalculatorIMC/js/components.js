export class CalculatorIMC {
  #calcImc;
  constructor() {
    this.#calcImc = (w, h) => {
      return w / h ** 2;
    };
  }

  #statusIMC = {
    NORMAL: 1,
    ABOVE: 2,
    BELOW: 3,
  };

  #getMetaImc(status) {
    const metaObj = {
      [this.#statusIMC.NORMAL]: {
        class: "text-slate-900",
        text: "Seu IMC está no nível normal.",
      },
      [this.#statusIMC.ABOVE]: {
        class: "text-red-300",
        text: "Seu IMC está acima do nível normal.",
      },
      [this.#statusIMC.BELOW]: {
        class: "text-red-300",
        text: "Seu IMC está abaixo do nível normal.",
      },
    };
    return metaObj[status];
  }

  calculate(height, weight) {
    const resultIMC = this.#calcImc(weight, height);

    let status;
    if (resultIMC < 18.5) status = this.#statusIMC.BELOW;
    if (resultIMC >= 18.5 && resultIMC < 25) status = this.#statusIMC.NORMAL;
    if (resultIMC >= 25) status = this.#statusIMC.ABOVE;

    return {
      result: resultIMC,
      meta: {
        class: this.#getMetaImc(status).class,
        text: this.#getMetaImc(status).text,
      },
    };
  }
}
