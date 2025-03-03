
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = (quantia) => {
    this.preco += quantia;
}

Produto.prototype.desconto = (quantia) => {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);

const camisa = new Camiseta("FefeLinda", 230, "Amarelo");
camisa.aumento(100);

console.log(camisa);
