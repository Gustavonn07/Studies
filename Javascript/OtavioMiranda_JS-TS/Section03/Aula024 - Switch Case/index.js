// Switch / Case

// const data = new Date('1987-04-21 00:00:00');
// const diaSemana = data.getDay();

// Pode usar o switch e case para facilitar o código:
// Use o default para caso não encontre um valor 

switch (new Date().getDay()){
    case 0:
        console.log('Sabado');
        break;
    case 1:
        console.log('Segunda-Feira');
        break;
    case 2:
        console.log('Terça-Feira');
        break;
    case 3:
        console.log('Quarta-Feira');
        break;
    case 4:
        console.log('Quinta-Feira');
        break;
    case 5:
        console.log('Sexta-Feira');
        break;
    case 6:
        console.log('Domingo');
        break;
    default:
        console.log('Dia não encontrado');
        break;
};