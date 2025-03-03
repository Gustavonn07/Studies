const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {

    e.preventDefault();
    
    const INPUTS = {
        cpf: document.getElementById('cpf').value,
        user: document.getElementById('user').value,
        password: document.getElementById('password').value,
        passwordConfirm: document.getElementById('password2').value
    }
    
    console.log(INPUTS);
    let cpfValido = new ValidadorCPF(INPUTS.cpf).isValid();

    if (!cpfValido) return window.alert("CPF inválido.");
    
    if (!verificaInput(INPUTS.user)) return window.alert("Usuário deve ter apenas letras e números.");
    if (!limitadorCaracteres(3, 12, INPUTS.user)) return window.alert(`Usuário deve ter no mínimo 3 e no máximo 12 caracteres.`);
    
    if(!limitadorCaracteres(6, 12, INPUTS.password)) return window.alert(`Senha deve ter no mínimo 6 e no máximo 12 caracteres.`);
    if(INPUTS.password !== INPUTS.passwordConfirm) return window.alert("Senha não confere com Confirmar senha.");
    
    return window.alert("Forms concluído");
})
