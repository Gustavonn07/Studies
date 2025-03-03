// Funções recursivas

// Funções que se chamam.

function recursiva(max) {
    if(max > 10) return;
    console.log(max);
    max++;
    recursiva(max);
}

recursiva(0);