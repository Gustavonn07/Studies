numero = int(input('Qual o número: '))
divisoes = 0
for divisores in range(1,numero+1):
    if numero % divisores == 0:
        divisoes += 1 # como se fosse score
        print('\033[36m', end='')
    else:
        print('\033[31m', end='')
    print(divisores, end=' ')
if divisoes > 2:
    print('\n\033[0mEsse número não é primo')
else:
    print('\n\033[0mEsse número é primo')
