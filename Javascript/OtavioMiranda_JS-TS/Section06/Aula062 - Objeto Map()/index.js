const pessoas = [
    {
        id: 3,
        nome: "Joana",
        idade: 23
    },
    {
        id: 2,
        nome: "Fernanda",
        idade: 18
    },
    {
        id: 1,
        nome: "Isa",
        idade: 29
    },
]

const novasPessoas = new Map();
for(const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas.get(2));


// const novasPessoas = {};
// for(const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = {...pessoa};
// }