function Produto(nome, preco, estoque) {

    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        configurable: false, // reconfigurar
        enumerable: true, // mostra a chave
        get: () => {
            return estoquePrivado;
        },
        set: valor => {
            if(typeof valor === 'number') estoquePrivado = valor;
            return;
        }
    });
}

let p1 = new Produto("batata", 21, 3);

console.log(p1.estoque);
p1.estoque = "sdasd";
console.log(p1.estoque);
