// Tratamento e Lançamento de erros:

// Podem ser aninhados.
// Use try para testar e catch para corrigir:
try{
    console.log(naoExisto);
} catch(err){
    console.log('Deu erro');
}

// Cuidado ao expor erros do sistema, é uma estrutura delicada.
// Podemos lançar erros também para futuramente serem tratados com throw:
soma = (n1, n2) => {
    if (typeof(n1) !== 'number' || typeof(n2) !== 'number'){
        throw new Error ('n1 e n2 precisam ser números (number).');
    }
    else {
        console.log(n1 + n2);
    }
}

soma(2, 3);
// soma('2', '3');

// Para tratar use try e catch
try{
    soma('2', '3');
    soma('2', 3);
} catch(err){
    console.log('Valores entregues foram STR');
}

// finally pode ser omitido
// Pode usar finally para independente de ter tido erros ser exibido:
try{
    console.log('TESTE SEM ERROS');
}catch (err){
    console.log('ERRO');
}finally{
    console.log('SEMPRE SOU EXIBIDO');
}

try{
    console.log(a);
} catch (err){
    console.log('ERRO');
}finally{
    console.log('SEMPRE SOU EXIBIDO');
}