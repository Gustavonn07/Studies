n = int(input('Olá Quantos termos você quer mostrar da sequência de Fibonacci? '))
t1 = 0
t2 = 1
rep = 0
t3 = t1 + t2
print(f'{t1} -> {t2} ->', end=' ')
while rep != n - 2:
    rep += 1
    print(f'{t3}', end='')
    print(' -> ' if rep != n - 2 else '', end='')
    t1 = t2
    t2 = t3
    t3 = t1 + t2