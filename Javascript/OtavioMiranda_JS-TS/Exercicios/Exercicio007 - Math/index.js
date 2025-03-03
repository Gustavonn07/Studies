const root = document.getElementById('root');
const numero = document.getElementById('input');
const btn = document.getElementById('btn');

class MathClass {
    #numInteiro
    constructor(num) {
        this.num = Number(num);
        this.#numInteiro = parseInt(this.num, 10);
    }

    tipoDeNumero() {
        Number.isInteger(this.num) ? this.tipo = 'Integer' : this.tipo = 'Float' ;
        return this.tipo;
    }

    raizQuadrada() {
        return Math.sqrt(this.#numInteiro).toFixed(2);
    }

    arredondando() {
        return Math.ceil(this.#numInteiro);
    }

    duasCasas() {
        return this.num.toFixed(2);
    }
}

btn.addEventListener('click', () => {
    const calc = new MathClass(numero.value);
    
    root.innerHTML = `
        <tr>
            <th scope="row">Tipo do valor: </th>
            <td>${calc.tipoDeNumero()}</td>
        </tr>
        <tr>
            <th scope="row">Raiz Quadrada: </th>
            <td>${calc.raizQuadrada()}</td>
        </tr>
        <tr>
            <th scope="row">Arredondado: </th>
            <td>${calc.arredondando()}</td>
        </tr>
        <tr>
            <th scope="row">Duas Casas Decimais: </th>
            <td>${calc.duasCasas()}</td>
        </tr>
    `;
});