const root = document.getElementById('root');

const DB = [
    { tag: 'h1', texto: 'Frase1'},
    { tag: 'h2', texto: 'Frase2'},
    { tag: 'h3', texto: 'Frase3'},
    { tag: 'h4', texto: 'Frase4'}
];

for(let i = 0; i < DB.length; i++) {
    let elemento = document.createElement(DB[i].tag);
    elemento.innerText = DB[i].texto;
    root.appendChild(elemento)
};