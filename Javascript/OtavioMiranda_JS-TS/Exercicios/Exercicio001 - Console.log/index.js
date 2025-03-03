const nome = 'Gustavo';
const horas = new Date().getHours().toString().padStart(2, '0');
const minutos = new Date().getMinutes().toString().padStart(2, '0');

switch (true) {
    case (horas >= '06' && horas < '12'):
        horario = 'manhã';
        break;
    case (horas >= '12' && horas < '18'):
        horario = 'tarde';
        break;
    default:
        horario = 'noite';
        break;
}

console.log(`Olá meu nome é "${nome}" e estou aprendendo javascript as ${horas}:${minutos} da ${horario}`);