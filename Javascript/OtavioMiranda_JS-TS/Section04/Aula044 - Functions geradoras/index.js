// Funções geradoras

// Use yield em vez de return.
// Funções que entregam valores pausadamente:
function* geradora() {
    yield 'valor01';
    yield 'valor02';
    yield 'valor03';
}

g1 = geradora()
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

// Pode aninhas usando yield*:
function* geradora2() {
    yield* geradora()
    yield 'valor04';
    yield 'valor05';
}

g2 = geradora2()
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

// Podemos usar funções dentro de uma geradora dessa forma:

function* geradora3() {
    yield function () {
        console.log('eae1');
    }

    yield function() {
        console.log('eae2');
    }
};

g3 = geradora3();
f1 = g3.next().value;
f2 = g3.next().value;
f1();
f2();