// Relembrando arrays

// O array é indexado:
//                0        1        2
const nomes = ['Jorge', 'Luiza', 'Mario'];

// Podemos alterar um valor de uma array:
nomes[2] = 'Luiz';
console.log(nomes);

// Pode deletar um item de uma Array com delete (deixa um espaço vazio):
delete nomes[2];
console.log(nomes);

// Pode criar uma Array (Strings, Numbers, Objetos, Funções,...) com new Array:
const comidas = new Array('Batata', 'Panqueca', 'Feijão');
console.log(comidas);

// Para criar uma copia de uma array pode usar o rest operator:
const comidasCopia = [...comidas];
comidasCopia.pop();
console.log(comidas);
console.log(comidasCopia);