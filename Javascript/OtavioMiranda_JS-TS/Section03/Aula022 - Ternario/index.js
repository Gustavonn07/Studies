// Operação Ternária

// Simplificação de condicionais usando --> ? :
// ? --> if / verdadeira.
// : --> else / falsa.


const pontUser = 999; // Usuário normal

/* Funciona, mas é grande.

if (pontUser >= 1000){
    console.log('Usuário vip');
}
else{
    console.log('Usuário normal');
};

*/

const pontuacao = pontUser >= 1000 ? console.log('Usuário vip') : console.log('Usuário normal');

// Pode fazer com if, else e else if:
let valor = 230;

const valore = valor > 100 ? console.log('Valor é maior que 100') : valor < 100 && valor > 10 ? console.log('Valor é menor que 100 e maior que 10') : console.log('Valor é menor que 10');