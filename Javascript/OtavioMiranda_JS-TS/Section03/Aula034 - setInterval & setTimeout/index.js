// setInterval e setTimeout

let mostrarHora = () => {
    let data = new Date;
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function setIntervalVar() {
    console.log(mostrarHora())
}
// console.log(mostrarHora());

// O tempo é em ms.
// Usando setInterval() permite por timer para quando o código ocorre:
let a = setInterval(setIntervalVar, 1000);

// Para acabar o timer use setTimeout com clearInterval:
setTimeout(() => {
    clearInterval(a)
}, 5000);