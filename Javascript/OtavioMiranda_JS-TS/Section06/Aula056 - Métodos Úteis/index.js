const produto = {
    nome: "Caneca",
    preco: 8
}

const outroProduto = {data: "12/02/2023", ...produto, cor: "Azul"};
const maisUmProduto = {...outroProduto};

const novoProduto = Object.assign(produto, outroProduto);

console.log(outroProduto)
console.log(novoProduto);

console.log(Object.keys(novoProduto));

console.log(Object.getOwnPropertyDescriptor(produto, "nome"));


