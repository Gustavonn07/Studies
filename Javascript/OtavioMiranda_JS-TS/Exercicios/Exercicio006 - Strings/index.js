const nome = prompt('Digite seu nome: ');

document.body.innerHTML = `Seu nome é ${nome}`;

document.body.innerHTML += `<br> Seu nome tem ${nome.length} letras`;

document.body.innerHTML += `<br> A segunda letra do seu nome é ${nome[1]}`; 

document.body.innerHTML += `<br> Qual o primeiro índice da letra "a" no seu nome? ${nome.indexOf('a')}`;

document.body.innerHTML += `<br> Qual o último índice da letra "a" no seu nome? ${nome.lastIndexOf('a')}`;

document.body.innerHTML += `<br> As últimas 3 letras do seu nome são: ${nome.substring(nome.length - 3)}`; 

document.body.innerHTML += `<br> As palavras do seu nome são: ${nome.split(' ')}`; 

document.body.innerHTML += `<br> ASeu nome com letras maiúsculas: ${nome.toLocaleUpperCase()}`; 

document.body.innerHTML += `<br> ASeu nome com letras minusculas: ${nome.toLowerCase()}`; 