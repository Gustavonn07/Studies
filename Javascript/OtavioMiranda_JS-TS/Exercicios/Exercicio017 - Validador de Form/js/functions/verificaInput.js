function verificaInput(texto) {
    const regex = /^[A-Za-z0-9]+$/;
    return regex.test(texto);
}