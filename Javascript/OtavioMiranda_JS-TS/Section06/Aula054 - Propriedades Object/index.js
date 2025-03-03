function Produto(nome, preco, estoque) {

    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        configurable: false, // reconfigurar
        enumerable: false, // mostra a chave
        writable: false, // alterar valor
        value: estoque // valor
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true
        },
        preco: {
            enumerable: false
        }
    })
}

console.log(new Produto("batata", 21, ["aaa", 12]));