// Diferenças entre var, let e const

// 01 Let e Const não pode ser reatribuido, mas Var pode:
let a = 'eae';
var b = 'eae2';
const c = 'eae2';
// let a = 'eae3'; --> não funciona
// const a = 'eae3'; --> não funciona
var b = 'eae3'; // --> funciona

// 02 Let e Const possuem escopo de bloco --> {bloco ...}, Var não (de função):
let batata = 12;
const arroz = 'aaaa';
{   
    let batata = 13;
    const arroz = 'eeee';
};

// 03 Var tem hosting --> podem ser criadas depois de usadas (undefined):
console.log(nome + sobrenome + ultimonome);

// let nome = 'Gustavo'; -------------> Não funciona 
// const sobrenome = 'Nempomuceno'; --> Não funciona
var ultimonome = 'Nogueira';