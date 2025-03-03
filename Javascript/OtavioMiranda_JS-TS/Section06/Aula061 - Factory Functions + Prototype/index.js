function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        falar() {console.log("oi")},
        comer() {console.log("Nhami")}
    }

    return Object.create(pessoaPrototype, {
        nome: {
            writable: true,
            enumerable: true,
            value: nome
        },
        sobrenome: {
            writable: true,
            enumerable: true,
            value: sobrenome
        }
    })
}

let p1 = criaPessoa("Luis", "Fer");
console.dir(p1);
p1.falar();
