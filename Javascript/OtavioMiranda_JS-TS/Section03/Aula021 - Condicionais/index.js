// Condicionais (Parte 01)

// Usei função para facilitar, mas não precisa ta dentro.

// Estruturam que ditam o que fazer.
// if e else:
function func(hora = 12){
    if (hora <= 12){
        console.log('Bom dia');
    }
    else{
        console.log('Boa noite');
    };

}

func(10); // Bom dia
func(23); // Boa noite

// Caso precise de mais condições pode usar if else (Quantas vezes quiser):

function func2(hora = 100){
    if (hora < 12){
        console.log('Bom dia');
    }
    else if(hora >= 12 && hora <= 18){
        console.log('Boa tarde');
    }
    else if(hora > 18 && hora <= 24){
        console.log('Boa noite');
    }
    else{
        console.log('Insira um valor certo');
    };

};

func2(10); // Bom dia
func2(15); // Boa tarde
func2(23); // Boa noite
func2(34); // Insira um valor correto
func2();   // Insira um valor correto

// If pode ser usado só.
// Else e else if não podem ser usados sem if.