// Manipulando Prototypes

const objA = {
    keyA: 'A'
};

const objB = {
    keyB: 'B'
};

const objC = {
    keyC: 'C'
};

// Pode ser configurado um prototipo para um objeto assim:
Object.setPrototypeOf(objA, objC);
Object.setPrototypeOf(objB, objA);

// Pode acessar o objA pelo objB:
console.log(objB.keyA);

// Um prototipo pode ter um prototipo:
console.log(objB.__proto__.__proto__);

// Cuidado ao acessar __proto__, use essa forma para acessar:
console.log(Object.getPrototypeOf(objA));

// Na prática: 
function Produto(n, p) {
    this.nome = n;
    this.preco = p;
};

Produto.prototype.desconto = function(desc) {
    this.preco = this.preco - (this.preco * (desc / 100))
}

Produto.prototype.aumento = function(desc) {
    this.preco = this.preco + (this.preco * (desc / 100))
}

const p1 = new Produto('chinelo', 100)

p1.aumento(10);
console.log(p1);

const p2 = {
    nome: 'Guarana',
    preco: 80
}

// Para reutilizar prototype:
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(12);
console.log(p2);

// Pode criar uma variavel ja com um prototipo:
const p3 = Object.create(Produto.prototype);
p3.preco = 122;
p3.aumento(23);

console.log(p3);