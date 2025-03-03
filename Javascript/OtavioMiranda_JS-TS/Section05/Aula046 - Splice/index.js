// Método splice

// array.splice( inicio, elementos removidos, elemento adicionado,... ).
// O método splice serve para adicionar, remover e adicionar e remover elementos (Os 3 exemplos respectivamente).

// Adicionar:
// Dependendo do indice de inicio pode add no meio, inicio ou
const nomes = ["Gustavo", "Fernanda", "Ian", "Felicia"];
nomes.splice(3, 0, "Jorge", "Eduarda");
console.log(nomes);

// Remover:
const doces = ['Jujuba', 'Chocolate', 'Pipoca doce', 'Pirulito'];
doces.splice(1, 2)
console.log(doces);

// Adicionar e remover:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits);

// Aceita valores negativos para pegar um valor de tras para frente a ordem de acesso:
// Pega apartir do inicio para frente.
//                -4     -3     -2     -1
const valores = [20.50, 13.80, 10.00, 88.95];
valores.splice(-3, 2);
console.log(valores);

// Pode salvar elementos deletados em outra array:
const elementosSalvos = [11, 'Hungria', 'Jorge', 23,45, 'Branco'];
const elementosDeletados = elementosSalvos.splice(0, 2);
console.log(elementosSalvos, elementosDeletados);